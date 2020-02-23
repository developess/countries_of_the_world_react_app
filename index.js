import React from "react";
import { render } from "react-dom";
import { Nav, GlobalStyles } from "./src/components";
import { CountryList, CountryPage, Home } from "./src/pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/countries/:country">
          <CountryPage />
        </Route>
        <Route path="/countries">
          <CountryList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.getElementById("app"));
