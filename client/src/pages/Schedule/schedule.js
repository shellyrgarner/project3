import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

class Schedule extends Component {
    state = {
        conferences: {}
    };

    componentDidMount() {
        API.getConference(this.props.match.params.id)
        .then(res => this.setState({ conference: res.data }))
        .catch(err => console.log(err));
    }


render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Hero imgClass="hero-img4">
          <h1>Keep track of your schedule</h1>
        </Hero>
 
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
export default Schedule;