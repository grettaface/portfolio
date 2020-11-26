import { Link } from "gatsby"
import PreviewFrontFace from "./components/PreviewFrontFace"
import PreviewImageContainer from "./components/PreviewImageContainer"
import PreviewSideFace from "./components/PreviewSideFace"
import React from "react"

const PreviewImage = ({ slug = "", project }) => {
  return (
    <Link to={slug}>
      <PreviewImageContainer>
        <PreviewFrontFace project={project} />
      </PreviewImageContainer>
    </Link>
  )
}

export default PreviewImage
