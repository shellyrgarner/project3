const router = require("express").Router();
const confRoutes = require("./conferences");

router.use("/conferences", confRoutes);

module.exports = router;