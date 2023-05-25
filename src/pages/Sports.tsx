import React, { useEffect } from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";

export default function Sports() {
  // global state
  const topheadings = useAppSelector(
    (state) => state.topHeadings.topHeadingsCategory
  );
  const thCurrent = useAppSelector(
    (state) => state.topHeadings.topHeadingsCategoryCurrent
  );

  // dispatch methods
  const fetchNews = useFetchHook().fetchNewsByCategory;
  const setThCurrent = useFetchHook().dispatchSetTopHeadingsCurrent;

  // useEffect hook
  useEffect(() => {
    if (thCurrent !== "sports") {
      fetchNews("sports");
      setThCurrent("sports");
    }
  }, []);

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
          <div className="col-12">
            <div className="newsCategoryArticles">
              <News
                page="sports"
                articles={topheadings}
                articlesCategory="Sports"
                translate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
