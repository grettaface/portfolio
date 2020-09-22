import PreviewFrontFace from "./components/PreviewFrontFace"
import PreviewImageContainer from "./components/PreviewImageContainer"
import PreviewSideFace from "./components/PreviewSideFace"
import React from "react"

const PreviewImage = ({ item }) => {
  const { client, title } = item
  console.log({ item })
  return (
    <PreviewImageContainer>
      <PreviewFrontFace img={item.previewImage} />
      <PreviewSideFace />
    </PreviewImageContainer>
  )
}

export default PreviewImage
