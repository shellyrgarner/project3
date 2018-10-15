import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const TravelTips = () => (

  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Useful info on flights, trains etc.</h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default TravelTips;