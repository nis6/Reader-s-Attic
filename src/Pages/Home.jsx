import { Navbar } from "./components";
import { home_illustrations } from "./assets";
import styled from "styled-components";
import { defaultTheme } from "./utilities";
import colors from "./utilities";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
  width: 30rem;
  margin: 3rem;
  margin-left: 12rem;
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
      <TextContainer>
        <MainHeader>
          Reader's A<span style={{ color: colors.indianred }}>T</span>
          <span style={{ color: colors.pine }}>T</span>
          <span style={{ color: colors.marigold }}>I</span>
          <span style={{ color: colors.beige100 }}>C</span>
        </MainHeader>
        <MainText>
          Here’s is your space-ship, takes you to a unique digital space. Where
          you zone <br />
          into a world full of words & tales.
        </MainText>
      </TextContainer>
      <div
        style={{
          width: "90vw",
          position: "absolute",
          bottom: "10vh",
          marginLeft: "-12rem",
        }}
      >
        <img src={home_illustrations.home_illust} style={{ width: "110%" }} />
      </div>
    </div>
  );
};

export default Home;
