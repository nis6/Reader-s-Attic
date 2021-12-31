import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size:16px;
        box-sizing: border-box;
        margin:0;
    }
    *, *:before, *:after{
        box-sizing: border-box;
    }
    body{
        margin:0;
        font-family: ${PrimaryFont};
        background:${defaultTheme.bgColor};
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;
