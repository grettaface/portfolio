import React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectImage = info => {
  console.log(info.info)
  return (
    <div>
      <img
        src={info.info.image.fluid.srcWebp}
        alt={info.info.image.title}
        title={info.info.image.title}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(info.info.description),
        }}
      />
    </div>
  )
}

export default ProjectImage
