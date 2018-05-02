import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>{edges.map(({ node }) => <li>{node.frontmatter.title}</li>)}</ul>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          excerpt
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
    }
  }
`
