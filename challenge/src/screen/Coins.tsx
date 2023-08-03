import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
    Coin,
    CoinContainer,
    CoinList,
    Header,
    Loading,
    Logo,
    Title,
    Wrapper,
} from "./style/CoinsStyle";
import { ICoin } from "./types/CoinsType";

const URL = "https://api.coinpaprika.com/v1/coins";
const LOGO_URL = "https://coinicons-api.vercel.app/api/icon/";

function Coins() {
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [loading, setLoading] = useState(true);

    async function getCoinList() {
        const response = await axios.get(URL);
        setCoins(response.data.slice(0, 100));
        setLoading(false);
    }

    useEffect(() => {
        getCoinList();
    }, []);

    return (
        <Wrapper>
            <Header>
                <Title>Crypto Coins</Title>
            </Header>

            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>
                                <CoinContainer>
                                    <Logo
                                        src={`${LOGO_URL}${coin.symbol.toLowerCase()}`}
                                    ></Logo>
                                    {coin.name} ➡
                                </CoinContainer>
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Wrapper>
    );
}

export default React.memo(Coins);
