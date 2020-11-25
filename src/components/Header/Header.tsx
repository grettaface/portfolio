import HeaderContainer from "./HeaderContainer"
import HeaderSocialMedia from "./HeaderSocialMedia"
import HeaderTitle from "./HeaderTitle"
import React from "react"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle />
      <HeaderSocialMedia />
    </HeaderContainer>
  )
}

export default Header
