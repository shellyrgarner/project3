const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const authController = require("../controllers/authController");


//"auth/..."
// router.post('/login', asyncHandler(authController.login));
// router.post('/signup', asyncHandler(authController.signup));
// router.get('/verify', asyncHandler(authController.verify));

router.route('/login')
    .post(asyncHandler(authController.login));

router.route('/signup')
    .post(authController.signup);

router.route('/verify')
    .get(authController.verify);

module.exports = router;

