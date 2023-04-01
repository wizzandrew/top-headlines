import { NewsArticle } from "./models";
import { fakeArticles } from "./fakeData";

const URL = "https://newsapi.org/v2/top-headlines?";
const apiKey = "a998da526b8944199ff7dc7cdf0b805e";

export async function getHeadlinesBySource(
  source: string
): Promise<NewsArticle[]> {
  // Result variable is for return statement
  // Response variable is for response from fetch request
  let result: NewsArticle[] = [];
  let response;

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
        .then((data) => (result = data?.articles))
        .catch((err) => console.log(err));

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
