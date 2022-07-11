import styled from "styled-components";
import { colors, defaultTheme } from "../../utilities";

export const NavbarContainer = styled.div`
  background: transparent;
  color: ${defaultTheme.textColor};
  height: 7rem;
  width: 100%;
  display: flex;
  padding-top: 1.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  justify-content: space-between;
`;
export const Blob = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: max-content;
  height: max-content;
  transition: all 0.5s ease-in-out;
`;

export const IconContainer = styled.div`
  position: relative;
  align-self: flex-end;
  padding-right: 1rem;
  padding-top: 1rem;
  text-align: end;
  width: 40vw;
  @media screen and (min-width: 700px) {
    width: 20vw;
  }
  @media screen and (min-width: 1000px) {
    width: 20vw;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0.6rem;
  color: ${colors.grey};
  &:hover {
    color: ${colors.ivory100};
    opacity: 1;
    transition: all 0.3s ease;
  }
`;
//  border: solid 1px white;
//   align-items: flex-end;
