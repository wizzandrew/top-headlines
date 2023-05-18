import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesSouthAfrica } from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/TabComponent.css";

export default function TabAfricaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAfrica = useAppSelector(
    (state) => state.topHeadings.topHeadingsSource
  );

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleSouthAfrica: "SouthAfrica",
    optionsSouthAfrica: [SourcesSouthAfrica.news24],
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
                title={dropdownState.titleSouthAfrica}
                options={dropdownState.optionsSouthAfrica}
                loadNews={fetchNews}
              />
            </div>
          </div>
        </div>
        <div>{topheadingsAfrica === null ? "Choose sources" : ""}</div>
        <div className="articles">
          <News
            page="home"
            articles={topheadingsAfrica}
            articlesCategory="Africa"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
