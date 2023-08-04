import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import { getCoinPriceHistory } from "../API";
import { ICoinPriceHistroy } from "./types/ChartType";
import { Wrapper } from "./style/ChartStyle";
import ApexChart from "react-apexcharts";

function Chart({ coinId }: { coinId: string }) {
    const isMatch = useRouteMatch("/" + coinId + "/chart");
    const { data, isLoading } = useQuery<ICoinPriceHistroy[]>(
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
                        stroke: {
                            curve: "smooth",
                            width: 3,
                        },
                        chart: {
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            labels: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            axisBorder: {
                                show: true,
                            },
                        },
                    }}
                    series={[
                        {
                            data: data?.map((history) =>
                                parseFloat(history.close)
                            ) as number[],
                            name: "price",
                        },
                    ]}
                ></ApexChart>
            )}
        </Wrapper>
    );
}

export default Chart;
