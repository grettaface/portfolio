import React from "react"

const PreviewImage = ({ item }) => {
  const { client, title } = item
  return <h1>{`${client} - ${title}`}</h1>
}

export default PreviewImage
