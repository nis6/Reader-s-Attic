import styled from "styled-components";

export const SearchComponent = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 8vh;
  position: relative;
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
