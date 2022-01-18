import React from "react";
import {
  Nav,
  NavbarContainer,
  IconContainer,
  Blob,
  Button,
} from "./Navbar.element";
import { home_illustrations } from "../../assets";
import NavLogo from "../Logo.jsx";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Link to="/">
            <NavLogo />
          </Link>
          <IconContainer>
            <Button Button>
              <img
                src={home_illustrations.themestar}
                style={{ width: "2.5rem" }}
              />
            </Button>
            <Button>
              <img src={home_illustrations.menu} style={{ width: "2.5rem" }} />
            </Button>
          </IconContainer>
        </NavbarContainer>
        <Blob />
      </Nav>
    </div>
  );
};

export default Navbar;
