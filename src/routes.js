import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import About from "./Components/About";
import Provisions from "./Components/Provisions";
import Clients from "./Components/Clients";
import FindUs from "./Components/FindUs";

const AppRouter = () => (
  <Router basename="/">
    <Route>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/provisions" component={Provisions} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/find-us" component={FindUs} />
      </App>
    </Route>
  </Router>
);
export default AppRouter;
