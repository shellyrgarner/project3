const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const confSchema = new Schema({
    event: { type: String, required: true },    
    venue:  String,
    location:  { type: String, required: true},
    info: String,
    begDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
});

const Conference = mongoose.model("Conference", confSchema);

module.exports = Conference;