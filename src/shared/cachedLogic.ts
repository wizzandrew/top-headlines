import { NewsArticle } from "./models";
import * as worldArticles from "./cached/category/worldNews.json";
import * as businessArticles from "./cached/category/businessNews.json";

function getCachedNewsBySource(source: string) {}

// returns cached news provided with category(general/business/tech...)
export function getCachedNewsByCategory(category: string): NewsArticle[] {
  let result: NewsArticle[] = [];

  if (category === "general") {
    let jsonString = JSON.stringify(worldArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (category === "business") {
    let jsonString = JSON.stringify(businessArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  }

  return result;
}

// Converts JSON News Articles to array with instances of NewsArticle class
function convertApiDataToNewsArticle(apiData: any[]): NewsArticle[] {
  let news: NewsArticle[] = [];

  for (let i = 0; i < apiData.length; i++) {
    const newsArticle = new NewsArticle(
      apiData[i].source,
      apiData[i].author,
      apiData[i].title,
      apiData[i].description,
      apiData[i].url,
      apiData[i].urlToImage,
      apiData[i].publishedAt,
      apiData[i].content
    );
    news.push(newsArticle);
  }

  return news;
}
