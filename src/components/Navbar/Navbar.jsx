import React from "react";
import { IoBookSharp, IoBookOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { IconContext } from "react-icons";
import { NavbarContainer, IconContainer, Blob, Button } from "./Navbar.element";
import { home_illustrations } from "../../assets";
import NavLogo from "../Logo.jsx";
import { Link } from "react-router-dom";
import { Sidebar } from "./BlobMenu";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function toggleMenu() {
    setClick(!click);
  }

  return (
    <div>
      <NavbarContainer>
        <Link to="/">
          <NavLogo />
        </Link>
        <Blob>
          <img
            src={home_illustrations.blob}
            alt="blob"
            style={{
              width: "140%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
          <IconContainer>
            <IconContext.Provider value={{ size: "2rem", strokeWidth: "0.3" }}>
              {/* <Button> 
                  <BsBookmarkHeartFill size="2rem" />
                </Button> */}
              <Button onClick={() => toggleMenu()}>
                {click ? <IoBookOutline /> : <IoBookSharp />}
              </Button>
            </IconContext.Provider>
          </IconContainer>
          {click ? <Sidebar /> : ""}
        </Blob>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
