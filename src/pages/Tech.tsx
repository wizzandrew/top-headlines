import React, { useEffect } from "react";
import News from "../components/NewsComponent";
import { useAppSelector } from "../redux/hooks";
import useFetchHook from "../shared/fetchHook";

export default function Tech() {
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
    if (thCurrent !== "technology") {
      fetchNews("technology");
      setThCurrent("technology");
    }
  }, []);

  return (
    <>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <div className="newsCategoryBanner col-12">
              <h2>TECHNOLOGY</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsCategoryArticles">
              <News
                page="tech"
                articles={topheadings}
                articlesCategory="Technology"
                translate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
