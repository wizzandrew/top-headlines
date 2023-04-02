import React, { useState } from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesUS } from "../shared/newsSources";
import * as api from "../shared/api";
import { NewsArticle } from "../shared/models";

export default function AmericaComponent() {
  // Variable to hold selection from drop dowm menu
  // const [firstDropdownCurrentOption, setFirstDropdownOption] = useState<{
  //   id: string;
  //   name: string;
  // }>({ id: "", name: "" });

  // Variable to hold news articles
  const [news, setNews] = useState<NewsArticle[]>([]);

  // Variable to keep state of a drop down with proper names for sources
  const dropdownState = {
    title: "US",
    options: [SourcesUS.politico, SourcesUS.foxNews, SourcesUS.cbsNews],
  };

  const fetchNews = async (source: string) => {
    console.log(source);
    //const news = await api.getHeadlinesBySource(source);
    const news = api.getFakeHeadlines(source);
    setTimeout(() => {
      console.log(news);
      setNews(news);
    }, 1500);
  };
  return (
    <React.Fragment>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Dropdown
              title={dropdownState.title}
              options={dropdownState.options}
              loadNews={fetchNews}
            />
          </div>
          <div className="col-10">
            <News articles={news} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
