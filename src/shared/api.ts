import { NewsArticle } from "./models";
import { fakeArticles } from "./fakeData";

const URL = "https://newsapi.org/v2/top-headlines?";
const apiKey = "a998da526b8944199ff7dc7cdf0b805e";

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
    console.log("getHeadlinesBySource ", error);
  }

  // Check wheteher response has got smth from api
  if (response !== undefined) {
    if (response.ok) {
      await response
        .json()
        .then((data) => (jsonData = data?.articles))
        .catch((err) => console.log(err));

      if (jsonData && Array.isArray(jsonData)) {
        for (let i = 0; i < jsonData.length; i++) {
          const newsArticle = new NewsArticle(
            jsonData[i].source,
            jsonData[i].author,
            jsonData[i].title,
            jsonData[i].description,
            jsonData[i].url,
            jsonData[i].urlToImage,
            jsonData[i].publishedAt,
            jsonData[i].content
          );
          result.push(newsArticle);
        }
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

// Fake request returning data
export function getFakeHeadlines(source: string): NewsArticle[] {
  const response: NewsArticle[] = fakeArticles;
  return response;
}
