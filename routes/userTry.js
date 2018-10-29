// import express from "express";
const router = require("express").Router();
// import User from "../models/User";
const User = require("../models/user");
// import parseErrors from "../utils/parseErrors";
const parseErrors = require("./api");



router.post("/", (req, res) => 
{ const { email, password } = req.body.user;
//   const user = new User({ email });
  user.setPassword(password);
  // user.setConfirmationToken();  //----------for confirmation email
  user.save()
     .then(userRecord => {  res.json({ user: userRecord.toAuthJSON() }) ;  })
     .catch(err=>res.status(400).json({ errors: parseErrors(err.errors) }));
});



export default router;