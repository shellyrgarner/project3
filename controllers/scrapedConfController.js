const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
    scrapeConferences: function(req, res) {
        return scrape().then(function(scrapedConf) {
            // console.log('scraping');
            return db.Conference.create(scrapedConf);
            // console.log("scraped conf: " + scrapedConf);
        })
        .then(function(dbConf) {
            if(dbConf.length === 0) {
                res.json({
                    message: "No conferences today.  Check back later for updates."
                });
            }
            else {
                res.json({
                    message: "Added " + dbConf.length + " new events!"
                });
            }
            // console.log("scraped res: " + res)
        })
        .catch(function(err) {
            res.json({
                message: "Scrape complete!"
            });
        });
    }
};