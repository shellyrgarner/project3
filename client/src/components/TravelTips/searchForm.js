import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group" style={{margin: "0 20px 20px 20px"}}>
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.name}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a flight"
        id="search"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
