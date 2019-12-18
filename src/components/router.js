import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import repository from "../components/repository";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/repository/:id" component={repository} />
    </Switch>
  </BrowserRouter>
);

export default Router;
