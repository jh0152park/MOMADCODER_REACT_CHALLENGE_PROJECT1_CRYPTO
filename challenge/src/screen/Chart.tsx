import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import { getCoinPriceHistory } from "../API";

function Chart({ coinId }: { coinId: string }) {
    const isMatch = useRouteMatch("/" + coinId + "/chart");
    const { data, isLoading } = useQuery([coinId, "priceHistory"], () =>
        getCoinPriceHistory(coinId)
    );

    return <h1>Chart</h1>;
}

export default Chart;
