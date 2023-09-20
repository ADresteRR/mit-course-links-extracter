const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        //example of code 
        const pythonCourses = await pageScraper(browser, "c++"); // provide search term i.e course title   , can be make dynamic
        const jsCourses = await pageScraper(browser, "js");
        console.log(pythonCourses);
        console.log(jsCourses);
        browser.close();
        /*
        yeh dynamic bhi ho skta like tu provide kare koi random topic aur yeh uske related couse nikalke de dega
        */

    }
    catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)