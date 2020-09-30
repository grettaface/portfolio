import Layout from "../../components/layout"
import ProjectImage from "../../components/ProjectDetail/ProjectImage"
import React from "react"
import SEO from "../../components/seo"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { graphql } from "gatsby"

export default function ProjectDetail({ data }) {
  const post = data.contentfulProjectDetail
  return (
    <Layout>
      <SEO title={post.meta.page_title} description={post.meta.ogdescription} />
      <div>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(post.description),
          }}
        />
        <a href={post.externalLink.linkUrl}>{post.externalLink.linkTitle}</a>
        <div>
          {post.images.map(img => {
            console.log({ img })
            return <ProjectImage key={img.id} info={img} />
          })}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String) {
    contentfulProjectDetail(slug: { eq: $slug }) {
      title
      description {
        content {
          content {
            value
            marks {
              type
            }
            nodeType
          }
          nodeType
        }
        nodeType
      }
      meta {
        oglocale
        ogtype
        ogdescription
        page_name
        page_title
      }
      tags {
        tag
      }
      externalLink {
        linkTitle
        linkUrl
      }
      images {
        id
        image {
          file {
            url
            fileName
          }
          title
          description
        }
      }
    }
  }
`
