import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";



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

        <br></br>
        <br></br>


        <h3> Organize all your conferences in one site!</h3>


      </Col>
      <Row>
        <Col size="md">

          <br></br>
          <br></br>


          <Col size="md">

            <br></br>
            <br></br>


            <h3> Organize all your conferences in one site!</h3>
            <Col size="md">

              <br></br>
              <br></br>


              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>
              <h3> Organize all your conferences in one site!</h3>


            </Col>
            <Col size="md-12 md-6" float='right'>
            <h3> Test test test test test</h3>
  <image src="https://images.unsplash.com/photo-1530858238132-a825ad95c652?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=798c053edc84b821fb08b0d56caa5cd4&auto=format&fit=crop&w=800&q=60"/>
            </Col>
<Row color='orange'>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</Row>

          </Col>


        </Col>
      </Row>

    </Row>
    <Footer>
  </Footer>
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