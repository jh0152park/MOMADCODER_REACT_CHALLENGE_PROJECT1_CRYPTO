import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
    Coin,
    CoinContainer,
    CoinList,
    CoinListContainer,
    Header,
    Loading,
    Logo,
    Title,
    Wrapper,
} from "./style/CoinsStyle";
import { ICoin } from "./types/CoinsType";
import { useQuery } from "react-query";
import { getCoinList } from "../API";
import { HeaderNavigation } from "./style/CommonStyle";

const URL = "https://api.coinpaprika.com/v1/coins";
const LOGO_URL = "https://coinicons-api.vercel.app/api/icon/";

function Coins() {
    const { data: coins, isLoading: loading } = useQuery<ICoin[]>("coins", () =>
        getCoinList(URL)
    );

    return (
        <Wrapper>
            <HeaderNavigation>
                <Title>Crypto Coins</Title>
            </HeaderNavigation>

            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <CoinListContainer>
                    <CoinList>
                        {coins?.map((coin) => (
                            <Coin key={coin.id}>
                                <Link
                                    to={{
                                        pathname: `/${coin.id}`,
                                        state: {
                                            name: coin.name,
                                        },
                                    }}
                                >
                                    <CoinContainer>
                                        <Logo
                                            src={`${LOGO_URL}${coin.symbol.toLowerCase()}`}
                                        ></Logo>
                                        {coin.name}
                                    </CoinContainer>
                                </Link>
                            </Coin>
                        ))}
                    </CoinList>
                </CoinListContainer>
            )}
        </Wrapper>
    );
}

export default React.memo(Coins);
