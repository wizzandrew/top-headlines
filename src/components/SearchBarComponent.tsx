import React, { useState } from "react";
import { Input, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { activateSearchFlag } from "../redux/topheadingsSlice";
import searchIcon from "../img/search-icon.svg";
import "../css/SearchBarComponent.css";

export default function SearchBarComponent() {
  // state for search query
  const [searchQuery, setSearch] = useState("");

  // activating search flag
  // it enables fetch request in the SearchPage to execute
  const dispacth = useAppDispatch();
  const handleSearch = () => {
    dispacth(activateSearchFlag());
  };

  return (
    <InputGroup className="searchInputGroup">
      <Input
        id="searchInput"
        name="search"
        type="text"
        value={searchQuery}
        placeholder="Search TH"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Link
        className="searchLink"
        to={`/search/query/${searchQuery}`}
        onClick={handleSearch}
      >
        <img width={20} height={21} src={searchIcon} alt=""></img>
      </Link>
    </InputGroup>
  );
}
