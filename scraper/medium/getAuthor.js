const fs = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');
const matter = require('gray-matter');
const slugg = require('slugg');
const _ = require('lodash');

const outPath = path.resolve(__dirname, '../../src/resource/authors');

function writeAuthorFile(author) {
  const { bio, slug } = author;
  fs.writeFile(
    `${outPath}/${slug}.md`,
    matter.stringify(bio, _.omit(author, ['bio'])),
    err => {
      if (err) {
        throw new Error(err);
      }
    }
  )
}

async function getAuthor(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const author = await page.evaluate(() => {
    const avatar = document.querySelector('.postMetaLockup .avatar-image').src
    const name = document.querySelector('.postMetaLockup .u-lineHeightTightest a ').innerText
    const bio = document.querySelector('.postMetaLockup .ui-caption.postMetaInline').innerText
    const profileLink = document.querySelector('.postMetaLockup .u-lineHeightTightest a').href
    return {
      avatar,
      name,
      bio,
      profileLink
    };
  })
  await page.goto(author.profileLink);

  const social = await page.evaluate(() => {
    let twitter= null;
    try {
      twitter = document.querySelector('a[title="Twitter"]').href
    }
    catch (err) {
      // no-op
    }
    return {
      twitter
    };
  })

  author.social = social;
  author.slug = slugg(author.name);
  // writeAuthorFile(author);

  await browser.close();

  return author ;
};

exports.getAuthor = getAuthor;



