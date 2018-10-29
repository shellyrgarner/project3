// const router = require("express").Router();
// const asyncHandler = require("express-async-handler");
// const authController = require("../controllers/authController");


//"auth/..."
// router.post('/login', asyncHandler(authController.login));
// router.post('/signup', asyncHandler(authController.signup));
// router.get('/verify', asyncHandler(authController.verify));
// module.exports = router;
////////////////////////////////////////////////////////////////////////////////////////

// import express from 'express';
const router = require("express").Router();
// import User from '../models/User';
const User = require("../models/user");
// import { sendResetPasswordEmail } from "../mailer";
// const sendResetPasswordEmail = require("mailer")
// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");


// const router = express.Router();
    
router.post("/", (req, res) => 
{  // console.log('server/route/auth.js/credentials req=',req); //---visible only in sonsole of server-command prompt
  //  console.log('server/route/auth.js/credentials res=',res);
    console.log('server/route/auth.js/credentials req.body=',req.body);
    const { credentials } = req.body;
    
    User.findOne({ email: credentials.email }).then(user => 
    {  if (user && user.isValidPassword(credentials.password))   //isvalid is defined in model user
        { //console.log('user found',credentials);
        // res.json({ user: {email: user.email} });
          res.json({ user: user.toAuthJSON() });
         } 
      else { // console.log('user not found', credentials); //this will come to the console where server npm start is written
             res.status(400).json({ errors: { global: "Invalid credentials" } });
           }
    });
  });

router.post("/signup", (req, res) => 
{ const token = req.body.token;
  User.findOneAndUpdate( { confirmationToken: token },{ confirmationToken: "", confirmed: true }, { new: true }
                        ).then( user => user ? res.json({ user: user.toAuthJSON() }) : res.status(400).json({}) );
});

// router.post("/reset_password_request", (req, res) => 
// {  User.findOne({ email: req.body.email }).then(user => 
//   { if (user) {  sendResetPasswordEmail(user);   res.json({});  } 
//     else {    res.status(400).json({ errors: { global: "There is no user with such email" } });    } //catch error in form
//   });
// });

router.post("/validate_token", (req, res) => 
{  jwt.verify(req.body.token, process.env.JWT_SECRET, err =>   //jwt.verify is predefined function
  {    if (err) {  res.status(401).json({});  } else {  res.json({});  }  }); //if nok--send 401 else send empty token
});


router.post("/reset_password", (req, res) => 
{ const { password, token } = req.body.data;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => 
  { if (err) {  res.status(401).json({ errors: { global: "Invalid token" } });    } 
    else  { User.findOne({ _id: decoded._id }).then(user => 
                { if (user) {  user.setPassword(password);
                               user.save().then(() => res.json({}));
                          } else {  res.status(404).json({ errors: { global: "Invalid token" } });     }
                });
          }
  });
});

// export default router;
module.exports = router;
