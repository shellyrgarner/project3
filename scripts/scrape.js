const axios = require("axios");
const cheerio = require("cheerio");

const scrape = function () {

    return axios.get("http://www.allconferences.com/Computers/").then(function (res) {
        const $ = cheerio.load(res.data);
        // console.log("scrape res.data: " + res.data);

        let scrapedConf = [];
        let venueFullName;
        let event;
        let url;
        let beginDate;
        let endDate;
        let info;
        $(".listing_content").each(function (i, element) {
            try {
                event = $(this).children(".conferenceHead").children("h2").children("a").text().replace("-Ei,Scopus", "").replace("_Ei,Scopus", "").replace("_Scopus,Ei", "").replace("_EI,Scopus", "").replace("_Scopus", "").trim();
                url = $(this).children(".conferenceHead").children("h2").children("a").attr("href");
                beginDate = $(this).children(".conferenceDate").children(".begin_txt").children("a").text();
                //  endDate = $(this).children(".conferenceDate").children(".end_txt").text().replace("Ends", "").trim();
                endDate = $(this).children(".conferenceDate").find(".end_txt").text().replace("Ends", "").trim();
                info = $(this).children(".conferenceDescription").children(".description").children(".filter_middle").children("a").text();

                let venues = [];
                $(this).children(".conferenceHead").children(".venue_info").children("a").each((index, value) => {
                    venues.push(value);
                });
                // venueFullName = `${venues[0].children[0].data} (${venues[1].children[0].data}, ${venues[2].children[0].data})`
                venueFullName = `${venues[0].children[0].data}`
                venueLocation = `${venues[1].children[0].data}, ${venues[2].children[0].data}`
                //console.log(venueFullName)
                // console.log("scraped venue: " + venues);
                // venues.forEach(venue => {
                // console.log("WORK!!!!", venue.children[0].data);
                // })              
            }
            catch (err) {
                console.log("ERROR ERROR ERROR ERROR", err)
            }
            if (true) {
                // console.log("WE're IN HERE!!!")
                let scrapedData;
                try {
                    //  console.log("FULLNM", venueFullName)
                    scrapedData = {
                        event: event,
                        url: url,
                        venue: venueFullName,
                        location: venueLocation,
                        beginDate: beginDate,
                        endDate: endDate,
                        info: info
                    };
                    scrapedConf.push(scrapedData);
                    // console.log("scraped conferencesaaaaaaaaaa: " + scrapedConf);
                } catch (err) {
                    console.log("ERROR!", err)
                }
            }
        });
        return scrapedConf;
        // console.log("scraped conferences: " + scrapedConf);
    });
};

module.exports = scrape;