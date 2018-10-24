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
             event = $(this).children(".conferenceHead").children("h2").children("a").text();
             url = $(this).children(".conferenceHead").children("h2").children("a").attr("href");
           // let venue = $(this).children(".conferenceHead").children(".venue_info").find("a").toString().replace(",", "").replace("</a>","</a>,").split(",");
            let venues = [];
            $(this).children(".conferenceHead").children(".venue_info").children("a").each((index, value) => {
                venues.push(value);
            });
            venueFullName = `${venues[0].children[0].data} (${venues[1].children[0].data} ${venues[2].children[0].data})`
            //console.log(venueFullName)
            //
          //  venue = venue.toString().split("</a>");
            // console.log("scraped venue: " + venues);
            venues.forEach(venue => { 
               // console.log("WORK!!!!", venue.children[0].data);
                            })
            // let venue = $(this).children(".conferenceHead").children(".venue_info").children("a").text();
            // const location = $(this).children(".conferenceHead").children(".venue_info").children("br").children("a").text();
            // console.log(location);
            // var location = $(this).children(".venue_info").children("a").text();
             beginDate = $(this).children(".conferenceDate").children(".begin_txt").children("a").text();
             endDate = $(this).children(".conferenceDate").children(".end_txt").text().replace("Ends", "").trim();
             info = $(this).children(".conferenceDescription").children(".description").children(".filter_middle").children("a").text();
            } 
            catch (err) {
                console.log("ERROR ERROR ERROR ERROR",err)
            }
            if (true ) {
               // console.log("WE're IN HERE!!!")
               let scrapedData;
               try {

                 //  console.log("FULLNM", venueFullName)
                   scrapedData = {
                       event: event,
                       url: url,
                       venue: venueFullName,
                       location: "otherPotato",
                       beginDate: beginDate,
                       endDate: endDate,
                       info: info
                   };
                   scrapedConf.push(scrapedData);
                  // console.log("scraped conferencesaaaaaaaaaa: " + scrapedConf);
                } catch (err ) {
                    console.log("ERROR!", err)
                }
            }
        });
        return scrapedConf;
        // console.log("scraped conferences: " + scrapedConf);
    });
};

module.exports = scrape;