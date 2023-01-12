import React from "react";
import { StyledHeader } from "../styles/Styled";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Boredom Ideas" />
    </StyledHeader>
  );
}

export default Header;
