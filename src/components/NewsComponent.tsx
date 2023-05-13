import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { NewsArticle } from "../shared/models";
import "../css/NewsComponent.css";

type NewsProps = {
  page: string;
  articles: NewsArticle[] | null;
  requestError: boolean;
  articlesCategory: string;
  newsByCategory: boolean;
};

export default function NewsComponent(props: NewsProps) {
  // Variable to hold conditionally rendered content
  let newsContent;

  // Initial info display -> news for sources "Choose sources" // news for categories ""
  // If passed no articles to this component -> display some text
  if (
    (props.articles === null || props.articles.length === 0) &&
    !props.newsByCategory
  ) {
    newsContent = <div>Choose sources</div>;
  } else if (
    (props.articles === null || props.articles.length === 0) &&
    props.newsByCategory
  ) {
    newsContent = <div></div>;
  }
  // If passed no articles to this component -> fetch error
  // else if (props.requestError) {
  //   newsContent = <div>Error</div>;
  // }
  // Else render news articles
  else {
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

  return <div className="row">{newsContent}</div>;
}

// <div className="col-12 col-md-6 col-lg-4">
// <Card>
//   <img src="#" alt="news"></img>
//   <CardBody>
//     <CardTitle>
//       Manhattan District Attorney is asking about hush money
//     </CardTitle>
//   </CardBody>
// </Card>
// </div>

// <div className="col-12 col-md-3 col-lg-3">
// <Card>
//   <img src="#" alt="news"></img>
//   <CardBody>
//     <CardTitle>
//       Gwyneth Paltrow ski collision case goes to jury
//     </CardTitle>
//   </CardBody>
// </Card>
// </div>
