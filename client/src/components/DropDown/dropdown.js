import React, { Component } from "react";


class DropDownAirports extends Component {

    constructor() {
        super();
        this.state = {
            airports: []
        };
    }

    componentDidMount() {
        
        let initialData = [];
        fetch("client\src\pages\TravelTips\airports.json")
            .then(response => {
                return response.JSON();
            }).then(data => {
                initialData = data.results.map((airports) => {
                    return airports
                });
                console.log(initialData);
                this.setState({
                    airports: initialData,
                });
            });
    }

    render() {

        let airports = this.props.state.airports;
        let optionItems = airports.map((airports) => 
            <option key={airports.city}>{airports.city}</option>
        );

        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div> 
        )
    }
}

export default DropDownAirports;
