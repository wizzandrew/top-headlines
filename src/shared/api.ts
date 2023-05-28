import { NewsArticle } from "./models";
import { fakeArticles } from "./fakeData";
import * as cached from "./cachedLogic";
import type {
  TranslateArticle,
  TranslateArticleResult,
  TranslateArticleTitles,
} from "../redux/topheadingsSlice";

const URL = "https://newsapi.org/v2/top-headlines?";
const apiKey = "a998da526b8944199ff7dc7cdf0b805e";

// fetch request to get top headlines by their source
export async function getHeadlinesBySource(
  source: string
): Promise<NewsArticle[]> {
  // Response variable is for response from fetch request
  // JsonData variable is for JSON representation of response data
  // Result variable is for return statement
  let response;
  let jsonData: any[] = [];
  let result: NewsArticle[] = [];

  // Enclose fetch request into try/catch because it can fail
  try {
    response = await fetch(URL + "sources=" + source + "&apiKey=" + apiKey);
  } catch (error) {
    console.log("getHeadlinesBySource " + error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.articles))
        .catch((err) => console.log(err));

      if (jsonData && Array.isArray(jsonData)) {
        result = convertApiDataToNewsArticle(jsonData);
      }

      // Return the sunny case scenario
      return result as NewsArticle[];
    } else {
      // check for 429(free requests exceeded) error from server
      // load cached news
      if (response.status === 429) {
        result = cached.getCachedNewsBySource(source);
        return result as NewsArticle[];
      }

      throw new Error(
        "\nStatus: " + response.status + " " + response.statusText
      );
    }
  }

  // Return empty arr if smth fails
  return [];
}

// fetch request to get top headlines by their category
export async function getHeadlinesByCategory(
  category: string
): Promise<NewsArticle[]> {
  // Response variable is for response from fetch request
  // JsonData variable is for JSON representation of response data
  // Result variable is for return statement
  let response;
  let jsonData: any[] = [];
  let result: NewsArticle[] = [];

  // Enclose fetch request into try/catch because it can fail
  try {
    response = await fetch(
      URL + "category=" + category + "&language=en" + "&apiKey=" + apiKey
    );
  } catch (error) {
    console.log("getHeadlinesByCategory " + error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.articles))
        .catch((err) => console.log(err));

      if (jsonData && Array.isArray(jsonData)) {
        result = convertApiDataToNewsArticle(jsonData);
      }

      // Return the sunny case scenario
      return result as NewsArticle[];
    } else {
      // check for 429(free requests exceeded) error from server
      // load cached news
      if (response.status === 429) {
        result = cached.getCachedNewsByCategory(category);
        return result as NewsArticle[];
      }

      throw new Error(
        "\nStatus: " + response.status + " " + response.statusText
      );
    }
  }

  // Return empty arr if smth fails
  return [];
}

// fetch request to get top headlines by search query
export async function getHeadlinesBySearch(
  query: string
): Promise<NewsArticle[]> {
  // Response variable is for response from fetch request
  // JsonData variable is for JSON representation of response data
  // Result variable is for return statement
  let response;
  let jsonData: any[] = [];
  let result: NewsArticle[] = [];

  // Enclose fetch request into try/catch because it can fail
  try {
    response = await fetch(URL + "q=" + query + "&apiKey=" + apiKey);
  } catch (error) {
    console.log("getHeadlinesBySearch " + error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.articles))
        .catch((err) => console.log(err));

      if (jsonData && Array.isArray(jsonData)) {
        result = convertApiDataToNewsArticle(jsonData);
      }

      // Return the sunny case scenario
      return result as NewsArticle[];
    } else {
      throw new Error(
        "\nStatus: " + response.status + " " + response.statusText
      );
    }
  }

  // Return empty arr if smth fails
  return [];
}

// fetch request to translate article
export async function getTranslateArticle(
  article: TranslateArticle
): Promise<TranslateArticleResult | null> {
  // Response variable is for response from fetch request
  // JsonData variable is for JSON representation of response data
  // Result variable is for return statement
  let response;
  let jsonData: any = {};
  let result: TranslateArticleResult;

  // Enclose fetch request into try/catch because it can fail
  try {
    response = await fetch(
      "http://localhost:5000/translate?title=" +
        article.title +
        "&description=" +
        article.description +
        "&content=" +
        article.content
    );
  } catch (error) {
    console.log("getTranslateArticle " + error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.result))
        .catch((err) => console.log(err));

      // Return the sunny case scenario
      result = {
        title: jsonData.title,
        oldTitle: article.title,
        description: jsonData.description,
        content: jsonData.content,
        topHeadingsType: article.topHeadingsType,
      };
      return result;
    } else {
      throw new Error(
        "\nStatus: " + response.status + " " + response.statusText
      );
    }
  }

  // Return null if smth fails
  return null;
}

// fetch request to translate article titles
export async function getTranslateArticleTitles(
  articles: TranslateArticleTitles
): Promise<string[] | null> {
  // Response variable is for response from fetch request
  // JsonData variable is for JSON representation of response data
  // Result variable is for return statement
  let response;
  let jsonData: any = {};
  let result: string[];

  //construct array of article titles
  const articleTitles: string[] = [];
  articles.articles.map((article) => articleTitles.push(article.title));

  // Enclose fetch request into try/catch because it can fail
  try {
    response = await fetch(
      "http://localhost:5000/translate/titles?titles=" +
        articleTitles.toString()
    );
  } catch (error) {
    console.log("getTranslateArticleTitles " + error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.result))
        .catch((err) => console.log(err));

      // Return the sunny case scenario
      result = jsonData.titles;
      return result;
    } else {
      throw new Error(
        "\nStatus: " + response.status + " " + response.statusText
      );
    }
  }

  // Return null if smth fails
  return null;
}

// Fake request returning data
export function getFakeHeadlines(source: string | undefined): NewsArticle[] {
  const response: NewsArticle[] = fakeArticles;
  return response;
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
