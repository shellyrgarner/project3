const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Conference
            .find(req.query)
            .sort({ beginDate: -1 })
            // .limit(20)
            .then(dbConf => res.json(dbConf))
            .catch(err => res.status(422).json(err));
        // console.log("findAll req.query data:" + (JSON.stringify(req.query)));
        //console.log("findAll ERROR:" + err);
    },
    findById: function (req, res) {
        db.Conference
            .findById(req.params.id)
            .then(dbConf => res.json(dbConf))
            .catch(err => res.status(422).json(err));
            // console.log("findById req.params.id data: " + req.params.id);
            // console.log("create req.body data: " + (JSON.stringify(req.body)));
            //console.log("findById ERROR: " + err);
    },
    //NOTE: this isn't doing the right thing yet. probably need to look at mongoose documentation and figure 
    //out how to write the db.Collection.create method in this format, which will send the req.data to our mongo
    //database and create a new document with it 
    create: function (req, res) {
        db.Conference
            .create(req.body)
            .then(dbConf => res.json(dbConf))
            .catch(err => res.status(422).json(err));
            // console.log("create req.body data: " + (JSON.stringify(req.body)));
        //console.log("create ERROR: " + err);
    },
    update: function(req, res) {
        db.Conference
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbConf => res.json(dbConf))
        .catch(err => res.status(422).json(err))
        console.log("update req.body data: " + req.body);
        //console.log("update ERROR: " + err);
    },
    remove: function(req, res) {
        db.Conference
        .findById({ _id: req.params.id })
        .then(dbConf => dbConf.remove())
        .then(dbConf => res.json(dbConf))
        .catch(err => res.status(422).json(err));
        console.log("remove req.params.id data: " + req.params.id);
        //console.log("remove ERROR: " + err);
    }
};

// Tank.create({ req.data }, function (err, small) {
//     if (err) return handleError(err);
//     // saved!
//   });