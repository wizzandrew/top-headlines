import React, { useEffect, useRef } from "react";
import News from "../components/NewsComponent";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import "../css/World.css";
import useFetchHook from "../shared/fetchHook";

export default function World() {
  // global state
  const topheadings = useAppSelector(
    (state) => state.topHeadings.topHeadingsCategory
  );
  const requestError = useAppSelector((state) => state.topHeadings.error);

  // Fetch news
  // const fetchNews = async (category: string) => {
  //   console.log("fetching news for: " + category);
  //   dispatch(topHeadingsSlice.fetchNewsByCategory(category));
  // };
  const fetchNews = useFetchHook();

  return (
    <>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <div className="worldBanner col-12">
              <h2>WORLD</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button
              onClick={() => {
                fetchNews.fetchNewsByCategory("general");
              }}
            >
              Load news
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="worldArticles">
              <News
                page="world"
                articles={topheadings}
                requestError={requestError}
                articlesCategory="World"
                newsByCategory={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
