import React from "react";
import { home_illustrations } from "../assets";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar.jsx";
import { defaultTheme, colors } from "../utilities";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
  width: 30rem;
  margin: 3rem;
  margin-left: 12rem;
  padding-bottom: 5rem;
`;

const MainHeader = styled.div`
  font-size: 7rem;
`;
const MainText = styled.div`
  font-size: 1.4rem;
  font-family: ${defaultTheme.SecondaryFont};
  line-height: 200%;
  word-spacing: normal;
  letter-spacing: normal;
`;
const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "8vh",
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
            Here is your space-ship, takes you to a unique digital space. Where
            you zone <br />
            into a world full of words & tales.
          </MainText>
        </TextContainer>
        <div
          style={{
            width: "90vw",
            position: "relative",
            bottom: "25vh",
            marginLeft: "-5rem",
          }}
        >
          <img
            src={home_illustrations.home_illustra}
            style={{ width: "110%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
