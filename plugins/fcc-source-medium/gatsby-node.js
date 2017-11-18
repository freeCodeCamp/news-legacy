/*
* This scrape is really slow due to us having to crawl the
* sitemap without tripping the rate limits
*
* If you can think of a better way, please feel free to
* submit a PR
*/

const path = require('path');
const Rx = require('rx');
const hash = require('string-hash');
const textract = require('textract');
const fse = require('fs-extra');
const toMarkdown = require('to-markdown');
const parser = require('rss-parser');
const sanitise = require('sanitize-filename');

const { fromUrl } = textract;
const { Observable } = Rx;

function extractText(sitemap) {
  return new Promise((resolve, reject) => {
    fromUrl(sitemap, (err, text) => {
      if (err) {
        reject(err);
      }
      resolve(text);
    });
  });
}

const urlRegEx = /^https/;
const postsRegEx = /\/sitemap\/posts/;
const mediumFCCRegEx = /^https:\/\/.*?\.com\//;

function dashify(str) {
  return sanitise(str)
    .toLowerCase()
    .split(' ')
    .join('-');
}

async function getMediumData() {
  const topLevel = 'https://medium.freecodecamp.org/feed';
  await parser.parseURL(topLevel, function(err, parsed) {
    if (err) {
      throw err;
    }
    parsed.feed.entries
      .map(entry => {
        return Object.keys(entry).reduce(
          (accu, current) => ({
            ...accu,
            [current.replace(':', '_')]: entry[current]
          }),
          {}
        );
      })
      .forEach(article => {
        const {
          creator,
          title,
          link: url,
          content_encoded: content,
          guid,
          pubDate
        } = article;
        const articleTitle = title ? title : `An article with no title - created ${Date.now()}`;
        const filePath = path.resolve(__dirname, '../../src/pages/');
        const file = `---
author: ${creator}
title: ${articleTitle}
url: ${url}
id: ${guid}
date: ${pubDate}
---
${toMarkdown(content)}
`;
        // fse.writeFileSync(`${filePath}/${dashify(articleTitle)}.md`, file);
      });
  });

}

exports.onPreBootstrap = getMediumData;
