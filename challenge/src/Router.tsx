import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Coins from "./screen/Coins";
import Coin from "./screen/Coin";

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route path="/">
                    <Coins></Coins>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;
