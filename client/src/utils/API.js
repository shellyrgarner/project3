import axios from "axios";

export default {

    getConferences: function() {
        return axios.get("/api/conferences")
    },

    getConference: function(id) {
        return axios.get("/api/conferences/schedule" + id)
    },


};