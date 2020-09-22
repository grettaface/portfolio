import PreviewFrontFace from "./PreviewFrontFaceContainer"
import PreviewSideFace from "./PreviewSideFace"
import styled from "styled-components"

const PreviewImageContainer = styled.div`
  width: 100vw;
  height: 100vw;
  transform: rotateY(0);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);

  &:hover {
    transform: rotateY(-90deg);
    z-index: 1;

    ${PreviewSideFace} {
      &::after {
        opacity: 0;
      }
    }

    ${PreviewFrontFace} {
      &::after {
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 500px) {
    width: 50vw;
    height: 50vw;
  }

  @media screen and (min-width: 800px) {
    width: 33.333vw;
    height: 33.333vw;
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 25vw;
  }
`
export default PreviewImageContainer
