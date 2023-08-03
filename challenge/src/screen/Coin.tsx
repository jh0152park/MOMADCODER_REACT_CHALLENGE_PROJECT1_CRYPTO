import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header, Loading, Title, Wrapper } from "./style/CoinsStyle";
import { ICoinDetail, ICoinPrice, IRouteState } from "./types/CoinsType";
import axios from "axios";

const COIN_DETAIL_URL = "https://api.coinpaprika.com/v1/coins/";
const COIN_PRICE_URL = "https://api.coinpaprika.com/v1/tickers/";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation<IRouteState>();

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState<ICoinDetail>();
    const [price, setPrice] = useState<ICoinPrice>();

    async function getCoinDetail(coinId: string) {
        const response = await axios.get(COIN_DETAIL_URL + coinId);
        setDetail(response.data);
    }

    async function getCoinPrice(coinId: string) {
        const response = await axios.get(COIN_PRICE_URL + coinId);
        setPrice(response.data);
    }

    useEffect(() => {
        if (state) {
            setLoading(false);
        }

        getCoinDetail(coinId);
        getCoinPrice(coinId);
    }, []);
    //sudden attack!
    return (
        <Wrapper>
            <Header>
                <Title>{state?.name || "Not Exist"}</Title>
            </Header>

            {loading ? <Loading>Loading...</Loading> : null}
        </Wrapper>
    );
}

export default React.memo(Coin);
