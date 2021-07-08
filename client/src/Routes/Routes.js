import React from "react";

import { Switch, Route } from "react-router-dom";
import CountriesCatalog from "../components/CountriesCatalog";
import List from "../components/List";
import Home from "../components/Home";
// import VideoGameDetail from "../components/VideoGameDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/app" component={CountriesCatalog} />
      <Route exact path="/info" component={List} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
