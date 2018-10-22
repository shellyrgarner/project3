const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const confSchema = new Schema({
    event: { type: String, required: true },    
    venue:  String,
    location:  String,
    info: String,
    beginDate: { type: String, default: Date.now },
    //beginDate: { $dateToString: {format: "%Y-%m-%d", date: "$date"} },
    endDate: { type: String, default: Date.now },
    //endDate: { $dateToString: {format: "%Y-%m-%d", date: "$date"} }
});

const Conference = mongoose.model("Conference", confSchema);

module.exports = Conference;