import styled from "styled-components";
import { colors } from "../utilities";
import { defaultTheme } from "../utilities/theme";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  @media (max-width: 500px) {
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  background-color: ${colors.ivory100};
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 1.3rem;
  width: 70%;
  &:hover {
    border: solid ${colors.beige100} 1px;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  color: ${colors.mainblue};
  padding: 0 0.2rem;
  margin: 0;
  border: none;
  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease;
  }
`;

export const Input = styled.input`
  padding: 0 0.4rem;
  flex-basis: 100%;
  border: none;
  height: 100%;
  font-size: ${defaultTheme.typeScale.header5};
  background: ${colors.ivory100};
  color: ${colors.mainblue};
  font-family: ${defaultTheme.SecondaryFont};
  &:focus {
    outline: none;
  }
`;
