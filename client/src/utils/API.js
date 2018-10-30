import axios from "axios";

export default {
    search: function(query) {
            return axios.get("https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wGptpny252qHeFLrjj7yQjvG6KHqXuSn&origin=ATL&destination=" + query)
    },
    scrapeConferences: function () {
        return axios.get("/api/scrapeconferences");
    },
    getConferences: function () {
        return axios.get("/api/conferences");
    },
    getConference: function (id) {
        return axios.get("/api/conferences/" + id);
    },
    
    
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
        //TODO: write an axos.post that takes the data object we get from a react component
        //and sends it to our api
        return axios({
            method: 'post',
            url: '/api/conferences',
            data: incomingData
        });

    }
};