import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesIndia } from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";

export default function TabAsiaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAsia = useAppSelector(
    (state) => state.topHeadings.topHeadings
  );

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleIndia: "India",
    optionsIndia: [SourcesIndia.theHindu, SourcesIndia.timesIndia],
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
                title={dropdownState.titleIndia}
                options={dropdownState.optionsIndia}
                loadNews={fetchNews}
              />
            </div>
          </div>
          <div className="col-10">
            <News articles={topheadingsAsia} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
