import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewProduct from "./pages/NewProduct";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/new" component={NewProduct} />
      </Switch>
    </BrowserRouter>
  );
}
