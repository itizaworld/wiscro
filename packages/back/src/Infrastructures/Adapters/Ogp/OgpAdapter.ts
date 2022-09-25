import { IOgpAdapter } from './IOgpAdapter';
import { JSDOM } from 'jsdom';
import axios from 'axios';
import { Ogp } from '@wiscro/common';

export class OgpAdapter implements IOgpAdapter {
  async fetch(url: string): Promise<Ogp> {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const meta = dom.window.document.querySelectorAll('head > meta');

    const ogp: Record<string, string> & { url: string } = {
      url,
    };

    Array.from(meta)
      //metaタグの内、property属性を持つのがOGP情報である
      .filter((element) => element.hasAttribute('property'))
      .forEach((element) => {
        const attr = element.getAttribute('property');
        const content = element.getAttribute('content');

        if (!attr || !content) return;
        console.log(attr, content);

        switch (attr) {
          case 'og:site_name':
            ogp.siteName = content;
            break;
          case 'og:title':
            ogp.title = content;
            break;
          case 'og:image':
            ogp.image = content;
            break;
          case 'og:description':
            ogp.description = content;
            break;

          default:
            break;
        }
      }, {});

    return ogp;
  }
}
