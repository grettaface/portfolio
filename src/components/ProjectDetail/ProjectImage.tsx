import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectImage = info => {
  console.log(info.info.image.description)
  return (
    <>
      <img src={info.info.image.file.url} alt={info.info.image.title} />
      <div>{info.info.image.description}</div>
    </>
  )
}

export default ProjectImage
