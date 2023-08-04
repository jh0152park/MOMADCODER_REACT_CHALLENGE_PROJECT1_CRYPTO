export interface ICoinId {
    coinId: string;
}

export interface ICoinPriceHistroy {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
    code: string;
    message: string;
    name: string;
}

// export interface ICoinPriceHistroyError {
//     code: string;
//     message: string;
//     name: string;
// }
