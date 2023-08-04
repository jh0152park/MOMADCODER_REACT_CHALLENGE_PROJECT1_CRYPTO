import { useRouteMatch } from "react-router-dom";
import {
    Board,
    PriceBoard,
    PriceInfo,
    SubTitle,
    Wrapper,
} from "./style/PriceStyle";
import { ICoinPrice } from "./types/CoinType";

function Price({ data }: { data: ICoinPrice }) {
    const upArrow = "↑";
    const downArrow = "↓";

    const ATH_date = data.quotes.USD.ath_date.split("T")[0];
    const ATH_price = data.quotes.USD.ath_price.toFixed(2);
    const _1hAgo = data.quotes.USD.percent_change_1h;
    const _6hAgo = data.quotes.USD.percent_change_6h;
    const _12hAgo = data.quotes.USD.percent_change_12h;
    const _24hAgo = data.quotes.USD.percent_change_24h;
    const _7dAgo = data.quotes.USD.percent_change_7d;
    const _30dAgo = data.quotes.USD.percent_change_30d;

    console.log("price data");
    console.log(data);

    return (
        <Wrapper>
            <PriceBoard>
                <Board>
                    <SubTitle>All time high at {ATH_date}</SubTitle>
                    <PriceInfo plus={+ATH_price > 0}>
                        <span>$ {ATH_price}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 1 hour ago</SubTitle>
                    <PriceInfo plus={_1hAgo > 0}>
                        <span>{_1hAgo}%</span>
                        <span>{_1hAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 6 hours ago</SubTitle>
                    <PriceInfo plus={_6hAgo > 0}>
                        <span>{_6hAgo}%</span>
                        <span>{_6hAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 12 hours ago</SubTitle>
                    <PriceInfo plus={_12hAgo > 0}>
                        <span>{_12hAgo}%</span>
                        <span>{_12hAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 24 hours ago</SubTitle>
                    <PriceInfo plus={_24hAgo > 0}>
                        <span>{_24hAgo}%</span>
                        <span>{_24hAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 7 days ago</SubTitle>
                    <PriceInfo plus={_7dAgo > 0}>
                        <span>{_7dAgo}%</span>
                        <span>{_7dAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
                <Board>
                    <SubTitle>Compared to 30 days ago</SubTitle>
                    <PriceInfo plus={_30dAgo > 0}>
                        <span>{_30dAgo}%</span>
                        <span>{_30dAgo > 0 ? upArrow : downArrow}</span>
                    </PriceInfo>
                </Board>
            </PriceBoard>
        </Wrapper>
    );
}

export default Price;
