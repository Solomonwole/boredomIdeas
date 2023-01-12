import React from "react";
import { StyledHeader } from "../styles/Styled";
import logo from "../assets/logo.svg";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <>&nbsp;</>
      <img src={logo} alt="Boredom Ideas" />
      <TbLogout
        className="icon"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
      />
    </StyledHeader>
  );
}

export default Header;
