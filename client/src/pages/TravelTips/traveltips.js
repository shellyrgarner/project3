import React, { Component } from "react";
import API from "../../utils/API";
import ResultList from "../TravelTips/resultList";
import SearchForm from "../TravelTips/searchForm";

class TravelTips extends Component {

  state = {
    search: "",
    results: [],
  };


  getFlightsData = (query) => {
    API.search(query)
    .then(results => console.log(results.data.results))
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
        <ResultList results={this.state.results} />
    </div>
    )
  }
};

export default TravelTips;