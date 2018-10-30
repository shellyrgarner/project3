const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
    scrapeConferences: function(req, res) {
        return scrape().then(function(scrapedConf) {
            try {
                scrapedConf.forEach(conf => {console.log("CONF: ", JSON.stringify(conf))})
                console.log("scraped conf: " + scrapedConf);
                return db.Conference.create(scrapedConf);
            } catch (err) {console.log("ERROR", err)}
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
            return res.json(err);
        });
    }
};