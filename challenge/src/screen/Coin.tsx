import React, { useEffect, useState } from "react";
import {
    Link,
    Route,
    Switch,
    useLocation,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { Header, Loading, Title, Wrapper } from "./style/CoinsStyle";
import { IRouteState } from "./types/CoinsType";
import axios from "axios";
import { ICoinDetail, ICoinPrice } from "./types/CoinType";
import {
    Board,
    Container,
    Description,
    Information,
    SubItems,
    Tab,
    Tabs,
} from "./style/CoinStyle";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { getCoinDetail, getCoinPrice } from "../API";

const COIN_DETAIL_URL = "https://api.coinpaprika.com/v1/coins/";
const COIN_PRICE_URL = "https://api.coinpaprika.com/v1/tickers/";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation<IRouteState>();

    const { data: detail, isLoading: detailLoading } = useQuery<ICoinDetail>(
        "detail",
        () => getCoinDetail(COIN_DETAIL_URL, coinId)
    );

    const { data: price, isLoading: priceLoading } = useQuery<ICoinPrice>(
        "price",
        () => getCoinPrice(COIN_PRICE_URL, coinId)
    );

    const loading = detailLoading || priceLoading;
    const isChartMatch = useRouteMatch("/" + coinId + "/chart");
    const isPriceMatch = useRouteMatch("/" + coinId + "/price");

    return (
        <Wrapper>
            <Header>
                <Title>
                    {state?.name
                        ? state?.name
                        : loading
                        ? "Loading..."
                        : detail?.name}
                </Title>
            </Header>

            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <>
                    <Container>
                        <Information>
                            <Board>
                                <SubItems>
                                    <p>RANK</p>
                                    <p>{detail?.rank}</p>
                                </SubItems>
                                <SubItems>
                                    <p>SYMBOL</p>
                                    <p>{detail?.symbol}</p>
                                </SubItems>
                                <SubItems>
                                    <p>TYPE</p>
                                    <p>{detail?.type}</p>
                                </SubItems>
                            </Board>
                            <Description>{detail?.description}</Description>
                            <Board>
                                <SubItems>
                                    <p>MAX SUPPLY</p>
                                    <p>{price?.max_supply}</p>
                                </SubItems>
                                <SubItems>
                                    <p>CIRCULATING SUPPLY</p>
                                    <p>{price?.circulating_supply}</p>
                                </SubItems>
                                <SubItems>
                                    <p>TOTAL SUPPLY</p>
                                    <p>{price?.total_supply}</p>
                                </SubItems>
                            </Board>
                            <Tabs>
                                <Tab
                                    isActive={
                                        isChartMatch === null ? false : true
                                    }
                                >
                                    <Link to={`/${coinId}/Chart`}>Chart</Link>
                                </Tab>
                                <Tab
                                    isActive={
                                        isPriceMatch === null ? false : true
                                    }
                                >
                                    <Link to={`/${coinId}/price`}>Price</Link>
                                </Tab>
                            </Tabs>
                        </Information>
                    </Container>

                    <Switch>
                        <Route path={`/${coinId}/chart`}>
                            <Chart coinId={coinId}></Chart>
                        </Route>
                        <Route path={`/${coinId}/price`}>
                            <Price coinId={coinId}></Price>
                        </Route>
                    </Switch>
                </>
            )}
        </Wrapper>
    );
}

export default React.memo(Coin);
