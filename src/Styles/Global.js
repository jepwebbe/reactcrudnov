import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
}
body {
    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.onBackground};
    max-width: 100vw;
    margin: 0 auto;
}
`