import styled from "styled-components";
import { style } from "../interfaces/interfaces";

export const Img = styled.img<style>`
    height: ${({ height }) => height ? height : '6.25rem'};
    width:  ${({ width }) => width ? width : '6.25rem'};
    border-radius: 50%;
    border: 4px solid #EEEEEE;
    box-shadow: 5px 3px 4px  #ccccccf0;
    background-color: #FFFFFF;
    
`;

