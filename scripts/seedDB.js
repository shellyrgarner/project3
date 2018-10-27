const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Conferences collection and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true });

// const confSeed = [
//     {
//         event: "Test",
//         venue: "test",
//         location: "test",
//         info: "test event",
//         beginDate: new Date("2018-11-01"),
//         endDate: new Date("2018-11-04"),
//     },
//     {
//         event: "Test Event 2",
//         venue: "test venue",
//         location: "test location",
//         info: "test about the test",
//         beginDate: new Date("2019-01-11"),
//         endDate: new Date("2019-01-14"),
//     },
//     {
//         event: "Test Event 3",
//         venue: "test venue",
//         location: "Atlanta",
//         info: "test about the test 3",
//         beginDate: new Date("2018-12-14"),
//         endDate: new Date("2018-12-16"),
//     }];

db.Conference
    .deleteMany({})
    // .then(() => db.Conference.collection.insertMany(confSeed))
    .then(data => {
        console.log(' records deleted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
