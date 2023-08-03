import React from "react";
import { useParams } from "react-router-dom";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>();
    console.log(coinId);

    return <h1>Coin</h1>;
}

export default React.memo(Coin);
