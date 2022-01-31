import { PrimaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme } from "./theme";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size:12px;
        box-sizing: border-box;
        margin:0;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
    display: none;
}
    *, *:before, *:after{
        box-sizing: border-box;
    }
    svg {
    pointer-events: none;
}
    body{
        margin:0;
        background: ${defaultTheme.bgColor};
        color: ${defaultTheme.textColor};
        font-family: ${PrimaryFont};
    }
    @media (min-width: 1000px) {
          html{
            font-size: 16px;
          }    
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Logo = styled.div`
  width: 9rem;
  height: 7rem;
  margin-bottom: 0;
  padding: 0;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export default GlobalStyle;
