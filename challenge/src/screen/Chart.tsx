import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import { getCoinPriceHistory } from "../API";
import { ICoinPriceHistroy } from "./types/ChartType";
import { Wrapper } from "./style/ChartStyle";
import ApexChart from "react-apexcharts";
import { useEffect, useState } from "react";

function Chart({ coinId }: { coinId: string }) {
    const { data, isLoading } = useQuery<ICoinPriceHistroy[]>(
        [coinId, "priceHistory"],
        () => getCoinPriceHistory(coinId)
    );

    const [error, setError] = useState(false);

    useEffect(() => {
        if (isLoading) {
            if (data === "error") {
                setError(true);
            }
        }
    }, [data, isLoading]);

    console.log(typeof data);

    return (
        <Wrapper>
            {isLoading ? (
                "Loading the chart..."
            ) : error ? (
                "Price data not found."
            ) : typeof data === "object" && data !== undefined ? (
                <ApexChart
                    type="line"
                    width={500}
                    height={350}
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
                            type: "datetime",
                            categories: data?.map(
                                // (history) => new Date(history.time_open)
                                (history) => history.time_close
                            ),
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["blue"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["yellow"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`,
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
            ) : (
                "Price data not found."
            )}
        </Wrapper>
    );
}

export default Chart;
