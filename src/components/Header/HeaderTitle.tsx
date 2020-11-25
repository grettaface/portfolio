import HeaderTitleContainer from "./HeaderTitleContainer"
import HeaderTitleDescription from "./HeaderTitleDescription"
import HeaderTitleName from "./HeaderTitleName"
import React from "react"

const HeaderTitle = () => {
  return (
    <HeaderTitleContainer>
      <HeaderTitleName>Bret kruse</HeaderTitleName>
      <HeaderTitleDescription>Designer + Developer</HeaderTitleDescription>
    </HeaderTitleContainer>
  )
}

export default HeaderTitle
