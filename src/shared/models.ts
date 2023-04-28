// domain model
export type NewsArticlee = {
  source: { id?: string; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: Date;
  content?: string;
};

type NewsArticleSource = {
  id?: string;
  name: string;
};

export class NewsArticle {
  readonly source: NewsArticleSource;
  readonly author: string | null;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly urlToImage?: string;
  readonly publishedAt: Date;
  readonly content?: string;

  constructor(
    source: NewsArticleSource,
    auth: string | null,
    title: string,
    desc: string,
    url: string,
    urlImg: string | undefined,
    published: Date,
    content: string | undefined
  ) {
    this.source = source;
    this.author = auth;
    this.title = title;
    this.description = desc;
    this.url = url;
    this.urlToImage = urlImg;
    this.publishedAt = published;
    this.content = content;
  }

  // format date to string e.g."31/03 18:28"
  datePublished(): string {
    const date = new Date(this.publishedAt).toISOString();

    // make sure the ISO string is of right format
    if (date && date.length > 16) {
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);
      const hour = date.slice(11, 13);
      const minute = date.slice(14, 16);
      return day + "/" + month + " " + hour + ":" + minute;
    } else {
      return "";
    }
  }

  // clear this.content of this '[+2123 chars]'
  contentCleared(): string | undefined {
    let content = this.content;
    let leftSquareBracketIndex = 0;

    // make sure this.content isnt undefined
    if (typeof content === "string" && content.length > 0) {
      // loop through chars of content to find index of '['
      for (let i: number = 0; i < content.length; i++) {
        if (content.charAt(i) === "[") {
          leftSquareBracketIndex = i;
          break;
        }
      }

      // return if found "[" and need to extract substring
      if (leftSquareBracketIndex > 0) {
        return content.substring(0, leftSquareBracketIndex);
      }
      // return if didnt find "["
      else {
        return content;
      }
    }

    return content;
  }
}
