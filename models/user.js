const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
	// id: String,
	username: String,
	email: {type: String, required: true, lowercase: true,  unique: true},
	password: {type: String, required: true, minlength: 5, maxlength: 1024}
});

// userSchema.methods.generateAuthToken = function() {
//     // const token = jwt.sign({ email, username }, env.JWT_SECRET); //generates a token
//     const token = jwt.sign({ _id: this._id }, env.JWT_SECRET); //generates a token
//     return token;
// }

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    };
    return Joi.validate(user, schema);
}


module.exports = User;
module.exports.validate = validateUser;
	
