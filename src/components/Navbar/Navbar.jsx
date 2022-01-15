import React from "react";
import { Nav, NavbarContainer, IconContainer } from "./Navbar.element";
import { home_illustrations } from "../../assets";
import NavLogo from "../Logo.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Link to="/">
            <NavLogo />
          </Link>
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
