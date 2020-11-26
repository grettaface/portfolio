import styled from "styled-components"

const ProjectPreviewtitle = styled.h1`
  position: relative;
  font-size: 1.18rem;
  color: white;
  margin: 0 0 15px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2.5px;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 2px;
    background: white;
  }
`

export default ProjectPreviewtitle
