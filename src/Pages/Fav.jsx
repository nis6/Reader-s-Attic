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
import ResultCard from "../components/ResultCards.jsx";

const Fav = () => {
  const para = `When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity.`;
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: `solid 1px ${colors.ivory100}`,
        }}
      >
        <Center>
          <p style={{ fontSize: defaultTheme.typeScale.header2 }}>
            Fav<span style={{ color: colors.indianred }}>o</span>
            <span style={{ color: colors.pine }}>u</span>
            <span style={{ color: colors.marigold }}>r</span>ites
          </p>
        </Center>
        <FavContainer>
          <ResultCard
            summary={para}
            author=" Hanya Yanagihara"
            title="A Little Life"
            image={home_illustrations.bookimg}
          />
          <ResultCard
            summary={para}
            author=" Hanya Yanagihara"
            title="A Little Life"
            image={home_illustrations.bookimg}
          />
          <ResultCard
            summary={para}
            author=" Hanya Yanagihara"
            title="A Little Life"
            image={home_illustrations.bookimg}
          />
          <ResultCard
            summary={para}
            author=" Hanya Yanagihara"
            title="A Little Life"
            image={home_illustrations.bookimg}
          />
          <FavCard />
        </FavContainer>
      </div>
    </div>
  );
};

export default Fav;
