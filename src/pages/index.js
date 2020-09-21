import PreviewImage from "../components/PreviewImage"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    page_title: title,
    ogdescription: description,
  } = data.allContentfulMeta.edges[0].node
  return (
    <>
      <SEO title={title} description={description} />
      {data.allContentfulProject.edges.map(p => (
        <PreviewImage key={p.node.id} item={p.node} />
      ))}
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
          description {
            description
          }
          projectType
          client
          tags {
            tag
          }
        }
      }
    }
    allContentfulMeta(filter: { pageName: { eq: "Home" } }) {
      edges {
        node {
          page_title
          ogdescription
          ogtype
          oglocale
        }
      }
    }
  }
`
