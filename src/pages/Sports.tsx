import React from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";

export default function Sports() {
  // global state
  const topheadings = useAppSelector(
    (state) => state.topHeadings.topHeadingsCategory
  );
  const requestError = useAppSelector((state) => state.topHeadings.error);
  const fetchNews = useFetchHook();

  return (
    <>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <div className="newsCategoryBanner col-12">
              <h2>SPORTS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button
              onClick={() => {
                fetchNews.fetchNewsByCategory("sports");
              }}
            >
              Load news
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="newsCategoryArticles">
              <News
                page="sports"
                articles={topheadings}
                requestError={requestError}
                articlesCategory="Sports"
                newsByCategory={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
