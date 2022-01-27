import styled from "styled-components";
import { defaultTheme } from "../utilities";
import { home_illustrations } from "../assets";
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 6rem;
  width: 30rem;
  margin-left: 8rem;
  padding-left: 2rem;
  padding-bottom: 3rem;
  @media (max-width: 780px) {
    width: 90vw;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem;
    padding: 1rem;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
    align-self: center;
    margin: 0 3rem;
  }
`;

export const MainHeader = styled.div`
  z-index: 9;
  font-size: 6rem;
  @media screen and (max-width: 780px) {
    padding-left: 3rem;
    padding-right: 1rem;
    margin: 1rem 0;
    flex-basis: 30%;
  }
  @media screen and (max-width: 380px) {
    padding: 0 2rem;
    font-size: 5rem;
  }
`;
export const MainText = styled.div`
  z-index: 9;
  font-size: 1.2rem;
  font-family: ${defaultTheme.SecondaryFont};
  line-height: 190%;
  word-spacing: normal;
  letter-spacing: normal;
  @media screen and (max-width: 780px) {
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 380px) {
    padding: 0 2rem;
  }
`;
export const Illustration = styled.div`
  width: 95vw;
  height: 30rem;
  background-image: url(${home_illustrations.mobile_illustra});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  @media (min-width: 700px) {
    background-image: url(${home_illustrations.tab_illustra});
    margin-left: 0rem;
    width: 100vw;
    position: static;
    margin-top: 2rem;
  }
  @media (min-width: 800px) {
    background-image: url(${home_illustrations.home_illustra});
    position: absolute;
    margin-left: 0rem;
    top: 7vh;
  }
`;
