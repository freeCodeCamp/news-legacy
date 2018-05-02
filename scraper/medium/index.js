const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');
const Turndown = require('turndown');
const slugg = require('slugg');
const matter = require('gray-matter');

const { getArticle } = require('./getArticle');
const { getAuthor } = require('./getAuthor');

const td = new Turndown();
const outPath = path.resolve(__dirname, '../../src/resource/articles');

const parser = new Parser();

let queue = [];
let workers = 0;


function writeArticle(article) {
  const { content, meta } = article;
  const { slug } = meta;

  return fs.writeFile(
    `${outPath}/${slug}.md`,
    matter.stringify(content, meta),
    err => {
      if (err) {
        throw new Error(err);
      }
      workers--
      console.log('workers', workers)
      startWorker()
    }
  );
}

function getArticleData(item) {
  const { link, title, isoDate, creator } = item;
  Promise.all([
    getArticle(link),
    getAuthor(link)
  ]).then(([article, author]) => {
    const content = td.turndown(article);
    const meta = {
      original: link,
      title,
      pubDate: isoDate,
      author,
      slug: slugg(title)
    };
    return writeArticle({ meta, content });
  });
}

function startWorker() {
  if (queue.length > 0 && workers < 5) {
    workers++
    console.log('starting worker %d', workers);
    getArticleData(queue.shift())
  }
}
(async () => {
  let feed = await parser.parseURL('https://medium.freecodecamp.org/feed');
  queue = feed.items.map(item => item);
  while (queue.length > 0 && workers < 5) {
    startWorker();
  }
})()
