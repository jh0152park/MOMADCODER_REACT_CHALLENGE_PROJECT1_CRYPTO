import { useRouteMatch } from "react-router-dom";

function Price({ coinId }: { coinId: string }) {
    const isMatch = useRouteMatch("/" + coinId + "/price");

    console.log(isMatch);

    return <h1>Price</h1>;
}

export default Price;
