const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Conference
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    //need to add logic for conference event
};