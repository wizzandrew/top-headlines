import React from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesSouthAfrica } from "../shared/newsSources";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";

export default function TabAfricaComponent() {
  //dispatch
  const dispatch = useAppDispatch();

  //global state
  const topheadingsAfrica = useAppSelector(
    (state) => state.topHeadings.topHeadings
  );

  // Variable to keep state of drop downs with proper names for sources
  const dropdownState = {
    titleSouthAfrica: "SouthAfrica",
    optionsSouthAfrica: [SourcesSouthAfrica.news24],
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
                title={dropdownState.titleSouthAfrica}
                options={dropdownState.optionsSouthAfrica}
                loadNews={fetchNews}
              />
            </div>
          </div>
          <div className="col-10">
            <News articles={topheadingsAfrica} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
