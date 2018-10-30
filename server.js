const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require('passport');
// const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('', function (req, res) { res.sendFile('index.html'); });
}


// const passportRoutes = require('./routes/passport/passportRoutes')(passport);
// app.use('/passport', passportRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`)
});