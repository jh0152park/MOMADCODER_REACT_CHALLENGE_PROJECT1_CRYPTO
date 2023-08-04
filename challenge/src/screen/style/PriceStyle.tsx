import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const PriceBoard = styled.div`
    width: 450px;
    margin-top: 15px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    div:first-child {
        grid-column: span 2;
    }
`;

export const Board = styled.div`
    height: 100px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.boardColor};
    padding: 10px;
`;

export const SubTitle = styled.div`
    width: 100%;
    color: ${(props) => props.theme.fontColor};
    font-size: 15px;
`;

export const PriceInfo = styled.div<{ plus: boolean }>`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: ${(props) =>
        props.plus ? props.theme.upRed : props.theme.downGreen};
`;
