import React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectImage = info => {
  console.log(info.info.description)
  return (
    <>
      <img src={info.info.image.file.url} alt={info.info.image.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(info.info.description),
        }}
      />
    </>
  )
}

export default ProjectImage
