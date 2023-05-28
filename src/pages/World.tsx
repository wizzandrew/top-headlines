import React, { useEffect } from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";
import "../css/NewsCategoryPage.css";

export default function World() {
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
    if (thCurrent !== "general") {
      fetchNews("general");
      setThCurrent("general");
    }
  }, []);

  return (
    <React.Fragment>
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
          <div className="col-12">
            <div className="newsCategoryArticles">
              <News
                page="world"
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
