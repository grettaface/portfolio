import styled from "styled-components"

const ProjectTitle = styled.h1`
  color: #fff;
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 100px 0;
  background: #ccc url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`
export default ProjectTitle
