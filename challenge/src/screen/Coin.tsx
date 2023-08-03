import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header, Loading, Title, Wrapper } from "./style/CoinsStyle";
import { IRouteState } from "./types/CoinsType";

function Coin() {
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation<IRouteState>();

    useEffect(() => {
        if (state) {
            setLoading(false);
        }
    }, []);

    return (
        <Wrapper>
            <Header>
                <Title>{state?.name || "Not Exist"}</Title>
            </Header>

            {loading ? <Loading>Loading...</Loading> : null}
        </Wrapper>
    );
}

export default React.memo(Coin);
