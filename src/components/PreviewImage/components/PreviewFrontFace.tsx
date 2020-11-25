import PreviewFrontFaceContainer from "./PreviewFrontFaceContainer"
import PreviewImageContent from "./PreviewImageContent"
import React from "react"

const PreviewFrontFace = ({ img }) => {
  console.log({ img })
  return (
    <PreviewFrontFaceContainer>
      <PreviewImageContent />
      <img src={img.fluid.srcWebp} />
    </PreviewFrontFaceContainer>
  )
}

export default PreviewFrontFace
