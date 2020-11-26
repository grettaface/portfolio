import styled from "styled-components"

const ProjectTitle = styled.h1`
  position: relative;
  color: #fff;
  font-family: Lato, sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-style: normal;
  padding: 100px 0;
  background: #000 url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
`
export default ProjectTitle
