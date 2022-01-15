import React from "react";
import { Logo } from "../utilities";
import { home_illustrations } from "../assets";

const NavLogo = () => {
  return (
    <Logo>
      <img src={home_illustrations.logo} style={{ width: "100%" }} />
    </Logo>
  );
};

export default NavLogo;
