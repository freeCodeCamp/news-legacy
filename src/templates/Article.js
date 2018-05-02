import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {}

function Article({ data: { markdownRemark } }) {
  const {
    html,
    timeToRead,
    frontmatter: {
      title,
      pubDate,
      author: {
        name,
        avatar,
        bio,
        social: { twitter },
      },
    },
  } = markdownRemark
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

Article.displayName = 'Article'
Article.propTypes = propTypes

export default Article

export const query = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        pubDate
        author {
          name
          avatar
          bio
          social {
            twitter
          }
        }
      }
    }
  }
`
