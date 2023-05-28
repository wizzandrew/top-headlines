import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { NewsArticle } from "../shared/models";
import { useAppDispatch } from "../redux/hooks";
import * as topHeadingsSlice from "../redux/topheadingsSlice";
import translateIcon from "../img/translate-icon.svg";
import "../css/NewsComponent.css";

type NewsProps = {
  page: string;
  articles: NewsArticle[] | null;
  articlesCategory: string;
  translate: boolean;
};

export default function NewsComponent(props: NewsProps) {
  // Variable to hold conditionally rendered content
  let newsContent;

  // variable to hold <div>button</div> for to translate article titles
  // viable in case propr.translate is true
  let translateDiv;

  // dispatch variable
  const dispatch = useAppDispatch();

  // force rerender state
  const [st, rerenderState] = useState("");

  // manage to translate article
  const translateArticleTitles = () => {
    if (
      props.articles &&
      props.articles !== null &&
      props.articles.length > 0
    ) {
      dispatch(
        topHeadingsSlice.fetchTranslateArticleTitles({
          articles: props.articles,
        })
      );

      // forcing to rerender page when its been translated
      setTimeout(() => rerenderState("state"), 2000);
    }
  };

  // If passed no articles to this component -> display nothing
  if (props.articles === null || props.articles.length === 0) {
    newsContent = <div></div>;
  } else {
    newsContent = props.articles?.map((article, index) => {
      return (
        <div className="col-10 col-md-4 col-lg-3 cardHolder" key={index}>
          <Card key={index} className="card">
            <Link to={`/${props?.page}/${article?.title}`}>
              <img src={article?.urlToImage} alt="figure"></img>
              <CardBody>
                <CardTitle>{article?.title}</CardTitle>
                <CardText>{article?.description}</CardText>
              </CardBody>
              <CardFooter>
                <div className="dateTime">{article?.datePublished()}</div>
                <div className="tabVerticalLine"></div>
                <div>{props.articlesCategory}</div>
              </CardFooter>
            </Link>
          </Card>
        </div>
      );
    });
  }

  // if props.translate === true return button for to translate article titles
  if (props.translate) {
    translateDiv = (
      <div className="translateTitlesArea">
        <img src={translateIcon} alt="" />
        <button onClick={translateArticleTitles}>
          Translate articles' titles
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="row">{translateDiv}</div>
      <div className="row">{newsContent}</div>
    </React.Fragment>
  );
}
