const db = require("../models");
const env = require("../config/env");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");
const validate = require("../models/user");
const _ = require("lodash");


module.exports = {
    login: async (req, res) => {

        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email or password.");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        console.log("im in the authcontroller bcryptcompare login function");
        if (!validPassword) return res.status(400).send("Invalid email or password.");

        // const token = user.generateAuthToken();
        const token = jwt.sign({ email, username }, env.JWT_SECRET); //generates a token

        res.send(token);
    },

    signup: async (req, res) => {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("User already registered.");

        user = new User({
            username: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        // user = await db.User.create({
        //     ...req.body,
        //     password: await bcrypt.hash(user.password, env.BCRYPT_SALT_ROUNDS, function (err, hash) {


        password = await bcrypt.hash(user.password, env.BCRYPT_SALT_ROUNDS, null, function (err, hash) {
            console.log("im in the authcontroller bcrypthash signup function");
        })

        console.log("new user:" + user)
        // console.log("userPassword:" + user.password)
        await user.save();
      
        // const token = user.generateAuthToken();
        // const token = jwt.sign({ email, username }, env.JWT_SECRET); //get email is not defined error with this line
        const token = jwt.sign({ _id: user._id }, env.JWT_SECRET); //generates a token  
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
        // return res.json(token); //get cant set headers error with this
        // console.log("token check:" + token)
    },

    verify: async (req, res, next) => {
        const token = req.header("x-auth-token");
        if (!token || token === 'null') res.status(401).send('Access denied. No token provided.');

        try {
            const decoded = jwt.verify(token, env.JWT_SECRET);
            // const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

            req.user = decoded;
            next();
        }
        catch (ex) {
            res.status(400).send('Invalid token.');
        }

    }
};
// /*****************************************************************************
//  * Allows a user to login using email and password. Returns their JWT to the client.
//  */
// module.exports = {
//     // export 
//     login: async function (req, res) {
//         // Using the email located on the request body, query the database and
//         // get the user's data
//         //  const user = await db.User.findOne({ where: { email: req.body.email } });

//         const user = db.User
//             .findOne(req.body.email)
//             .then(dbUser => res.json(dbUser))
//             .catch(err => res.status(422).json(err));

//         console.log("authcontroller: " + req.body.email)
//         // If the user doesn't exist, send a status code of 401 (Unauthorized)
//         // and let them know that their email is invalid
//         if (!user) {
//             return res.status(401).json({ field: 'email', message: 'Invalid email' });
//         }

//         // Compare the hashed password from the database and the password located on
//         // the request body using bcrypt
//         // const passwordsMatch = await bcrypt.compare(req.body.password, user.password);
//         const passwordsMatch = await bcrypt.compare(req.body.password, user.password, function (err, res) {
//             if (err) return (err);
//              console.log("im in the authcontroller bcryptcompare login function");
//         });

//         // If the passwords do not match, then send a status code of 401 (Unauthorized)
//         // and let the user know that the given passwords do not match
//         if (!passwordsMatch) {
//             console.log("password:" + passwordsMatch)
//             return res.status(400).json({ field: 'password', message: 'Passwords do not match' });

//         }

//         // If the email and password are valid, then extract the necessary data from
//         // the user's database entry and create a JWT based on this data
//         const { email, username } = user;
//         // const { createdAt, email, username, updatedAt } = user;
//         // const token = jwt.sign({ createdAt, email, username, updatedAt }, env.JWT_SECRET);
//         const token = jwt.sign({ email, username }, env.JWT_SECRET);

//         // Send the token to the client
//         return res.json({ token });
//     },

//     /**
//      * Registers a new user, returns the new user's JWT to the client
//      */
//     // export 
//     signup: async function (req, res) {
//         // Queries the database for an already-existing user with the given email
//         let user = await db.User.findOne({ where: { email: req.body.email } });

//         // If said user already exists, then send a status code of 400 (Bad Request)
//         // and send a message saying that the email is already taken
//         if (user) {
//             return res.status(400).json({ field: 'email', message: 'Email already taken' });
//         }

//         // If the user doesn't already exist, create a new user based on the provided
//         // data in the request body, and hash the given password
//         // user = await db.User.create({
//         //     ...req.body,
//         //     password: await bcrypt.hash(req.body.password, env.BCRYPT_SALT_ROUNDS, null, function (err, hash) {
//         //         console.log("im in the authcontroller bcrypthash signup function");
//         //     })
//         // });

//       //         })


//         // Retrieve the newly-created user from the database and extract the below
//         // properties from the user's object. These properties will be accessible
//         // from the decoded JWT
//         // user = user.get();
//         // const { createdAt, email, username, updatedAt } = user;
//         const { email, username } = user;
//         console.log("email check:" + user)


//         // "Sign" the user object using the extracted data and the `JWT_SECRET`
//         // environment variable. This is what creates the JWT.
//         // const token = jwt.sign({ createdAt, email, username, updatedAt }, env.JWT_SECRET);
//         const token = jwt.sign({ email, username }, env.JWT_SECRET);
//         console.log("token check:" + token)

//         // Send the token to the client
//         return res.json({ token });
//     },

//     /**
//      * Verifies a user's token based on the `Authorization` header provided.
//      * Sends the user's decoded data to the client.
//      */
//     // export 
//     verify: async function (req, res) {
//         // Extract the token from the header
//         // We need the 7th character onwards (the header looks like `bearer XXXXX`)
//         const token = req.headers.authorization.slice(7).trim();

//         // If the token was not provided, then send a status of 401 (Unauthorized)
//         if (!token || token === 'null') {
//             return res.status(401).json({ message: 'No token provided' });
//         }

//         // If the token was provided, decode it
//         const decoded = await jwt.verify(token, env.JWT_SECRET);

//         // Send the decoded data to the client
//         return res.json(decoded);
//     }
// };
