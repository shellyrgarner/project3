const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Conferences collection and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true });

const confSeed = [
    {
        event: "Test",
        venue: "test",
        location: "test",
        info: "test",
        beginDate: new Date(Date.now()),
        endDate: new Date(Date.now()),
},
{
    event: "Test Event 2",
    venue: "test venue",
    location: "test location",
    info: "test about the test",
    beginDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
}];

db.Conference
.remove({})
.then(() => db.Conference.collection.insertMany(confSeed))
.then(data => {
    console.log(data.result.n + ' records inserted!' );
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
