import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Order from "./components/Order";
import Login from "./components/Login";

function onAuthRequired({ history }) {
  history.push("/signin");
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Security
          issuer="https://dev-657098.okta.com/oauth2/default"
          client_id="0oaejwuwlijWSSgJc356"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/signin"
                render={() => <Login baseUrl="https://dev-657098.okta.com" />}
              />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/product" component={ProductDetails} />
              <SecureRoute path="/cart" exact={true} component={Cart} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/order" component={Order} />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </Switch>
          </div>
        </Security>
      </BrowserRouter>
    );
  }
}

export default App;
