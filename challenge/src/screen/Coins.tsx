import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Coin,
    CoinList,
    Header,
    Loading,
    Title,
    Wrapper,
} from "./style/CoinsStyle";
import { ICoin } from "./types/CoinsType";

const URL = "https://api.coinpaprika.com/v1/coins";

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
                <Title>Coin</Title>
            </Header>

            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>{coin.name} ➡</Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Wrapper>
    );
}

export default React.memo(Coins);
