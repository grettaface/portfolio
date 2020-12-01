import PreviewFrontFaceContainer from "./PreviewFrontFaceContainer"
import PreviewImageContent from "./PreviewImageContent"
import ProjectPreviewtitle from "./ProjectPreviewTitle"
import ProjectTags from "../../ProjectDetail/ProjectTags"
import ProjectTitle from "../../ProjectDetail/ProjectTitle"
import React from "react"

const PreviewFrontFace = ({ project }) => {
  console.log({ project })
  return (
    <PreviewFrontFaceContainer>
      <PreviewImageContent>
        <ProjectPreviewtitle>{`${project.client} - ${project.title}`}</ProjectPreviewtitle>
        <ProjectTags tags={project.tags} />
      </PreviewImageContent>
      <img loading="lazy" src={project.previewImage.fluid.srcWebp} />
    </PreviewFrontFaceContainer>
  )
}

export default PreviewFrontFace
