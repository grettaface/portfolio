import PreviewImage from "../PreviewImage/PreviewImage"
import styled from "styled-components"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:hover {
    ${PreviewImage} {
      filter: grayscale(10);
    }
  }
`

export default Grid
