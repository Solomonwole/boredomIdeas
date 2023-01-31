import React, { useState } from "react";
import { StyledHeader } from "../styles/Styled";
import logo from "../assets/logo.svg";
import { TbLogout } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { MobileMenu, StyledHeader2 } from "../pages/Home/Styled/Styled";
import { PageLayout } from "../layout/PageLayout";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* <StyledHeader>
        <>&nbsp;</>
        <img src={logo} alt="Boredom Ideas" />
        <TbLogout
          className="icon"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        />
      </StyledHeader> */}

      <StyledHeader2>
        <PageLayout>
          <header>
            <img src={logo} alt="Boredom Ideas" />
            <div className="navMenu">
              <ul>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/login");
                    }}
                  >
                    <TbLogout />
                    &nbsp; Logout
                  </Button>
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
                <NavLink to="/dashboard">
                  <MenuItems>
                    <MdDashboard /> &nbsp;Dashboard
                  </MenuItems>
                </NavLink>
              </li>
              <li>
                <MenuItems
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                >
                  <TbLogout className="icon log" />
                  &nbsp;<span className="log" >Logout</span>
                </MenuItems>
              </li>
            </ul>
          </MobileMenu>
        </>
      )}
    </>
  );
}

export default Header;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  margin: 10px 0;

  
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 0 30px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  height: 50px;
`;
