import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import RegisterBtn from "../../components/RegisterConfBtn";

class Details extends Component {
    state = {
        conference: {},
        count: 0
    };
    // When this component mounts, grab the conference with the _id of this.props.match.params.id
    // e.g. localhost:3000/conferences/5bc28d76abe9d115cc03375d

    componentDidMount() {
        API.getConference(this.props.match.params.id)
            .then(res => this.setState({ conference: res.data }))
            .catch(err => console.log(err));
    }

    handleClick = () => {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h3>{this.state.conference.event}</h3>
                            <p>{this.state.conference.beginDate}-{this.state.conference.endDate}</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Conference Details</h1>
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
                    <Col size="md-12">
                        <RegisterBtn
                            onClick={this.handleClick}
                        >
                            Attend Conference
                        </RegisterBtn>
                        <p> <strong>{this.state.count} Attending!</strong> </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;