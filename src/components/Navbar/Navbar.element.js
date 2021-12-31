import styled from "styled-components";
import { defaultTheme } from "../../utilities";

console.log("theme loaded+ ", defaultTheme);
export const Nav = styled.nav`
  color: ${defaultTheme.textColor};
  width: 100vw;
  height: 7rem;
  background: ${defaultTheme.bgColor};
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.5rem;
  top: 0;
  z-index: 999;
`;
