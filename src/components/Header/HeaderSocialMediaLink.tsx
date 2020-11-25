import styled from "styled-components"

const HeaderSocialMediaLink = styled.a.attrs(props => ({ href: props.url }))`
  width: 20px;
  height: 20px;
  background: yellow;
  margin-right: 20px;
  background: transparent url("${props => props.icon}") no-repeat center center;
`

export default HeaderSocialMediaLink
