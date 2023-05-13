import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesUS, SourcesArgentina } from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/TabComponent.css";

export default function AmericaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAmerica = useAppSelector(
    (state) => state.topHeadings.topHeadingsSource
  );
  const requestError = useAppSelector((state) => state.topHeadings.error);

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleUS: "US",
    titleArgentina: "Argentina",
    optionsUS: [SourcesUS.politico, SourcesUS.foxNews, SourcesUS.cbsNews],
    optionsArgentina: [SourcesArgentina.infobae],
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
                title={dropdownState.titleUS}
                options={dropdownState.optionsUS}
                loadNews={fetchNews}
              />
            </div>
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleArgentina}
                options={dropdownState.optionsArgentina}
                loadNews={fetchNews}
              />
            </div>
          </div>
        </div>
        <div className="articles">
          <News
            page="home"
            articles={topheadingsAmerica}
            requestError={requestError}
            articlesCategory="America"
            newsByCategory={false}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
