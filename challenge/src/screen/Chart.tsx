import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import { getCoinPriceHistory } from "../API";
import { ICoinPriceHistroy } from "./types/ChartType";
import { Wrapper } from "./style/ChartStyle";
import ApexChart from "react-apexcharts";

function Chart({ coinId }: { coinId: string }) {
    const isMatch = useRouteMatch("/" + coinId + "/chart");
    const { data, isLoading } = useQuery<ICoinPriceHistroy>(
        [coinId, "priceHistory"],
        () => getCoinPriceHistory(coinId)
    );

    console.log(data);

    return (
        <Wrapper>
            {isLoading ? (
                "Loading the chart..."
            ) : (
                <ApexChart
                    type="line"
                    width={500}
                    height={300}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                    }}
                    series={[
                        {
                            data: [1, 2, 3, 4, 5],
                            name: "hello",
                        },
                        {
                            data: [11, 21, 31, 41, 51],
                            name: "world",
                        },
                    ]}
                ></ApexChart>
            )}
        </Wrapper>
    );
}

export default Chart;
