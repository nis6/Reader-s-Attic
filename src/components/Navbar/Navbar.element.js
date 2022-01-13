import styled from "styled-components";
import { defaultTheme } from "../../utilities";

export const Nav = styled.nav`
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
  height: 3rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
