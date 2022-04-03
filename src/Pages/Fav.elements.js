import { colors } from "../utilities/Colors.js";
import styled from "styled-components";

export const FavContainer = styled.div`
  padding: 0.5rem;
  height: max-content;
`;

export const FavCard = styled.div`
  border: solid 1px ${colors.ivory100};
  margin: 2rem;
  width: 80%;
  height: 20rem;
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
  @media screen and (min-width: 1000px) {
    width: 25%;
  }
`;
