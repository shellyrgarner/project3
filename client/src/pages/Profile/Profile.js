import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";



class Profile extends React.Component {

    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-12">
                  <Jumbotron>
                    <h1>Profile</h1>
                  </Jumbotron>
                </Col>
            </Row>
            </Container>
        )
    }
};


export default Profile;