const router = require("express").Router();
const confRoutes = require("./conferences");
const scrapedRoutes = require("./scrapedConf");
// const authRoutes = require("../auth");

router.use("/conferences", confRoutes);
router.use("/scrapeConferences", scrapedRoutes);
// router.use("/auth", authRoutes);

module.exports = router;