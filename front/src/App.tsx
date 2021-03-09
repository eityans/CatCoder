import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as React from "react";

import { Problems } from "./Problems";
import { Home } from "./Home";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/problems">
                        <Problems />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
