import React, { useState } from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesUS } from "../shared/newsSources";
import * as api from "../shared/api";
import { NewsArticle } from "../shared/models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";

export default function AmericaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAmerica = useAppSelector(
    (state) => state.topHeadings.topHeadings
  );

  // Variable to keep state of a drop down with proper names for sources
  const dropdownState = {
    title: "US",
    options: [SourcesUS.politico, SourcesUS.foxNews, SourcesUS.cbsNews],
  };

  // Fetch news given source
  const fetchNews = async (source: string) => {
    console.log(source);
    //const news = await api.getHeadlinesBySource(source);
    //const news = api.getFakeHeadlines(source);
    dispatch(topHeadingsSlice.fetchNews(source));
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
            <News articles={topheadingsAmerica} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
