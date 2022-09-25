export class Ogp {
  readonly url: string;
  readonly favicon?: string;
  readonly title?: string;
  readonly image?: string;
  readonly description?: string;
  readonly siteName?: string;

  constructor(init: Ogp) {
    this.url = init.url;
    this.favicon = init.favicon;
    this.title = init.title;
    this.image = init.image;
    this.description = init.description;
    this.siteName = init.siteName;
  }
}
