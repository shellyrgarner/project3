import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import "./Welcome.css";



const Welcome = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Hero imgClass="hero-img4" classes="Welcome-hero">
          <h5>Convene'</h5>
          <br></br>
          <h3> Organize all your conferences in one site!</h3>
        </Hero>
      </Col>
    </Row>



    <Row>
      <Col size="md-6">
        <div className="Welcome-side-text">

            <h2> One Stop Service</h2>

          <p>Convene' offers several features to provide exhibitors and sponsors more visibility.</p>
          <p >
            In addition to the basic splash screens and landing pages, your attendees and exhibitors can book appointments within the platform which automatically get uploaded into their schedule.
            This feature is paramount in creating the expected ROI and branding your sponsors are looking for.
            </p>

          <p>
            Let Convene' help you deliver value that translates into dollars (or Euros, Renminbi or Bitcoin).
</p>
        </div>
      </Col>
      <Col size="md-6">
        <img className="Welcome-side-img" src="https://img.gazeta.ru/files3/655/11784655/Depositphotos_48763103_xl-2015-pic905-895x505-79626.jpg" />

      </Col>
    </Row>

    <Row>
      <Col size="md-6">
        <p>

        </p>
      </Col>

    </Row>

    <Row>


      <Col size="md-6">
        <img className="Welcome-side-img" src="https://us.123rf.com/450wm/iakovenko/iakovenko1801/iakovenko180100692/93308090-portrait-of-beaming-lady-speaking-by-mobile-while-leaning-against-wall-communication-and-business-co.jpg?ver=6" />

      </Col>

      <Col size="md-6">




        <div className="Welcome-side-text">

          <p>
            <span className="Welcome-quotes fa fa-2x fa-quote-left" />
            Convene' is an Awesome site!  I have my conferene details at my fingertips. What did we do before Convene'?
        <span className="Welcome-quotes fa fa-2x fa-quote-right " />
          </p>
        </div>
      </Col>

    </Row>



    <Row>
      <Col size="md-6">
        <div className="Welcome-side-text">

            <h2> Create better opportunities for networking</h2>
          <br>
          </br>

          <p>
            Trade shows and conferences are great opportunities to expand your professional network. MeetApp is the easiest way to exchange contact information and make connections.
            You can also chat with other attendees and share images with the entire event network.
</p>
        </div>
      </Col>
      <Col size="md-6">
        <img className="Welcome-side-img" src="https://meetapp.azureedge.net/wp-content/uploads/2018/06/conference-networking-uai-2984x1679.jpg" />

      </Col>
    </Row>

    <Row>
      <Col size="md-6">
        <p>

        </p>
      </Col>

    </Row>

    <div className="Welcome-review-wrapper">
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
                  <p className="text-center">"Convene' dramatically transformed my experience at the event. I really appreciate that I did not have a giant stack of papers or binder to sift through for every speaker. It could also accommodate for a change in speaker line-up."</p>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p className="text-center" fontWeight="900px">John Livonka, HR Director - Pines Industries</p>
                  {/* <div className="Welcome-stars">
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                </div> */}
                </Col>
              </Row>
            </Col>
            {/* End User Review */}
            {/* Begin User Review */}
            <Col size="4">
              <Row>
                <Col size="12">
                  <img className="Welcome-user-picture" src="http://newsinfo.iu.edu/pub/libs/images/usr/10933.jpg" />
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p className="text-center">
                    The app definitely did what we wanted it to do, which was to increase connection and excitement about the event.</p>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p className="text-center" fontWeight="900px">Monica DePoint MD, Internalist - Emory Hospital</p>
                  {/* <div className="Welcome-stars">
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                </div> */}
                </Col>
              </Row>
            </Col>
            {/* End User Review */}
            <Col size="4">
              <Row>
                <Col size="12">
                  <img className="Welcome-user-picture" src="https://2h7qju2c3qvcc3s86ekn8n0-wpengine.netdna-ssl.com/brooklyn/wp-content/uploads/sites/4/2016/01/jason_shen_headshot-e1453909823506.jpg" />
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p className="text-center">“The customer service FAR exceeded our expectations, and the team was fantastic!
                  One of the main reasons we decided to go through with using Convene' was the staff, hands down.
                Even my wants that I couldn’t have were answered well and handled properly.”</p>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p className="text-center" fontWeight="900px">Brian Lee, Product Manager - AOL</p>
                  {/* <div className="Welcome-stars">
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                  <span class="fa fa-star checked" />
                </div> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    {  /* <Row>
      
    //   <Col size="md-12">
    //     <h3 className="text-center Welcome-head"> This site is the bomb!</h3>
    //   </Col>
  // </Row>*/}
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