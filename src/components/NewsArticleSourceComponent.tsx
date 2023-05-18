import React, { useState } from "react";
import Tab from "./HomeTabComponent";
import { NewsArticle } from "../shared/models";
import { useAppDispatch } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import shareIcon from "../img/share-icon.svg";
import "../css/NewsArticleComponent.css";

type ArticleProps = {
  article: NewsArticle | undefined;
};

export default function NewsArticleComponent(props: ArticleProps) {
  // conditional rendering for article's author (might be null)
  const conditionalAuthor =
    typeof props?.article?.author === "string" ? (
      <div className="col-12 authName">By {props?.article?.author}</div>
    ) : (
      <div className="col-12 d-none"></div>
    );

  // conditional rendering for article's description (might be null)
  const conditionalDescription =
    typeof props?.article?.description === "string" ? (
      <div className="col-12 col-md-8 articleDescription">
        <h6>{props?.article?.description}</h6>
      </div>
    ) : (
      <div className="col-12 d-none"></div>
    );

  // conditional rendering for article's content (might be null)
  const conditionalContent =
    typeof props?.article?.content === "string" ? (
      <div className="col-12 col-md-8">{props?.article?.contentCleared()}</div>
    ) : (
      <div className="col-12 d-none"></div>
    );

  // dispatch variable
  const dispatch = useAppDispatch();

  // force rerender state
  const [st, rerenderState] = useState("");

  // manage to translate article
  const translateArticle = () => {
    if (props.article !== undefined) {
      dispatch(
        topHeadingsSlice.fetchTranslateArticle({
          title: props.article.title,
          description: props.article.description,
          content: props.article.contentCleared(),
          topHeadingsType: "category",
        })
      );

      // forcing to rerender page when its been translated
      setTimeout(() => rerenderState("state"), 2000);
    }
  };

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
              <a href={props?.article?.url} target="_blank" rel="noreferrer">
                Origin Source
              </a>
            </div>
            <div>
              <button onClick={translateArticle}>Translate</button>
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
          {conditionalAuthor}
          <div className="col-12 sourceName">
            {props?.article?.source?.name}
          </div>
          <div className="col-12 sourceHr">
            <div></div>
          </div>
        </div>
        <div className="row contentRow">
          {conditionalDescription}
          {conditionalContent}
        </div>
      </div>
    </React.Fragment>
  );
}
