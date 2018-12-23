import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import About from "./Components/About";

const AppRouter = () => (
  <Router basename="/">
    <Route>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </App>
    </Route>
  </Router>
);
export default AppRouter;
