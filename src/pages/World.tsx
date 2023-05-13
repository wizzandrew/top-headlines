import React from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";
import "../css/NewsCategoryPage.css";

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
            <div className="newsCategoryBanner col-12">
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
            <div className="newsCategoryArticles">
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
