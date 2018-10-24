import axios from "axios";
// require ("dotenv").config();

export default {

    scrapeConferences: function () {
        return axios.get("/api/scrapeconferences");
        // return axios.get("/api/conferences");
    },
    getConferences: function () {
        return axios.get("/api/conferences");
    },

    // getFlightsData: function (url) {
    //     return axios.get("https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/referral/v1.0/{country}/{currency}/{locale}/{originplace}/{destinationplace}/{outboundpartialdate}/{inboundpartialdate}?apiKey={shortapikey}?shortapikey=ra66933236979928", {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "X-Mashape-Key": "Zj36taXTnmmshyDZAbkyZDwF8XsTp1HAOkWjsnajJKHRB1tMjZ",
    //             "X-Mashape-Host": "skyscanner-skyscanner-flight-search-v1.p.mashape.com",
    //         },
    //     });
    // },


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