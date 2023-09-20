let url = "https://ocw.mit.edu/search/?q=";
// this function is taking browser instance and search term // meaning if you want to search python course then it would come here
async function scraperObject(browser, searchTerm) {
    let page = await browser.newPage();
    url += searchTerm;
    console.log("going to " + url);
    await page.goto(url);

    await page.waitForSelector('[role=feed] > article');
    let content = await page.$$eval('[role=feed] > article', articles => {
        articles = articles.map(article => {
            data = {};
            data["title"] = article.querySelector('.course-title > a > div > span').innerText;
            data['link'] = article.querySelector('.cover-image > a').href;
            data["image"] = article.querySelector('.cover-image > a > img').src;
            return data;
        });
        return articles;
    });
    page.close();
    return content;
}
module.exports = scraperObject;