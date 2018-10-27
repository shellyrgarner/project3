const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
// const passport = require("passport");

router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;


// //Passport
// router.route("/login")
//     .post(
//     passport.authenticate('local'),
//     function(req, res) {
//       res.redirect('/users/' + req.user.username);
//     });