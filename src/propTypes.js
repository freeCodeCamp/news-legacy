import PropTypes from 'prop-types';

const frontmatterPropTypes = PropTypes.shape({
  id: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  authorFacebook: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  authorTwitter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
});

const fieldsPropTypes = PropTypes.shape({
  slug: PropTypes.string
});

const nodeShape = {
  node: PropTypes.shape({
    excerpt: PropTypes.string,
    timeToRead: PropTypes.number,
    fields: fieldsPropTypes,
    frontmatter: frontmatterPropTypes
  })
};

const articleArray = PropTypes.arrayOf(PropTypes.shape(nodeShape));

const data = PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    edges: articleArray
  })
});

export const articlePropTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      fields: fieldsPropTypes,
      frontmatter: frontmatterPropTypes
    })
  })
};

export const indexPropTypes = {
  data
};

export const layoutPropTypes = {
  children: PropTypes.func,
  data,
  getStoredViews: PropTypes.func.isRequired
};

export const NavPropTypes = {};

export const NavContextTypes = {
  router: PropTypes.object.isRequired
};

export const SearchBarPropTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string
};

export const TilesPropTypes = {
  articles: articleArray
};

export const TimeAfterPublishPropTypes = {
  date: PropTypes.string.isRequired
};
