import styled from "styled-components";

export const Button = styled.button`
    padding: 5px;
    cursor: pointer;
`;

export const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    cursor: default;
`;

export const ModalDialog = styled.div`
    background-color: white;
    width: 30%;
    min-width: 400px;
    border-radius: 5px;
    position: relative;
    padding: 40px 16px 16px 16px;
    height: 50%;
    overflow: scroll;
`;

export const ButtonClose = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: .5rem;
    cursor: pointer;
`;