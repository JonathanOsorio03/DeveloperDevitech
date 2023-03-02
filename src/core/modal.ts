import styled from "styled-components";

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .containerModal{
        display: flex;
        justify-content: center;
        width:100%;
        gap: 2rem;
    }

    .containerButton{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        
        >button{
            width: 50px;
            height: 50px;
            border-radius: 30px;
            cursor: pointer;
            border: none;
        }
    }

    .phonebutton{
        color: white;
        background-color: blue;
    }
    .whpbutton{
        color: white;
        background-color: green;
    }
    .emailbutton{
        color: white;
        background-color: red;
    }

`;