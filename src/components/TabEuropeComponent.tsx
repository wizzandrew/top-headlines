import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import {
  SourcesUK,
  SourcesGermany,
  SourcesFrance,
  SourcesRussia,
} from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";

export default function TabEuropeComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsEurope = useAppSelector(
    (state) => state.topHeadings.topHeadings
  );

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleUK: "United Kingdom",
    titleGermany: "Germany",
    titleFrance: "France",
    titleRussia: "Russia",
    optionsUK: [SourcesUK.bbcNews],
    optionsGermany: [SourcesGermany.bild, SourcesGermany.spiegelOnline],
    optionsFrance: [SourcesFrance.leMonde, SourcesFrance.liberation],
    optionsRussia: [SourcesRussia.lenta, SourcesRussia.rbc],
  };

  // Fetch news given source
  const fetchNews = async (source: string) => {
    console.log(source);
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
            <div className="dropdowns">
              <Dropdown
                title={dropdownState.titleUK}
                options={dropdownState.optionsUK}
                loadNews={fetchNews}
              />
              <Dropdown
                title={dropdownState.titleGermany}
                options={dropdownState.optionsGermany}
                loadNews={fetchNews}
              />
              <Dropdown
                title={dropdownState.titleFrance}
                options={dropdownState.optionsFrance}
                loadNews={fetchNews}
              />
              <Dropdown
                title={dropdownState.titleRussia}
                options={dropdownState.optionsRussia}
                loadNews={fetchNews}
              />
            </div>
          </div>
          <div className="col-10">
            <News articles={topheadingsEurope} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
