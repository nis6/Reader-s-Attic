import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { colors } from "../utilities";
import { IconContext } from "react-icons";
import { defaultTheme } from "./../utilities/theme";

const SearchBarContainer = styled.div`
  display: -webkit-flex;
  align-items: center;
  background-color: ${colors.ivory100};
  margin-top: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 1.3rem;
  width: 100%;
  &:hover {
    border: ${colors.ivory200} solid 1px;
  }
`;

const SearchButton = styled.button`
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
const Input = styled.input`
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
const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Search here" />
      <SearchButton>
        <BsSearch size="1.5rem" />
      </SearchButton>
    </SearchBarContainer>
  );
};
export default SearchBar;
