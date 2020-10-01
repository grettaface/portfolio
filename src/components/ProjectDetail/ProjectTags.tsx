import ProjectTag from "./ProjectTag"
import ProjectTagsContainer from "./ProjectTagsContainer"
import React from "react"
import { Tag } from "../.."

interface Props {
  tags: Tag[]
}

const ProjectTags = ({ tags }: Props) => {
  console.log(tags)
  return (
    <ProjectTagsContainer>
      {tags.map(t => (
        <ProjectTag key={t.id}>{t.tag}</ProjectTag>
      ))}
    </ProjectTagsContainer>
  )
}

export default ProjectTags
