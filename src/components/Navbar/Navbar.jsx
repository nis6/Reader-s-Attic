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
import { Sidebar } from "../BlobMenu/BlobMenu";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  function toggleMenu() {
    setClick(!click);
  }
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Link to="/">
            <NavLogo />
          </Link>
          <Blob>
            {/* <img
              src={home_illustrations.blob}
              alt="blob"
              style={{
                width: "140%",
                position: "absolute",
              }}
            /> */}
            <IconContainer>
              <Button>
                <img
                  src={home_illustrations.themestar}
                  style={{ width: "2.5rem" }}
                />
              </Button>
              <Button onClick={() => toggleMenu}>
                <img
                  src={home_illustrations.menu}
                  alt="Menu Bar"
                  style={{ width: "2.5rem" }}
                />
              </Button>
            </IconContainer>
            {click ? <Sidebar /> : null}
          </Blob>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
