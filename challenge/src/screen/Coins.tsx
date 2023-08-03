import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
`;

const CoinList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Coin = styled.li`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.accentColor};
    margin-bottom: 20px;

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

const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
`;

const coins = [
    {
        id: "btc-bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "eth-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        is_new: false,
        is_active: true,
        type: "coin",
    },
    {
        id: "hex-hex",
        name: "HEX",
        symbol: "HEX",
        rank: 3,
        is_new: false,
        is_active: true,
        type: "token",
    },
];

function Coins() {
    return (
        <Wrapper>
            <Header>
                <Title>Coin</Title>
            </Header>

            <CoinList>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} ➡</Link>
                    </Coin>
                ))}
            </CoinList>
        </Wrapper>
    );
}

export default React.memo(Coins);
