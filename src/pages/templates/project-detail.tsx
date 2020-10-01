import Layout from "../../components/layout"
import ProjectImage from "../../components/ProjectDetail/ProjectImage"
import ProjectTags from "../../components/ProjectDetail/ProjectTags"
import ProjectTitle from "../../components/ProjectDetail/ProjectTitle"
import React from "react"
import SEO from "../../components/seo"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { graphql } from "gatsby"

export default function ProjectDetail({ data }) {
  const post = data.contentfulProjectDetail
  console.log(post)
  return (
    <Layout>
      <SEO
        title={post.meta.page_title}
        description={post.meta.ogdescription}
        image={post.meta.ogimage.fixed.srcWebp}
      />
      <div>
        <ProjectTitle>{`${post.client} - ${post.title}`}</ProjectTitle>
        <ProjectTags tags={post.tags} />
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(post.description),
          }}
        />
        <a title={post.externalLink.linkTitle} href={post.externalLink.linkUrl}>
          {post.externalLink.linkTitle}
        </a>
        <div>
          {post.work.map(work => {
            return <ProjectImage key={work.id} info={work} />
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
      externalLink {
        linkTitle
        linkUrl
      }
      work {
        description {
          content {
            content {
              value
              nodeType
              marks {
                type
              }
            }
            nodeType
          }
          nodeType
        }
        image {
          file {
            contentType
            url
          }
          fluid {
            srcWebp
          }
          title
        }
        id
      }
      meta {
        ogimage {
          fixed {
            srcWebp
          }
        }
        oglocale
        ogtype
        page_name
        page_title
        ogdescription
      }
      client
      tags {
        id
        tag
      }
    }
  }
`
