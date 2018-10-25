import React, { Component } from "react";
import API from "../../utils/API";
import ResultList from "../TravelTips/resultList";
import SearchForm from "../TravelTips/searchForm";

class TravelTips extends Component {

  state = {
    search: "",
    results: []
  };


  getFlightsData = (query) => {
    API.search(query)
    .then(res => console.log(res));
  };
  

  handleInputChange = event => {
    const destionation = event.target.destionation;
    const value = event.target.value;
    this.setState({
      [destionation]: value
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
      <ResultList results={this.state.results} />
    </div>
    )
  }
};

export default TravelTips;