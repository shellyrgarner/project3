const router = require("express").Router();
const scrapedConfController = require("../../controllers/scrapedConfController");

router.route("/")
    .get(scrapedConfController.scrapeConferences);

module.exports = router;