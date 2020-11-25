import "../components/layout.css"

import Grid from "../components/Grid/Grid"
import Header from "../components/Header/Header"
import PreviewImage from "../components/PreviewImage/PreviewImage"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    page_title: title,
    ogdescription: description,
    ogimage: image,
  } = data.allContentfulMeta.edges[0].node

  console.log({ data })
  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image.fixed.srcWebp}
      />
      <Header/>
      <Grid>
        {data.allContentfulProject.nodes.map(p => {
          return (
            <PreviewImage
              key={p.id}
              slug={p.link?.slug}
              previewImage={p.previewImage}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulProject {
      nodes {
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
          fluid {
            srcWebp
          }
        }
        link {
          slug
        }
      }
    }
    allContentfulMeta(filter: { page_name: { eq: "Home" } }) {
      edges {
        node {
          page_title
          ogdescription
          ogtype
          oglocale
          ogimage {
            fixed {
              srcWebp
            }
          }
        }
      }
    }
  }
`
