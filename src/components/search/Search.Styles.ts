import styled from "styled-components";

export const sidebar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 76%;
    > h1{
    font-size: 2.5rem;
    font-weight: 700;
    }
    ${props => props.theme.breakpoints.xs} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;

export const contIcon=styled.div`
    display: flex;
    flex-direction: row;
    align-items: last first baseline;
    justify-content: center;
    font-size: 1.5rem;
    gap: .5rem;
    cursor: pointer;

    .icon{
        font-size: 3rem;
        ${props => props.theme.breakpoints.xs} {
            font-size: 6rem;
        }
    }
`;
