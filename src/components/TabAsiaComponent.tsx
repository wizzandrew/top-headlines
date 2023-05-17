import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesIndia } from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/TabComponent.css";

export default function TabAsiaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAsia = useAppSelector(
    (state) => state.topHeadings.topHeadingsSource
  );
  const requestError = useAppSelector((state) => state.topHeadings.error);

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleIndia: "India",
    optionsIndia: [SourcesIndia.theHindu, SourcesIndia.timesIndia],
  };

  // Fetch news given source
  const fetchNews = async (source: string) => {
    console.log("fetching news for: " + source);
    dispatch(topHeadingsSlice.fetchNewsBySource(source));
  };

  return (
    <React.Fragment>
      <div className="tabHolder">
        <div className="container">
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
      <div className="container newsHolder">
        <div className="row dropdownMenus">
          <div className="dropdowns">
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleIndia}
                options={dropdownState.optionsIndia}
                loadNews={fetchNews}
              />
            </div>
          </div>
        </div>
        <div>{topheadingsAsia === null ? "Choose sources" : ""}</div>
        <div className="articles">
          <News
            page="home"
            articles={topheadingsAsia}
            articlesCategory="Asia"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
