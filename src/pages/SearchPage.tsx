import React, { useEffect } from "react";
import News from "../components/NewsComponent";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { deactivateSearchFlag } from "../redux/topheadingsSlice";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/SearchPage.css";

type SearchPageProps = {
  query: string | undefined;
};

export default function SearchPage(props: SearchPageProps) {
  // dispatch
  const dispatch = useAppDispatch();

  // global state
  const searchFlag = useAppSelector((state) => state.topHeadings.searchFlag);
  const topheadings = useAppSelector(
    (state) => state.topHeadings.topHeadingsSearch
  );

  // Fetch news
  const fetchNews = async (query: string | undefined) => {
    console.log("fetching news for: " + query);
    if (query && query.length > 0) {
      dispatch(topHeadingsSlice.fetchNewsBySearch(query));
    }
  };

  useEffect(() => {
    if (searchFlag) {
      fetchNews(props.query);
      dispatch(deactivateSearchFlag());
    }
  }, [searchFlag]);

  return (
    <React.Fragment>
      <div className="holder" style={{ backgroundColor: "#086199" }}>
        <div className="container">
          <div className="row">
            <div className="searchBanner col-12">
              <h2>SEARCH</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsSearchResults">
              <News
                page="search"
                articles={topheadings}
                articlesCategory="World"
                translate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
