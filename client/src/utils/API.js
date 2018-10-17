import axios from "axios";

export default {

    scrapeConferences: function () {
        // return axios.get("/api/scrapedconferences");
        return axios.get("/api/conferences");
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