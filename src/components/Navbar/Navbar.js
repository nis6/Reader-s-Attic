import React from "react";
import { GlobalStyle } from "../../utilities";
import { Nav } from "./Navbar.element";

const Navbar = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav>Search</Nav>
    </div>
  );
};

export default Navbar;
