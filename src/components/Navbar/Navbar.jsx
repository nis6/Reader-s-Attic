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
            <img
              src={home_illustrations.blob}
              alt="blob"
              style={{
                width: "140%",
                position: "absolute",
              }}
            />
            <IconContainer>
              <Button>
                <img
                  src={home_illustrations.themestar}
                  style={{ width: "2.5rem" }}
                />
              </Button>
              <Button onClick={() => toggleMenu()}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_80_1143)">
                    <g filter="url(#filter0_d_80_1143)">
                      <path
                        d="M0 8.64001V10.7025H45V8.64001H0ZM0 24.1088V26.1713H45V24.1088H0ZM0 39.5775V41.64H45V39.5775H0Z"
                        fill="#F5F9E9"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_80_1143"
                      x="-4"
                      y="8.64001"
                      width="53"
                      height="41"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_80_1143"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_80_1143"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_80_1143">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </IconContainer>
            {click ? <Sidebar /> : ""}
          </Blob>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
