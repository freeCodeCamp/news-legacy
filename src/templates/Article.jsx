import React from 'react';

function Article({ data }) {
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />;
}
export const query = graphql`
query BlogPostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    fields {
      slug
    }
    frontmatter {
      id
      title
      author
      date
    }
	}
}
`;

Article.displayName = 'Article';

export default Article;
