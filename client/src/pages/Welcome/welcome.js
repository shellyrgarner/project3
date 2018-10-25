import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import "./Welcome.css";



const Welcome = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Hero imgClass="hero-img4">
          <h5>Convene'</h5>
          <br></br>
          <h3> Organize all your conferences in one site!</h3>
        </Hero>
      </Col>
    </Row>

    <Row>
      <Col size="md-12">
        <h3 className="text-center Welcome-head"> Organize all your conferences in one site!</h3>
      </Col>
    </Row>

    <Row>
      <Col size="md-6">
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
        <h3> Organize all your conferences in one site!</h3>
      </Col>
      <Col size="md-6">
        <img className="Welcome-side-img" src="https://images.unsplash.com/photo-1530858238132-a825ad95c652?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=798c053edc84b821fb08b0d56caa5cd4&auto=format&fit=crop&w=800&q=60" />

      </Col>
    </Row>

    <Row>
      <Col size="md-6">
      <p>
        <span className="Welcome-quotes fa fa-2x fa-quote-left" />
        This is my super duper quote
        <span className="Welcome-quotes fa fa-2x fa-quote-right " />
        </p>
      </Col>

    </Row>

    <Row>
      <Col size="12">
        <Row>
          {/* Begin User Review */}
          <Col size="4">
            <Row>
              <Col size="12">
                  <img className="Welcome-user-picture" src="https://pbs.twimg.com/profile_images/884980031297961984/PNNTLOhK_400x400.jpg" />
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <p className="text-center">My quote goes here</p>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div className="Welcome-stars">
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                </div>
              </Col>
            </Row>
          </Col>
          {/* End User Review */}
           {/* Begin User Review */}
           <Col size="4">
            <Row>
              <Col size="12">
                  <img className="Welcome-user-picture" src="https://pbs.twimg.com/profile_images/884980031297961984/PNNTLOhK_400x400.jpg" />
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <p className="text-center">My quote goes here</p>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div className="Welcome-stars">
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                </div>
              </Col>
            </Row>
          </Col>
          {/* End User Review */}
        </Row>
      </Col>
    </Row>
    <Footer />
  </Container>

);

// class Welcome extends Component {

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6 sm-12">
//             <Hero imgClass="hero-img4">
//               <id=wtitle>Convene'</wtitle>
// </Hero>
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// };

export default Welcome;