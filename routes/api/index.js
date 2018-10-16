const router = require("express").Router();
const confRoutes = require("./conferences");
const scrapedRoutes = require("./scrapedConf");

router.use("/conferences", confRoutes);
router.use("/conferences", scrapedRoutes);
// router.use("/scrapedconferences", scrapedRoutes);

module.exports = router;