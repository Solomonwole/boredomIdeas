import React, { useState } from "react";
import { MobileMenu, StyledHeader2 } from "../pages/Home/Styled/Styled";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function HeaderHeader() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <StyledHeader2>
        <PageLayout>
          <header>
            <img src={logo} alt="Boredom Ideas" />
            <div className="navMenu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/donate">Donate</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">
                    <button>Create account</button>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mobile-menu">
              {!menu ? (
                <HiOutlineMenuAlt3 onClick={() => setMenu(true)} />
              ) : (
                <IoClose onClick={() => setMenu(false)} />
              )}
            </div>
          </header>
        </PageLayout>
      </StyledHeader2>
      {menu && (
        <>
          <MobileMenu>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/donate">Donate</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <button>Create account</button>
                </NavLink>
              </li>
            </ul>
          </MobileMenu>
        </>
      )}
    </>
  );
}

export default HeaderHeader;
