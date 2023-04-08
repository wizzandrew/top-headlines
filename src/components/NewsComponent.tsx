import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { NewsArticle } from "../shared/models";
import "../css/NewsComponent.css";

type NewsProps = {
  articles: NewsArticle[] | null;
  continent: string;
};

export default function NewsComponent(props: NewsProps) {
  // Variable to hold conditionally rendered content
  let newsContent;

  // Prework date published format
  const datePublished = (datePublished: Date): string => {
    const date = new Date(datePublished).toISOString();

    // make sure the ISO string is of right format
    if (date && date.length > 16) {
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);
      const hour = date.slice(11, 13);
      const minute = date.slice(14, 16);
      return day + "/" + month + " " + hour + ":" + minute;
    } else {
      return "";
    }
  };

  // If passed no articles to this component -> display some text
  if (props.articles === null || props.articles.length === 0) {
    newsContent = <div>Choose sources</div>;
  }
  // Else render news articles
  else {
    newsContent = props.articles?.map((article, index) => {
      return (
        <div className="col-10 col-md-4 col-lg-3 cardHolder" key={index}>
          <Card key={index} className="card">
            <Link to={`/home/${article?.title}`}>
              <img src={article?.urlToImage} alt="figure"></img>
              <CardBody>
                <CardTitle>{article?.title}</CardTitle>
                <CardText>{article?.description}</CardText>
              </CardBody>
              <CardFooter>
                <div className="dateTime">
                  {datePublished(article?.publishedAt)}
                </div>
                <div className="tabVerticalLine"></div>
                <div>{props.continent}</div>
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
