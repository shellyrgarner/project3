import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "reactstrap";
import SearchForm from "../TravelTips/searchForm";

class TravelTips extends Component {

  state = {
    search: "",
    results: []
  };


  getFlightsData = (query) => {
    API.search(query)
    .then(res => {
      console.log(res.data.results);
      this.setState({ results: res.data.results});
    })
    .catch(err => console.log(err));
  };
  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getFlightsData(this.state.search);
  };

  render() {

    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        
        {this.state.results.map( results => {
          return (
          <div>
            <Container>
              <Row>
                <Col>
                  <ul>
                    {console.log(results.data.results)}
                    <li>data: </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          )
        })}
    </div>
    );
  }
};

export default TravelTips;