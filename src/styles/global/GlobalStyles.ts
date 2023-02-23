import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body{
        font-family: 'Raleway';
        color: var(--color-tertiary);
        user-select: none;
    }
    input {
    outline: none
    }
    * {
        margin: 0;
        padding: 0;
    }
ul,ol,li{
        list-style: none;
}
a{
    text-decoration:none;
    color: #291507;
}
html{
        font-size: 16px;
        ${props => props.theme.breakpoints.xl4} {
            font-size: 15px;
        }
        ${props => props.theme.breakpoints.xl3} {
            font-size: 14px;
        }
        ${props => props.theme.breakpoints.xl} {
            font-size: 12px;
        }
        ${props => props.theme.breakpoints.xxs} {
            font-size: 10px;
        }
    }

`;