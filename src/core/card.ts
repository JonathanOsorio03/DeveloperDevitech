import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    height: 200px;
    width: 350px;
    border-radius: 10px;
    box-shadow: 3px 2px 3px  #8b87875e;
    margin: 5px;
    padding: 5px;
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