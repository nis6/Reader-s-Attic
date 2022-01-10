import React from "react";
import { Logo } from "../../utilities";
import { Nav, NavbarContainer, IconContainer } from "./Navbar.element";
import { home_illustrations } from "../../assets";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Logo>
            <img src={home_illustrations.logo} style={{ width: "100%" }} />
          </Logo>
          <IconContainer>
            <img src={home_illustrations.themestar} style={{ width: "3rem" }} />
            <img src={home_illustrations.menu} style={{ width: "3rem" }} />
          </IconContainer>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
