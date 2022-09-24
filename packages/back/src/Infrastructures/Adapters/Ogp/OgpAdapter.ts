import { IOgpAdapter } from './IOgpAdapter';
import { JSDOM } from 'jsdom';
import axios from 'axios';

export class OgpAdapter implements IOgpAdapter {
  async fetch(url: string): Promise<{
    url?: string;
    title?: string;
    image?: string;
    description?: string;
    siteName?: string;
  }> {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const meta = dom.window.document.querySelectorAll('head > meta');

    return (
      Array.from(meta)
        //metaタグの内、property属性を持つのがOGP情報である
        .filter((element) => element.hasAttribute('property'))
        .reduce((pre: Record<string, string | null>, ogp) => {
          const attr = ogp.getAttribute('property');
          const content = ogp.getAttribute('content');

          if (!attr) return pre;
          const property = attr.trim().replace('og:', '');

          if (!property) return pre;

          pre[property] = content;
          return pre;
        }, {})
    );
  }
}
