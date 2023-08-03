import { useRouteMatch } from "react-router-dom";

function Chart({ coinId }: { coinId: string }) {
    const isMatch = useRouteMatch("/" + coinId + "/chart");
    console.log(isMatch);
    return <h1>Chart</h1>;
}

export default Chart;
