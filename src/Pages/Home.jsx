import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { colors } from "../utilities/Colors.js";
import Socials from "./../components/socials.jsx";
import { home_illustrations } from "../assets/index.js";
import {
  TextContainer,
  MainHeader,
  MainText,
  Illustration,
} from "./Home.element.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <TextContainer>
          <MainHeader>
            Reader's A<span style={{ color: colors.indianred }}>T</span>
            <span style={{ color: colors.pine }}>T</span>
            <span style={{ color: colors.marigold }}>I</span>
            <span style={{ color: colors.beige100 }}>C</span>
          </MainHeader>
          <MainText>
            Here is your space-ship, takes you to a <br />
            unique digital space. Where you zone <br /> into a world full of
            words & tales.
          </MainText>
          <Socials />
        </TextContainer>

        <Illustration />
      </div>
    </div>
  );
};

export default Home;
