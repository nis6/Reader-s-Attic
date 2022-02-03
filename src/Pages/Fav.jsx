import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { home_illustrations } from "../assets/index.js";
import { SearchComponent } from "./Search.element";
import { defaultTheme } from "../utilities/theme.js";
import styled from "styled-components";
import { colors } from "../utilities/Colors.js";
import { Center } from "../utilities/Global.js";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { FavCard, FavContainer } from "./Fav.elements.js";

const Fav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: `solid 1px ${colors.ivory100}`,
      }}
    >
      <Navbar />
      <Center>
        <p style={{ fontSize: defaultTheme.typeScale.header2 }}>
          Fav<span style={{ color: colors.indianred }}>o</span>
          <span style={{ color: colors.pine }}>u</span>
          <span style={{ color: colors.marigold }}>r</span>ites
        </p>
      </Center>
      <FavContainer>
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </FavContainer>
    </div>
  );
};

export default Fav;
