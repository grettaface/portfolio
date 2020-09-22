import styled from "styled-components"
const PreviewFrontFaceContainer = styled.div`
  position: absolute;
  background: red;
  transform: translateZ(50vw);
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
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  @media screen and (min-width: 500px) {
    width: 50vw;
    height: 50vw;
    transform: translateZ(25vw);
  }

  @media screen and (min-width: 800px) {
    width: 33.333vw;
    height: 33.333vw;
    transform: translateZ(16.666vw);
  }

  @media screen and (min-width: 1200px) {
    width: 25vw;
    height: 25vw;
    transform: translateZ(12.5vw);
  }

  img {
    object-fit: cover;
  }
`
export default PreviewFrontFaceContainer
