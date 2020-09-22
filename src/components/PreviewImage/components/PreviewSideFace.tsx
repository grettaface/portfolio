import styled from "styled-components"
const PreviewSideFace = styled.div`
  position: absolute;

  transform: rotateY(90deg) translateZ(50vw);
  width: 100vw;
  height: 100vw;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  @media screen and (min-width: 500px) {
    width: 50vw;
    height: 50vw;
    transform: rotateY(90deg) translateZ(25vw);
  }

  @media screen and (min-width: 800px) {
    width: 33.333vw;
    height: 33.333vw;
    transform: rotateY(90deg) translateZ(16.666vw);
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 25vw;
    transform: rotateY(90deg) translateZ(12.5vw);
  }
`
export default PreviewSideFace
