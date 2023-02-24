import styled from "styled-components";

export const ContInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 2.5rem;
    width: 15rem;
    border: none;
    border-radius: 30px;
    background-color: var(--color-secondary);
    padding: 0.5rem;
    ${props => props.theme.breakpoints.xs} {
        height: 2.5rem;
        width: 22rem;
        padding: .1rem;
    }
`;
export const Input = styled.input`
    background-color: var(--color-secondary);
    border: none;
    font-size: 1rem;
    width: 80%;
    background-color: red;
    ::placeholder{
        font-size: 1rem;
        font-weight: 500;
        background-color: var(--color-secondary);
    }
    
`;    