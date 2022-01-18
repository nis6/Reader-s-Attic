import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import { home_illustrations } from "../../assets";

export const Nav = styled.nav`
  position: relative;
  color: ${defaultTheme.textColor};
  width: 100vw;
  height: 7rem;
  background: ${defaultTheme.bgColor};
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  background: ${defaultTheme.bgColor};
  height: 7rem;
  width: 100%;
  display: flex;
  padding-top: 1.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  width: 7rem;
  height: 2.5rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const Blob = styled.div`
  position: absolute;
  top: -2rem;
  right: -5rem;
  width: 70vw;
  height: 25vh;
  background-image: url(${home_illustrations.blob});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.6;
  @media screen and (min-width: 700px) {
    width: 40vw;
    height: 20vh;
  }
  @media screen and (min-width: 1000px) {
    right: -20%;
    width: 40vw;
    height: 30vh;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;
