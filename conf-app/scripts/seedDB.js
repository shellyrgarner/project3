const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Conferences collection and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const confSeed = [
    {
        event: "Test",
        beginDate: new Date(Date.now()),
        endDate: new Date(Date.now()),
        venue: "test",
        location: "test",
        info: "test"
}];

db.Conference
.remove({})
.then(() => db.Conference.collection.insertMany(confSeed))
.then(data => {
    console.log(data.result.n + 'records inserted!' );
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
