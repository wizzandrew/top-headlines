import React from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";

export default function Business() {
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
            <div className="worldBanner col-12">
              <h2>BUSINESS</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button
              onClick={() => {
                fetchNews.fetchNewsByCategory("business");
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
                page="business"
                articles={topheadings}
                requestError={requestError}
                articlesCategory="Business"
                newsByCategory={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
