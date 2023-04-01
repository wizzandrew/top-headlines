export type NewsArticle = {
  source: { id?: string; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: Date;
  content?: string;
};
