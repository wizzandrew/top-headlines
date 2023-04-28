import React from "react";
import Tab from "./HomeTabComponent";
import { NewsArticle } from "../shared/models";
import shareIcon from "../img/share-icon.svg";
import "../css/NewsArticleComponent.css";

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
      <div className="container articleContainer">
        <div className="row">
          <div className="col-10 col-md-8 articleTitle">
            <h1>{props?.article?.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 datePublished">
            {props?.article?.datePublished()}
          </div>
        </div>
        <div className="row shareRow">
          <div className="col-12 col-md-5 shareContainer">
            <div className="shareSquare">
              <img src={shareIcon} alt="share" />
            </div>
            <div className="shareLinkHolder">
              <a href={props?.article?.url} target="_blank">
                Origin Source
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-8">
            <img
              className="articleImg"
              src={props?.article?.urlToImage}
              alt="figure"
            ></img>
          </div>
        </div>
        <div className="row authorRow">
          <div className="col-12 authName">By {props?.article?.author}</div>
          <div className="col-12 sourceName">
            {props?.article?.source?.name}
          </div>
          <div className="col-12 sourceHr">
            <div></div>
          </div>
        </div>
        <div className="row contentRow">
          <div className="col-12 col-md-8 articleDescription">
            <h6>{props?.article?.description}</h6>
          </div>
          <div className="col-12 col-md-8">
            {props?.article?.contentCleared()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
