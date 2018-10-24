const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function () {

    return axios.get("http://www.allconferences.com/Computers/").then(function (res) {
        const $ = cheerio.load(res.data);
        // console.log("scrape res.data: " + res.data);

        const scrapedConf = [];

        $(".listing_content").each(function (i, element) {
            const event = $(this).children(".conferenceHead").children("h2").children("a").text();
            const url = $(this).children(".conferenceHead").children("h2").children("a").attr("href");
            const venue = $(this).children(".conferenceHead").children(".venue_info").children("a").text();
            //var location = $(this).children(".venue_info").children("a").text();
            const beginDate = $(this).children(".conferenceDate").children(".begin_txt").children("a").text();
            const endDate = $(this).children(".conferenceDate").children(".end_txt").children("a").text();
            const info = $(this).children(".conferenceDescription").children(".description").children(".filter_middle").children("a").text();
            
            if (event && url && venue) {

                // const eventTrim = event.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                // const venueTrim = desc.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                // const descTrim = desc.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                const scrapedData = {
                    event: event,
                    url: url,
                    venue: venue,
                    beginDate: beginDate,
                    endDate: endDate,
                    info: info
                };

                scrapedConf.push(scrapedData);
               // console.log("scraped conferences: " + scrapedConf);
            }
        });
        return scrapedConf;
        // console.log("scraped conferences: " + scrapedConf);
    });
};

module.exports = scrape;