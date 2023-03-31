import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function NewsComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <Card>
            <img src="#" alt="news"></img>
            <CardBody>
              <CardTitle>
                Manhattan District Attorney is asking about hush money
              </CardTitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <Card>
            <img src="#" alt="news"></img>
            <CardBody>
              <CardTitle>E3 Has Been Canceled</CardTitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <Card>
            <img src="#" alt="news"></img>
            <CardBody>
              <CardTitle>
                Gwyneth Paltrow ski collision case goes to jury
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
