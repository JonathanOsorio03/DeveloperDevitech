import styled from "styled-components";

export const sidebar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
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
    .icon{
        font-size: 3rem;
    }
`;
