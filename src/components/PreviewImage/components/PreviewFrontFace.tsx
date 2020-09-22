import PreviewFrontFaceContainer from "./PreviewFrontFaceContainer"
import React from "react"

const PreviewFrontFace = ({ img }) => {
  console.log({ img })
  return (
    <PreviewFrontFaceContainer>
      <img src={img.resolutions.srcWebp} />
    </PreviewFrontFaceContainer>
  )
}

export default PreviewFrontFace
