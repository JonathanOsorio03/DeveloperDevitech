import styled from "styled-components";
import { interfacesAvatar } from "../interfaces/interfaces";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    height: 12.5rem;
    width: 21.875rem;
    border-radius: 10px;
    box-shadow: 3px 2px 3px  #8b87875e;
    margin: 0.313rem;
    padding: 0.313rem;
    gap: 1rem;
    transition-duration: .5s;
    transition-timing-function: ease;
    :hover{
        transform: scale(1.10);
    }

    .ContText{
    display: flex;
    flex-direction: column;
    gap: .2rem;
    >h2{
        font-size: 1.5rem;
        font-weight: 700;
    }
    >h4{
        font-size: 1rem;
        font-weight: 500;
        color: #919191ad;
    }
}
    .contImgButt{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center ;
    width:100%;
    gap: 1rem;
}
`;
export const Avatar=styled.div<interfacesAvatar>`
    position: relative;
    filter: ${({backgroundColor})=>backgroundColor==="black"?"grayscale(1)":"none"};
        ::before{
        content: "";
        position: absolute;
        top: .1rem;
        right: .5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: ${({backgroundColor})=>backgroundColor};
        border-radius: 50%;
        border: 1px solid var(--color-secondary);
    }
`;