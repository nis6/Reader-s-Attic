import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { colors } from "../utilities/Colors.js";
import Socials from "./../components/socials.jsx";
import { home_illustrations } from "../assets/index.js";
import styled from "styled-components";
export const FavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding-bottom: 5vh;
  gap: 5vw, 3vh;
`;

export const FavCard = styled.div`
  height: 40vh;
  width: 25vw;
  border: solid 1px ${colors.ivory100};
  margin: 3rem;
`;
