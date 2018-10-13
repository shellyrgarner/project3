const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Conference
            .find(req.query)
            .sort({ begDate: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log("request query:" + req.query)
    },
    findById: function (req, res) {
        db.Conference
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //NOTE: this isn't doing the right thing yet. probably need to look at mongoose documentation and figure 
    //out how to write the db.Collection.create method in this format, which will send the req.data to our mongo
    //database and create a new document with it 
    create: function (req, res) {
        db.Conference
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log("request body:" + req.body);
    }
    //need to add logic for conference event
};

// Tank.create({ req.data }, function (err, small) {
//     if (err) return handleError(err);
//     // saved!
//   });

//   console.log(req.data)
