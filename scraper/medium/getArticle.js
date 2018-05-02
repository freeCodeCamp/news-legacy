const puppeteer = require('puppeteer');

async function getArticle(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const html = await page.evaluate(() => {
    return document.querySelector('.postArticle-content').innerHTML
  })

  await browser.close();
  return html;

};

exports.getArticle = getArticle;
