const router = require("express").Router();
const confRoutes = require("./conferences");
const scrapedRoutes = require("./scrapedconf");

router.use("/conferences", confRoutes);
router.use("/scrapedconferences", scrapedRoutes);

module.exports = router;