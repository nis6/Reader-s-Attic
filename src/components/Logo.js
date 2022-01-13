import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../utilities";
import { home_illustrations } from "../assets";
import Home from "../Pages/Home";

const NavLogo = () => {
  return (
    <NavLink to="/" onClick={Home}>
      <Logo>
        <img src={home_illustrations.logo} style={{ width: "100%" }} />
      </Logo>
    </NavLink>
  );
};

export default NavLogo;
