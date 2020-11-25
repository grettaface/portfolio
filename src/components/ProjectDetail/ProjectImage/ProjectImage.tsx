import ProjectImageContainer from "./ProjectImageContainer"
import ProjectImageDescription from "./ProjectImageDescription"
import React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

const ProjectImage = info => {
  return (
    <ProjectImageContainer>
      <img
        src={info.info.image.file.url}
        alt={info.info.image.title}
        title={info.info.image.title}
      />
      <ProjectImageDescription
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(info.info.description),
        }}
      />
    </ProjectImageContainer>
  )
}

export default ProjectImage
