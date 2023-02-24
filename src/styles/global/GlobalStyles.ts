import styled, { createGlobalStyle } from 'styled-components';

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
    background-color: var(--color-primary);

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
export const container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 4.375rem;
`
export const cards=styled.div`
    display:grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 3rem;
    cursor: pointer;
    ${props => props.theme.breakpoints.md} {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    ${props => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
    }
`