import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class TravelTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    API.getFlightsData('https://api-crt.cert.havail.sabre.com/v1/shop/flights?origin=JFK&destination=LAX&departuredate=2018-10-20&returndate=2018-10-25&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US')
    .then(function(res) {
      this.setState({data: res.data})
      console.log(res.data);
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Flights info</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default TravelTips;