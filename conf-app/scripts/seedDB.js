const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Conferences collection and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const confSeed = [
    {
        event: "Test",
        beginDate: "",
        endDate: "",
        venue: "",
        location: "",
        info: ""
}];

db.Conference
.remove({})
.then(() => db.Conference.collection.inserMany(confSeed))
.then(data => {
    console.log(data.result.n + 'records inserted!' );
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
