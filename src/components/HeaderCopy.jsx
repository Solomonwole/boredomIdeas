import React from "react";
import { StyledHeader2 } from "../styles/Styled";
import logo from "../assets/logo.svg";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function HeaderC() {
  const navigate = useNavigate();
  return (
    <StyledHeader2>
      <>&nbsp;</>
      <img src={logo} alt="Boredom Ideas" />
      {/* <button onClick={()=> {
        navigate("/register")
      }}>REGISTER</button> */}
    </StyledHeader2>
  );
}

export default HeaderC;
