import React from "react";
import Tab from "./HomeTabComponent";
import { NewsArticle } from "../shared/models";

type ArticleProps = {
  article: NewsArticle | undefined;
};

export default function NewsArticleComponent(props: ArticleProps) {
  return (
    <React.Fragment>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">{props?.article?.title}</div>
          <div className="col-12">{props?.article?.content}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
