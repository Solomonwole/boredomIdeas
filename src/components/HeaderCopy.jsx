import React from "react";
import { StyledHeader2 } from "../pages/Home/Styled/Styled";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";

function HeaderC() {
  return (
    <StyledHeader2>
      <PageLayout>
        <header>
        <img src={logo} alt="Boredom Ideas" />
        <div className="navMenu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <button>REGISTER</button>
              </NavLink>
            </li>
          </ul>
        </div>
        </header>
      </PageLayout>
    </StyledHeader2>
  );
}

export default HeaderC;
