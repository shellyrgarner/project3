// import mongoose from 'mongoose';
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import uniqueValidator from "mongoose-unique-validator";

const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const uniqueValidator = require("mongoose-unique-validator")
const schema = new mongoose.Schema(
{
    email: {type: String, required: true, lowercase: true, index: true,  unique: true},
    passwordHash: {type: String, required: true},
    confirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, default: "" } //---added for confirmation email--save it if new user signs up
}, {timestamps: true});

schema.methods.isValidPassword = function isValidPassword(password) 
{    return bcrypt.compareSync(password, this.passwordHash);   };//---------used during user login

schema.methods.generateJWT = function generateJWT() 
{  return jwt.sign(  {   email: this.email, confirmed: this.confirmed  }, process.env.JWT_SECRET    );  };//---------used during user login

schema.methods.toAuthJSON = function toAuthJSON() 
{  return {  email: this.email, confirmed: this.confirmed, token: this.generateJWT()  };    };  //---------used during user login

schema.methods.setPassword = function setPassword(password) 
{  this.passwordHash = bcrypt.hashSync(password, 10);  };//---------used during new user creation

schema.methods.setConfirmationToken = function setConfirmationToken() 
{  this.confirmationToken = this.generateJWT();  }; //--for confirmation email---save it when new user signs up

// schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
//     return `${process.env.HOST}/confirmation/${this.confirmationToken}`; //------this one is for signup process--send link to confirm
//   };

schema.methods.generateResetPasswordLink = function generateResetPasswordLink() 
 {  return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken()}`;  };
schema.methods.generateResetPasswordToken = function generateResetPasswordToken() 
{    return jwt.sign( { _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" }   );  };

schema.plugin(uniqueValidator, { message: "This email is already taken" });//---------used during new user creation

// export default mongoose.model('User', schema)

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
// 	id: String,
// 	username: String,
// 	email: String,
// 	password: String,
// });
// const User = mongoose.model("User", userSchema);

const User = mongoose.model("User", schema);
module.exports = User;
	
