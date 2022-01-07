import { PrimaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme } from "./theme";
import { createGlobalStyle } from "styled-components";

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
        background: ${defaultTheme.bgColor};
        color: ${defaultTheme.textColor};
        font-family: ${PrimaryFont};
    }
`;
