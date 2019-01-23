import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              <i className="material-icons Large pt1 addPadding">
                add_shopping_cart
              </i>
              E-Cart
            </Link>
            <a href="#abc" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul className="nav-list right hide-on-med-and-down">
              <li style={{ marginTop: "-4px" }}>
                <input
                  placeholder="Search"
                  id="search"
                  type="text"
                  class="validate"
                  style={{ color: "white" }}
                />
              </li>
              <li>
                <i
                  class="material-icons prefix pt1 pl3 pr4"
                  style={{ cursor: "pointer" }}
                >
                  search
                </i>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="pr3">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>Cart</li>
              <li>
                <i
                  class="material-icons prefix pt1 pl4"
                  style={{ cursor: "pointer" }}
                >
                  add_shopping_cart
                </i>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}
