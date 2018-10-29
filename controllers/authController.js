// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import * as env from '../config/env';
// import db from '../models';
const db = require("../models");
const env = require("../config/env");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");

/**
 * Allows a user to login using email and password. Returns their JWT to the client.
 */
module.exports = {
    // export 
    login: async function (req, res) {
        // Using the email located on the request body, query the database and
        // get the user's data
        //  const user = await db.User.findOne({ where: { email: req.body.email } });

        const user = db.User
            .findOne(req.body.email)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

        console.log("authcontroller: " + req.body.email)
        // If the user doesn't exist, send a status code of 401 (Unauthorized)
        // and let them know that their email is invalid
        if (!user) {
            return res.status(401).json({ field: 'email', message: 'Invalid email' });
        }

        // Compare the hashed password from the database and the password located on
        // the request body using bcrypt
        // const passwordsMatch = await bcrypt.compare(req.body.password, user.password);
        const passwordsMatch = await bcrypt.compare(req.body.password, user.password, function (err, res) {
            if (err) return (err);
             console.log("im in the authcontroller bcryptcompare login function");
        });

        // If the passwords do not match, then send a status code of 401 (Unauthorized)
        // and let the user know that the given passwords do not match
        if (!passwordsMatch) {
            console.log("password:" + passwordsMatch)
            return res.status(400).json({ field: 'password', message: 'Passwords do not match' });

        }

        // If the email and password are valid, then extract the necessary data from
        // the user's database entry and create a JWT based on this data
        const { email, username } = user;
        // const { createdAt, email, username, updatedAt } = user;
        // const token = jwt.sign({ createdAt, email, username, updatedAt }, env.JWT_SECRET);
        const token = jwt.sign({ email, username }, env.JWT_SECRET);

        // Send the token to the client
        return res.json({ token });
    },

    /**
     * Registers a new user, returns the new user's JWT to the client
     */
    // export 
    signup: async function (req, res) {
        // Queries the database for an already-existing user with the given email
        let user = await db.User.findOne({ where: { email: req.body.email } });
        // let email = req.body.email;
        // let password = req.body.password
        // db.User
        //     .findOne(email, password)
        //     .then(dbUser => res.json(dbUser))
        //     .catch(err => res.status(422).json(err));         
        // },

        // let user = {
        //     Name: req.body.name,
        //     Email: req.body.email,
        //     Password: req.body.password          
        // };
        // return axios({
        //     method: 'post',
        //     url: '/api/conferences',
        //     data: incomingData

        // If said user already exists, then send a status code of 400 (Bad Request)
        // and send a message saying that the email is already taken
        if (user) {
            return res.status(400).json({ field: 'email', message: 'Email already taken' });
        }

        // If the user doesn't already exist, create a new user based on the provided
        // data in the request body, and hash the given password
        // user = await db.User.create({
        //     ...req.body,
        //     password: await bcrypt.hash(req.body.password, env.BCRYPT_SALT_ROUNDS, null, function (err, hash) {
        //         console.log("im in the authcontroller bcrypthash signup function");
        //     })
        // });

        user = bcrypt.hash(req.body.password, env.BCRYPT_SALT_ROUNDS, null, function (err, hash) {
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash
            }).then(dbConf => res.json(dbConf))
                .catch(err => res.status(422).json(err));


        })


        // Retrieve the newly-created user from the database and extract the below
        // properties from the user's object. These properties will be accessible
        // from the decoded JWT
        // user = user.get();
        // const { createdAt, email, username, updatedAt } = user;
        const { email, username } = user;
        console.log("email check:" + user)


        // "Sign" the user object using the extracted data and the `JWT_SECRET`
        // environment variable. This is what creates the JWT.
        // const token = jwt.sign({ createdAt, email, username, updatedAt }, env.JWT_SECRET);
        const token = jwt.sign({ email, username }, env.JWT_SECRET);
        console.log("token check:" + token)

        // Send the token to the client
        return res.json({ token });
    },

    /**
     * Verifies a user's token based on the `Authorization` header provided.
     * Sends the user's decoded data to the client.
     */
    // export 
    verify: async function (req, res) {
        // Extract the token from the header
        // We need the 7th character onwards (the header looks like `bearer XXXXX`)
        const token = req.headers.authorization.slice(7).trim();

        // If the token was not provided, then send a status of 401 (Unauthorized)
        if (!token || token === 'null') {
            return res.status(401).json({ message: 'No token provided' });
        }

        // If the token was provided, decode it
        const decoded = await jwt.verify(token, env.JWT_SECRET);

        // Send the decoded data to the client
        return res.json(decoded);
    }
};
