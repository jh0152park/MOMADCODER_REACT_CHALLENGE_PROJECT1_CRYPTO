import React from "react";
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
import { ICoinDetail, ICoinPrice } from "./types/CoinType";
import {
    Board,
    Container,
    Description,
    GraphContainer,
    Information,
    SubItems,
    Tab,
    Tabs,
} from "./style/CoinStyle";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { getCoinDetail, getCoinPrice } from "../API";
import { Helmet } from "react-helmet";
import { HeaderNavigation } from "./style/CommonStyle";

const COIN_DETAIL_URL = "https://api.coinpaprika.com/v1/coins/";
const COIN_PRICE_URL = "https://api.coinpaprika.com/v1/tickers/";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation<IRouteState>();

    const { data: detail, isLoading: detailLoading } = useQuery<ICoinDetail>(
        ["detail", coinId],
        () => getCoinDetail(COIN_DETAIL_URL, coinId)
    );

    const { data: price, isLoading: priceLoading } = useQuery<ICoinPrice>(
        ["price", coinId],
        () => getCoinPrice(COIN_PRICE_URL, coinId)
    );

    const loading = detailLoading || priceLoading;
    const isChartMatch = useRouteMatch("/" + coinId + "/chart");
    const isPriceMatch = useRouteMatch("/" + coinId + "/price");

    return (
        <Wrapper>
            <HeaderNavigation>
                <Title>
                    {state?.name
                        ? state?.name
                        : loading
                        ? "Loading..."
                        : detail?.name}
                </Title>
            </HeaderNavigation>

            {loading ? (
                <>
                    <Helmet>
                        <title>Loading...</title>
                    </Helmet>
                    <Loading>Loading...</Loading>
                </>
            ) : (
                <>
                    <Helmet>
                        <title>{state?.name}</title>
                    </Helmet>
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
                                    <p>PRICE</p>
                                    <p>
                                        $ {price?.quotes.USD.price.toFixed(2)}
                                    </p>
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

                    <GraphContainer>
                        <Switch>
                            <Route path={`/${coinId}/chart`}>
                                <Chart coinId={coinId}></Chart>
                            </Route>
                            <Route path={`/${coinId}/price`}>
                                <Price coinId={coinId}></Price>
                            </Route>
                        </Switch>
                    </GraphContainer>
                </>
            )}
        </Wrapper>
    );
}

export default React.memo(Coin);
