import React, { useState, useEffect } from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponentWithTranslate";
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

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleUS: "US",
    titleArgentina: "Argentina",
    optionsUS: [SourcesUS.politico, SourcesUS.foxNews, SourcesUS.cbsNews],
    optionsArgentina: [SourcesArgentina.infobae],
  };

  // variable to manage translate feature of the NewsComponent
  const [translate, setTranslate] = useState(false);

  // hooks to keep translate state in localStorage
  useEffect(() => {
    const localSt = window.localStorage.getItem("translateAmerica");
    if (typeof localSt === "string") setTranslate(JSON.parse(localSt));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("translateAmerica", translate + "");
  }, [translate]);

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
                title={dropdownState.titleUS}
                options={dropdownState.optionsUS}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateFalse}
              />
            </div>
            <div className="dropdownMenu">
              <Dropdown
                title={dropdownState.titleArgentina}
                options={dropdownState.optionsArgentina}
                loadNews={fetchNews}
                toggleTranslate={toggleTranslateTrue}
              />
            </div>
          </div>
        </div>
        <div>{topheadingsAmerica === null ? "Choose sources" : ""}</div>
        <div className="articles">
          <News
            page="home"
            articles={topheadingsAmerica}
            articlesCategory="America"
            translate={translate}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
