import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";

const NotFound = () => (
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <h1>404 Page Not Found</h1>
                    <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄
                        </span>
                    </h1>
                </Jumbotron>
            </Col>
        </Row>
        <Footer />
    </Container>
);

export default NotFound;