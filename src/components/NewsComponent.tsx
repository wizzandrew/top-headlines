import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { NewsArticle } from "../shared/models";

type NewsProps = {
  articles: NewsArticle[];
};

export default function NewsComponent(props: NewsProps) {
  // Variable to hold conditionally rendered content
  let newsContent;

  // If passed no articles to this component -> display some text
  if (props.articles == undefined || props.articles.length == 0) {
    newsContent = <div>Choose sources</div>;
  }
  // Else render news articles
  else {
    newsContent = props.articles?.map((article, index) => {
      return (
        <div className="col-12 col-md-3 col-lg-3" key={index}>
          <Card key={index}>
            <img src="#" alt="news"></img>
            <CardBody>
              <CardTitle>{article?.title}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">{newsContent}</div>
    </div>
  );
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
