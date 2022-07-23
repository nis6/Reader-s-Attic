import styled from "styled-components";
import { defaultTheme } from "../utilities";
import { home_illustrations } from "../assets";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 6rem;
  width: 30rem;
  margin-left: 8rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
  @media screen and (max-width: 780px) {
    /* align-self: center;
     width: 80%;
    height: max-content;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem;
    padding: 1rem; */
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 550px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-self: center;
    margin: 0 3rem;
    padding: 0 3rem;
  }
`;

export const MainHeader = styled.div`
  z-index: 9;
  font-size: 5rem;
  @media screen and (max-width: 780px) {
    /* margin: 1rem 0;
    flex-basis: 30%; */
    grid-row: 1 / span 2;
    grid-column: 1 / span 1;
  }
  @media screen and (max-width: 380px) {
    font-size: 5rem;
  }
`;
export const MainText = styled.div`
  z-index: 9;
  font-size: 1.3rem;
  font-family: ${defaultTheme.SecondaryFont};
  line-height: 190%;
  word-spacing: normal;
  letter-spacing: normal;
  @media screen and (max-width: 780px) {
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 380px) {
  }
`;

export const Illustration = styled.div`
  width: 85vw;
  height: 30rem;
  background-image: url(${home_illustrations.mobile_illustra});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  @media (min-width: 700px) {
    background-image: url(${home_illustrations.tab_illustra});
    margin-left: 0rem;
    width: 90vw;
    margin-top: 2rem;
  }
  @media (min-width: 800px) {
    background-image: url(${home_illustrations.home_illustra});
    position: absolute;
    margin-left: 0rem;
    top: 7vh;
  }
`;
