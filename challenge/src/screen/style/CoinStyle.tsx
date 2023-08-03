import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Information = styled.div`
    width: 700px;
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

export const SubItems = styled.div`
    text-align: center;

    p:first-child {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

export const Description = styled.p`
    width: 100%;
    margin: 40px 0px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const Tabs = styled.div`
    width: 100%;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Tab = styled.div`
    padding: 10px 0px;
    text-align: center;
    background-color: ${(props) => props.theme.boardColor};
    width: 45%;
    border-radius: 10px;
    a {
        display: block;
        &:hover {
            color: ${(props) => props.theme.accentColor};
            transition: color 0.2s ease-out;
        }
    }
`;
