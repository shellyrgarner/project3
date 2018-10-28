// import { Router } from 'express';
// import asyncM from 'express-async-handler';
// import * as controller from '../controllers/authController';
// const router = Router();
const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const authController = require("../controllers/authController");


//"auth/..."
router.post('/login', asyncHandler(authController.login));
router.post('/signup', asyncHandler(authController.signup));
router.get('/verify', asyncHandler(authController.verify));

// export { router };
module.exports = router;