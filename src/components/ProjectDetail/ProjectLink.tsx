import styled from 'styled-components';

const ProjectLink = styled.a`
  padding: 20px 50px;
  border: 1px solid #087eb4;
  color: #087eb4;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  letter-spacing: 0.2rem;
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  background-color: transparent;
  margin: 20px auto;
  
  &:hover {
    background-color: #087eb4;
    color: #fff;
  }
`

export default ProjectLink;