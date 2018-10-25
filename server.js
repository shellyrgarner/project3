const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// require("dotenv").config();
// var passport = require('passport');
// var expressSession = require('express-session');
// app.use(expressSession({secret: 'mySecretKey'}));
// app.use(passport.initialize());
// app.use(passport.session());

// var initPassport = require('./client/passport-mongo/init');
// initPassport(passport);

// var passportRoutes = require('./routes/index')(passport);
// app.use('/', routes);

// console.log(process.env.REACT_APP_SABRE_TOKEN)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('', function (req, res) {
        res.sendFile('index.html');
      });
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`)
});