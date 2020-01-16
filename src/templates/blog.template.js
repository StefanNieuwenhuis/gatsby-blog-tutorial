import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "./blog.template.css"

const Template = ({ data }) => {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <Layout>
      <div className="blog-template">
        <Link to="/">Back to blogs</Link>
        <h1 className="blog-template-title">{title}</h1>
        <p className="blog-template-posted-by">
          Posted by {author} on {date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        path
        title
      }
      html
    }
  }
`
