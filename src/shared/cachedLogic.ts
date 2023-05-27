import { NewsArticle } from "./models";
import * as souAfrNews24 from "./cached/source/africaSouAfrNews24.json";
import * as argInfobae from "./cached/source/americaArgInfobae.json";
import * as usCbs from "./cached/source/americaUsCbs.json";
import * as usFox from "./cached/source/americaUsFox.json";
import * as usPolitico from "./cached/source/americaUsPolitico.json";
import * as indHindu from "./cached/source/asiaIndHindu.json";
import * as indThetimes from "./cached/source/asiaIndThetimes.json";
import * as frLemonde from "./cached/source/europeFrLemonde.json";
import * as frLiberation from "./cached/source/europeFrLiberation.json";
import * as gerBild from "./cached/source/europeGerBild.json";
import * as gerSpiegel from "./cached/source/europeGerSpiegel.json";
import * as ruLenta from "./cached/source/europeRuLenta.json";
import * as ruRbc from "./cached/source/europeRuRbc.json";
import * as ukBbc from "./cached/source/europeUkBbbc.json";
import * as newsSourcesEnums from "./newsSources";
import * as worldArticles from "./cached/category/worldNews.json";
import * as businessArticles from "./cached/category/businessNews.json";
import * as entertainmentArticles from "./cached/category/entertainment.json";
import * as healthArticles from "./cached/category/health.json";
import * as techArticles from "./cached/category/tech.json";
import * as sportsArticles from "./cached/category/sports.json";
import * as scienceArticles from "./cached/category/science.json";

// returns cached news provided with category(general/business/tech...)
export function getCachedNewsBySource(source: string) {
  let result: NewsArticle[] = [];

  if (source === newsSourcesEnums.SourcesArgentina.infobae.id) {
    let jsonString = JSON.stringify(argInfobae);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesFrance.leMonde.id) {
    let jsonString = JSON.stringify(frLemonde);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesFrance.liberation.id) {
    let jsonString = JSON.stringify(frLiberation);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesGermany.bild.id) {
    let jsonString = JSON.stringify(gerBild);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesGermany.spiegelOnline.id) {
    let jsonString = JSON.stringify(gerSpiegel);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesIndia.theHindu.id) {
    let jsonString = JSON.stringify(indHindu);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesIndia.timesIndia.id) {
    let jsonString = JSON.stringify(indThetimes);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesRussia.lenta.id) {
    let jsonString = JSON.stringify(ruLenta);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesRussia.rbc.id) {
    let jsonString = JSON.stringify(ruRbc);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesSouthAfrica.news24.id) {
    let jsonString = JSON.stringify(souAfrNews24);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesUK.bbcNews.id) {
    let jsonString = JSON.stringify(ukBbc);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesUS.cbsNews.id) {
    let jsonString = JSON.stringify(usCbs);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesUS.foxNews.id) {
    let jsonString = JSON.stringify(usFox);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (source === newsSourcesEnums.SourcesUS.politico.id) {
    let jsonString = JSON.stringify(usPolitico);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  }

  return result;
}

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
  } else if (category === "entertainment") {
    let jsonString = JSON.stringify(entertainmentArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (category === "health") {
    let jsonString = JSON.stringify(healthArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (category === "technology") {
    let jsonString = JSON.stringify(techArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (category === "sports") {
    let jsonString = JSON.stringify(sportsArticles);
    const news = JSON.parse(jsonString);
    if (news && Array.isArray(news.articles)) {
      result = convertApiDataToNewsArticle(news.articles);
    }
  } else if (category === "science") {
    let jsonString = JSON.stringify(scienceArticles);
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
