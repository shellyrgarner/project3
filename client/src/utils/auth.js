import axios from "axios";
// require ("dotenv").config();

export default {
    verify: function () {
        return axios.get("/auth/verify");
    },    
    login: function (user) {
        return axios({
            method: 'post',
            url: '/auth/login',
            data: user
        });
    },
    signup: function (user) {
        return axios({
            method: 'post',
            url: '/auth/signup',
            data: user
        });
    }
 
};