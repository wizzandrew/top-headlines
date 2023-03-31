import React, { useState } from "react";
import Tab from "./HomeTabComponent";
import Dropdown from "./TabDropDownMenuComponent";
import News from "./NewsComponent";
import { SourcesUS } from "../shared/newsSources";

export default function AmericaComponent() {
  const [firstDropdownCurrentOption, setFirstDropdownOption] = useState("");
  const dropdownState = {
    title: "US",
    options: [
      SourcesUS.politico.name,
      SourcesUS.foxNews.name,
      SourcesUS.cbsNews.name,
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <Tab />
      </div>
      <div className="row">
        <div className="col-2">
          <Dropdown
            title={dropdownState.title}
            options={dropdownState.options}
            setCurrentOption={setFirstDropdownOption}
          />
        </div>
        <div className="col-10">
          <News />
        </div>
      </div>
    </div>
  );
}
