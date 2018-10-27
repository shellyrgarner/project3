import axios from "axios";
// require ("dotenv").config();

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


    // getFlightsData: function (url) {
    //     return axios.get("https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/referral/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{inboundpartialdate}?apiKey={shortapikey}?shortapikey=ra66933236979928", {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "X-Mashape-Key": "Zj36taXTnmmshyDZAbkyZDwF8XsTp1HAOkWjsnajJKHRB1tMjZ",
    //             "X-Mashape-Host": "skyscanner-skyscanner-flight-search-v1.p.mashape.com",
    //         },
    //     });
    // },
};