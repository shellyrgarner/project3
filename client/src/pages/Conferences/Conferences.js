import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/ConfList";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Conferences extends Component {
  state = {
    conferences: [],
    event: "",
    venue: "",
    location: "",
    info: ""
  };

  componentDidMount() {
    this.loadConferences();
  }

  loadConferences = () => {
    API.getConferences()
      .then(res =>
        this.setState({ conferences: res.data, event: "", venue: "", location: "", info: "" })
      )
      .catch(err => console.log("getConf ERROR: " + err));
  };

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
            </Jumbotron>
            {this.state.conferences.length ? (
              <List>
                {this.state.conferences.map(conference => (
                  <ListItem key={conference._id}>
                    <Link to={"/conferences/" + conference._id}>
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



