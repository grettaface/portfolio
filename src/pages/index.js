import Grid from "../components/Grid/Grid"
import PreviewImage from "../components/PreviewImage/PreviewImage"
import React from "react"
import SEO from "../components/seo"
import Transition from "../components/Transition/Transition"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    page_title: title,
    ogdescription: description,
  } = data.allContentfulMeta.edges[0].node
  return (
    <>
      <SEO title={title} description={description} />
      <Transition />
      <Grid>
        {data.allContentfulProject.edges.map(p => (
          <PreviewImage key={p.node.id} item={p.node} />
        ))}
      </Grid>
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
          previewImage {
            id
            resolutions(quality: 100) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
            }
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
