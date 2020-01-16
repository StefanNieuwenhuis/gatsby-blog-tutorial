import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Post from "../components/Post"
const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map((post, index) => {
      const { title, author, date, description, path } = post.node.frontmatter

      return (
        <Post
          key={index}
          title={title}
          author={author}
          date={date}
          description={description}
          path={path}
        />
      )
    })}
  </Layout>
)

export default Blog

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`
