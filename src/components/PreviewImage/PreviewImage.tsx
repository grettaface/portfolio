import { Link } from "gatsby"
import PreviewFrontFace from "./components/PreviewFrontFace"
import PreviewImageContainer from "./components/PreviewImageContainer"
import PreviewSideFace from "./components/PreviewSideFace"
import React from "react"

const PreviewImage = ({ slug = "", previewImage }) => {
  return (
    <Link to={slug}>
      <PreviewImageContainer>
        <PreviewFrontFace img={previewImage} />
      </PreviewImageContainer>
    </Link>
  )
}

export default PreviewImage
