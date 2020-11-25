import { StaticQuery, graphql } from "gatsby"

import HeaderSocialMediaLink from "./HeaderSocialMediaLink"
import React from "react"

const HeaderSocialMedia = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaQuery {
          allContentfulSocialMedia {
            nodes {
              icon {
                file {
                  url
                  fileName
                }
              }
              url
            }
          }
        }
      `}
      render={data =>
        data.allContentfulSocialMedia.nodes.map((node, idx) => {
          return (
            <HeaderSocialMediaLink
              key={idx}
              url={node.url}
              icon={node.icon.file.url}
            />
          )
        })
      }
    />
  )
}

export default HeaderSocialMedia
