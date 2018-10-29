import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import RegisterBtn from "../../components/RegisterConfBtn";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

class Details extends Component {
    state = {
        conference: {}
    };
    // When this component mounts, grab the conference with the _id of this.props.match.params.id
    // e.g. localhost:3000/conferences/5bc28d76abe9d115cc03375d

    componentDidMount() {
        API.getConference(this.props.match.params.id)
            .then(res => this.setState({ conference: res.data }))
            .catch(err => console.log(err));
    }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    // if (this.state.event && this.state.location) {
    //   API.postConference({
    //     event: this.state.event,
    //     beginDate: this.state.beginDate,
    //     endDate: this.state.endDate,
    //     venue: this.state.venue,
    //     location: this.state.location,
    //     info: this.state.info
    //   })
    //     .then(res => this.loadConferences())
    // .catch(err => console.log("handleformsubmit ERROR: " + err));
    // }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Hero imgClass="hero-img5">
                            <h1>Conference Details</h1>
                            {/* <h3>{this.state.conference.event}</h3>
                            <p>{this.state.conference.beginDate}-{this.state.conference.endDate}</p> */}
                            <br></br>
                            {/* <Jumbotron>
                            <h3>{this.state.conference.event}</h3>
                            <p>{this.state.conference.beginDate}-{this.state.conference.endDate}</p>
                        </Jumbotron> */}
                        </Hero>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                        <br></br>
                            <h3>{this.state.conference.event}</h3>
                            <h3>{this.state.conference.beginDate}-{this.state.conference.endDate}</h3>
                            <br></br>
                            <p>Venue: {this.state.conference.venue}</p>
                            <p>Location: {this.state.conference.location}</p>
                            <p>Details: {this.state.conference.info}</p>
                        </article>
                    </Col>
                    {/* <Row>
                        <Col size="md-2">
                            <Link to="/conferences">← Back to Conferences</Link>
                        </Col>
                    </Row> */}
                </Row>
                <Row>
                    {/* <button>Register</button> */}
                    <Col size="md-12">
                        {/* onClick={this.handleFormSubmit} */}
                        <RegisterBtn>Register</RegisterBtn>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Details;