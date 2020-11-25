import Header from "../../components/Header/Header"
import Layout from "../../components/layout"
import ProjectContentContainer from "../../components/ProjectDetail/ProjectContentContainer"
import ProjectCopyright from "../../components/ProjectDetail/ProjectCopyright"
import ProjectDescription from "../../components/ProjectDetail/ProjectDescription"
import ProjectImage from "../../components/ProjectDetail/ProjectImage/ProjectImage"
import ProjectImageContainer from "../../components/ProjectDetail/ProjectImageContainer"
import ProjectLink from "../../components/ProjectDetail/ProjectLink"
import ProjectPage from "../../components/ProjectDetail/ProjectPage"
import ProjectTags from "../../components/ProjectDetail/ProjectTags"
import ProjectTitle from "../../components/ProjectDetail/ProjectTitle"
import React from "react"
import SEO from "../../components/seo"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { graphql } from "gatsby"

export default function ProjectDetail({ data }) {
  const post = data.contentfulProjectDetail
  return (
    <Layout>
      <SEO
        title={post.meta.page_title}
        description={post.meta.ogdescription}
        image={post.meta.ogimage.fixed.srcWebp}
      />
      <ProjectPage>
        <Header />
        <ProjectTitle backgroundImage={post.headerBackgroundImage.file.url}>
          <div>{`${post.client.name} - ${post.title}`}</div>
          <ProjectTags tags={post.tags} />
        </ProjectTitle>
        <ProjectContentContainer>
          <ProjectDescription
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.description),
            }}
          />

          {post.externalLink?.linkTitle && (
            <ProjectLink
              title={post.externalLink.linkTitle}
              href={post.externalLink.linkUrl}
            >
              {post.externalLink.linkTitle}
            </ProjectLink>
          )}
          <ProjectImageContainer>
            {post.work.map(work => {
              return <ProjectImage key={work.id} info={work} />
            })}
          </ProjectImageContainer>
          {post.externalLink?.linkTitle && (
            <ProjectLink
              title={post.externalLink.linkTitle}
              href={post.externalLink.linkUrl}
            >
              {post.externalLink.linkTitle}
            </ProjectLink>
          )}
          <ProjectCopyright className="copyright">
            Copyright {post.client.name}. I merely was a part of it's creation.
          </ProjectCopyright>
        </ProjectContentContainer>
      </ProjectPage>
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
      client {
        id
        name
      }
      tags {
        id
        tag
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
      headerBackgroundImage {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
