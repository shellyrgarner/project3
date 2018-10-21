
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/ConfList";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ScrapeBtn from "../../components/Button";
//import cheerio from 'cheerio';
// import scrapeConferences from "../../../../controllers/scrapedConfController";
// import $ from 'jquery';
// const cheerio = require("cheerio");
//import axios from 'axios';
class Conferences extends Component {

  state = {
    conferences: []
    // event: "",
    // venue: "",
    // location: "",
    // info: "",
    // beginDate: "",
    // endDate: ""
  };

  componentDidMount() {
    this.loadConferences();
    //  this.scrape();
  }

  scrape = () => {
    API.scrapeConferences()
      .then(res => 
        {
          // this.setState({ conferences: [...res.data] })
          this.loadConferences()
          console.log("scrape function called: " + JSON.stringify(res.data))

        }
      )
  }

  loadConferences = () => {
    API.getConferences()
      .then(res =>
        {
          this.setState({ conferences: [...res.data] })
          console.log(res.data);
        }
      )
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.event && this.state.location) {
      API.postConference({
        event: this.state.event,
        beginDate: this.state.beginDate,
        endDate: this.state.endDate,
        venue: this.state.venue,
        location: this.state.location,
        info: this.state.info
      })
        .then(res => this.loadConferences())
        .catch(err => console.log("handleformsubmit ERROR: " + err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Find Your Conference</h1>
              <ScrapeBtn scrape={this.scrape} />
            </Jumbotron>

            {this.state.conferences.length ? (
              <List>
                {this.state.conferences.map(conference => (
                  <ListItem key={conference._id}>
                    <Link to={"/conferences/" + conference._id}>
                      {/* <Link to={"/api/scrapeConferences/" + conference._id}>  */}
                      <strong>
                        {conference.event}

                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Add A Conference</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.event}
                onChange={this.handleInputChange}
                name="event"
                placeholder="Event (required)"
              />
              <Input
                value={this.state.beginDate}
                onChange={this.handleInputChange}
                name="beginDate"
                placeholder="dd/mm/yyyy"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="dd/mm/yyyy"
              />
              <Input
                value={this.state.venue}
                onChange={this.handleInputChange}
                name="venue"
                placeholder="Venue (Please add 'TBD' if not confirmed yet.)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (City/State-Required)"
              />
              <TextArea
                value={this.state.info}
                onChange={this.handleInputChange}
                name="info"
                placeholder="Info (Please add description of event)"
              />
              <FormBtn
                disabled={!(this.state.event && this.state.location)}
                onClick={this.handleFormSubmit}
              >
                Submit Event
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Conferences;



 // scrape = () => {
  //   return axios.get("http://www.allconferences.com/Computers/").then((res) =>  {
  //     const $ = cheerio.load(res.data);
  //     console.log("scraping" + JSON.stringify(res.data));

  //     $(".listing_content").each((i, element) => {
  //       const event = $(this).children(".conferenceHead").children("h2").children("a").text();
  //       const url = $(this).children(".conferenceHead").children("h2").children("a").attr("href");
  //       const venue = $(this).children(".conferenceHead").children(".venue_info").children("a").text();
  //       const beginDate = $(this).children(".conferenceDate").children(".begin_txt").children("a").text();
  //       const endDate = $(this).children(".conferenceDate").children(".end_txt").children("a").text();
  //       const info = $(this).children(".conferenceDescription").children(".description").children(".filter_middle").children("a").text();
  //       if (event && url && venue) {
  //         const scrapedData = {
  //           event: event,
  //           url: url,
  //           venue: venue,
  //           beginDate: beginDate,
  //           endDate: endDate,
  //           info: info
  //         };
  //         console.log("scrapedData: " + scrapedData);
  //           this.setState({ conferences: scrapedData });
  //           console.log(this.state);
  //       }

  //     });
  //   });
  // };

   //*********add a button to scrape-search conference button*****//

  // scrape = () => {
  //     return axios({
  //     url: "http://www.allconferences.com/Computers/",
  //     method: 'GET'
  //   }).then((data) =>{
  //     this.setState({ conferences: data })
  //     console.log(this.state);
  //     console.log(JSON.stringify(data) + "this is scraping ")
  //   })


  // async componentWillMount() {
  //   try {
  //     const res = await axios.get(`/api/scrapeconferences`);
  //     this.setState({conferences: res.data })

  //     // console.log("hello scrape")
  //     console.log("this is scraping " + JSON.stringify(res.data));
  //     console.log(this.state);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
