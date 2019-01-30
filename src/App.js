import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Category from "./components/Category";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/product" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/category" component={Category} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
