import styled from "styled-components"

export const container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 4.375rem;
    width: 100%;
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