function truncate(text) {
  return text.slice(0, 141) + '...';
}

const articleMetaRE = /^\-\-\-[\w\W]+?\-\-\-/;
const mdImageRE = /!\[[\w\W]*?\]\([\w\W]+?\)/;
const titleRE = /^#[^\n]*$/gm;

function formatExMdownFile(description) {
  return truncate(
    description
      .replace(articleMetaRE, '')
      .replace(mdImageRE, '')
      .replace(titleRE, '')
  );
}

function challengeNormaliser(doc) {
  return {
    ...doc,
    _source: {
      ...doc._source,
      description: truncate(doc._source.description)
    }
  };
}

function newsNormaliser(doc) {
  return {
    ...doc,
    _source: {
      ...doc._source,
      description: formatExMdownFile(doc._source.content),
      title: doc._source.data.title
    }
  };
}

function guideNormaliser(doc) {
  return {
    ...doc,
    _source: {
      ...doc._source,
      description: formatExMdownFile(doc._source.body),
      url: `https://guide.freecodecamp.org${doc._source.url}`
    }
  };
}

function youtubeNormaliser(doc) {
  return {
    ...doc,
    _source: {
      ...doc._source,
      description: truncate(doc._source.description)
    }
  };
}

const normaliserMap = {
  challenge: challengeNormaliser,
  news: newsNormaliser,
  guides: guideNormaliser,
  youtube: youtubeNormaliser
};

export function normaliser(results) {
  return results.map(result => {
    const { _index } = result;
    if (!(_index in normaliserMap)) {
      throw new Error('No normalising function found for %s', _index);
    }
    return normaliserMap[_index](result);
  });
}
