import axios from "axios";

export default {

    getConf: function() {
        return axios.get("/api/conferences")
    },

    getSession: function(id) {
        return axios.get("/api/conferences/schedule" + id)
    },


};