import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Information = styled.div`
    width: 700px;
    height: 500px;
    overflow: hidden;
    box-sizing: border-box;
    /* background-color: whitesmoke; */
`;

export const Board = styled.div`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.boardColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`;

export const SubItems = styled.div``;
