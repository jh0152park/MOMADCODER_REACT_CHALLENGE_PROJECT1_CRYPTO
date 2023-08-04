import { styled } from "styled-components";

export const HeaderNavigation = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    background-color: ${(props) => props.theme.backgroundColor};
    z-index: 99;
    position: fixed;
    border-bottom: 1px solid ${(props) => props.theme.accentColor};

    h1 {
        margin: 0px 20px;
    }

    span {
        &:hover {
            cursor: pointer;
            scale: 1.1;
        }
        font-size: 40px;
    }
`;

export const Back = styled.span`
    position: absolute;
    left: 20px;
`;

export const ThemaButton = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    color: ${(props) => props.theme.accentColor};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.accentColor};
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`;
