import axios from "axios";
require ("dotenv").config();

export default {

    getFlightsData: function(url) {
        let authString = `Bearer ${process.env.REACT_APP_SABRE_TOKEN}`;
        console.log(authString)
        console.log(process.env)
        return axios.get(url, {
          headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_SABRE_TOKEN}`
          }
        });
    },

    getConferences: function () {
        return axios.get("/api/conferences");
    },

    getConference: function (id) {
        return axios.get("/api/conferences/" + id);
    },

    postConference: function (incomingData) {
        //TODO: write an axios.post that takes the data object we get from a react component
        //and sends it to our api
        return axios({
            method: 'post',
            url: '/api/conferences',
            data: incomingData           
        });
        
    }
    //console.log("srcAPIfile_incomingDate: " + incomingData);
    
};