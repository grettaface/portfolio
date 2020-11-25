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
      {tags.map((t,i) => (
        <ProjectTag key={t.id}>{t.tag}{i<tags.length - 1 ? ',': ''} </ProjectTag>
      ))}
    </ProjectTagsContainer>
  )
}

export default ProjectTags
