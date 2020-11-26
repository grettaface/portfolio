import ProjectTags from "../../ProjectDetail/ProjectTags"
import ProjectTagsContainer from "../../ProjectDetail/ProjectTagsContainer"
import styled from "styled-components"

const PreviewImageContent = styled.div`
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.65)
  );
  transition: all 1s ease-out;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${ProjectTagsContainer} {
    justify-content: flex-start;
    color: white;
  }
`

export default PreviewImageContent
