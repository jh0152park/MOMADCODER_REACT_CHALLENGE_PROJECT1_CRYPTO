import axios from "axios";

export async function getCoinList(URL: string) {
    const response = await axios.get(URL);
    return response.data.slice(0, 100);
}

export async function getCoinDetail(URL: string, coinId: string) {
    const response = await axios.get(URL + coinId);
    return response.data;
}

export async function getCoinPrice(URL: string, coinId: string) {
    const response = await axios.get(URL + coinId);
    return response.data;
}

export async function getCoinPriceHistory(coinId: string) {
    const URL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`;
    const response = await axios.get(URL);
    return response.data;
}
