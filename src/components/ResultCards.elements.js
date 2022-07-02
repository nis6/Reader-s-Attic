import { colors } from "../utilities/Colors.js";
import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: grid;
  position: relative;
  height: 18rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 1rem 2rem;
  gap: 0.4rem 2rem;
  border: solid 1px ${colors.ivory100};
  margin: 2rem;
  width: 90%;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  align-self: end;
  @media (max-width: 500px) {
    grid-column: 1 / span 2;
  }
`;

export const Preview = styled.button`
  align-self: start;
  width: 50%;
  background: transparent;
  border: solid 1px ${colors.ivory200};
  border-radius: 0.7rem;
  padding: 0.5rem 0.1rem;
  color: ${colors.ivory200};
  &:hover {
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
  &:active {
    padding: 0.6rem 0.3rem;
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
  &:focus {
    padding: 0.6rem 0.3rem;
    border-color: ${colors.ivory100};
    color: ${colors.ivory100};
  }
`;

export const BookmarkButton = styled.button`
  position: absolute;
  right: 1rem;
  top: -0.1rem;
  color: ${colors.beige200};
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  &:hover {
    color: ${colors.ivory100};
    transform: scale(1.1);
    transform: translateY(5px);
  }
  &:active {
    color: ${colors.indianred};
  }
  &:focus {
    color: ${colors.indianred};
  }
`;

export const BookmarkButtonFilled = styled.button`
  position: absolute;
  right: 1rem;
  top: -0.1rem;
  color: ${colors.indianred};
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const Summary = styled.div`
  color: ${colors.ivory200};
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 90%;
`;
