import React, { useState, useEffect } from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponentWithTranslate";
import News from "./NewsComponent";
import {
  SourcesUK,
  SourcesGermany,
  SourcesFrance,
  SourcesRussia,
} from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/TabComponent.css";

export default function TabEuropeComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsEurope = useAppSelector(
    (state) => state.topHeadings.topHeadingsSource
  );

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleUK: "UK",
    titleGermany: "Germany",
    titleFrance: "France",
    titleRussia: "Russia",
    optionsUK: [SourcesUK.bbcNews],
    optionsGermany: [SourcesGermany.bild, SourcesGermany.spiegelOnline],
    optionsFrance: [SourcesFrance.leMonde, SourcesFrance.liberation],
    optionsRussia: [SourcesRussia.lenta, SourcesRussia.rbc],
  };

  // variable to manage translate feature of the NewsComponent
  const [translate, setTranslate] = useState(false);

  // hooks to keep translate state in localStorage
  useEffect(() => {
    const localSt = window.localStorage.getItem("translateEurope");
    if (typeof localSt === "string") setTranslate(JSON.parse(localSt));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("translateEurope", translate + "");
  }, [translate]);

  // set translate to default false when loading america tab
  useEffect(() => {
    if (topheadingsEurope === null) {
      setTranslate(false);
    }
  }, [topheadingsEurope]);

  const toggleTranslateTrue = () => {
    setTranslate(true);
  };
  const toggleTranslateFalse = () => {
    setTranslate(false);
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
                title={dropdownState.titleUK}
                options={dropdownState.optionsUK}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateFalse}
              />
            </div>
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleGermany}
                options={dropdownState.optionsGermany}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateTrue}
              />
            </div>
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleFrance}
                options={dropdownState.optionsFrance}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateTrue}
              />
            </div>
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleRussia}
                options={dropdownState.optionsRussia}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateTrue}
              />
            </div>
          </div>
        </div>
        <div>{topheadingsEurope === null ? "Choose sources" : ""}</div>
        <div className="articles">
          <News
            page="home"
            articles={topheadingsEurope}
            articlesCategory="Europe"
            translate={translate}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
