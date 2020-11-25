import PreviewImageContent from "./PreviewImageContent"
import styled from "styled-components"

const PreviewImageContainer = styled.div`
  width: 100vw;
  height: 100vw;
  transform: rotateY(0);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  overflow: hidden;

  img {
    transition: transform 30s ease-out;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 1;

    img {
      transform: scale(1.25);
    }

    ${PreviewImageContent} {
      background: linear-gradient(
        to bottom right,
        rgba(255, 0, 0, 0.2),
        rgba(8, 126, 180, 0.8)
      );
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
