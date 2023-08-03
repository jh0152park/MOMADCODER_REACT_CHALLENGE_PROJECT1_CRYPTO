import { styled } from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 20px;
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
`;

export const CoinList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Coin = styled.li`
    width: 350px;
    height: 70px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.accentColor};
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    a {
        padding: 15px;
        display: block;
        transition: color 0.2s ease-out;
    }

    &:hover {
        /* cursor: pointer; */
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
`;

export const Loading = styled.span`
    text-align: center;
    font-size: 20px;
    display: block;
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const CoinContainer = styled.div`
    width: 330px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
