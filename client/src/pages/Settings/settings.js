import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";




class Settings extends React.Component {

    fileSelectedHandler = event => {
        console.log(event);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Settings</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        )
    }
};


export default Settings;