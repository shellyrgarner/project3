import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import unirest from "unirest";
import DropDownAirports from "../../components/DropDown";

class TravelTips extends Component {

  constructor(props) {
    super(props);

    this.state = {
      body: []
    }

  };

  componentDidMount() {

    let data = [];

    unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/pricing/v1.0")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("X-Mashape-Key", "Zj36taXTnmmshyDZAbkyZDwF8XsTp1HAOkWjsnajJKHRB1tMjZ")
      .header("X-Mashape-Host", "skyscanner-skyscanner-flight-search-v1.p.mashape.com")
      .send("country=US")
      .send("currency=USD")
      .send("locale=en-US")
      .send("originPlace=ATL-sky")
      .send("destinationPlace=LAX-sky")
      .send("outboundDate=2018-11-01")
      .send("inboundDate=2018-11-10")
      .send("cabinClass=business")
      .send("adults=1")
      .send("children=0")
      .send("infants=0")
      .send("includeCarriers=")
      .send("excludeCarriers=")
      .end(function (result) {

        data = result;

        console.log(data)

        this.setState({
          body: data.body
        });
      }.bind(this));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Flights info</h1>
            </Jumbotron>
            <DropDownAirports />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default TravelTips;