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
        }
    }
`;
