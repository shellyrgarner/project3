import axios from "axios";

export default {

    scrapeConferences: function () {
        return axios.get("/api/scrapeconferences");
    },
    getConferences: function () {
        return axios.get("/api/conferences");
    },

    getConference: function (id) {
        return axios.get("/api/conferences/" + id);
    },

    postConference: function (incomingData) {

        return axios({
            method: 'post',
            url: '/api/conferences',
            data: incomingData
        });

    }

};