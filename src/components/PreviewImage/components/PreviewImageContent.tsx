import styled from "styled-components"

const PreviewImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));
  transition: all 1s ease-out;
  z-index: 3;
`

export default PreviewImageContent
