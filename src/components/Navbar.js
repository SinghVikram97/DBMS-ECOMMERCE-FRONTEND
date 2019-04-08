import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class Navbar extends Component {
    state = {
      authenticated: null
    };
    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };
    render() {
      if (this.state.authenticated === null) return null;
      if (!this.state.authenticated) {
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
                <a
                  href="#abc"
                  data-target="mobile-demo"
                  class="sidenav-trigger"
                >
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
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
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
      } else {
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
                <a
                  href="#abc"
                  data-target="mobile-demo"
                  class="sidenav-trigger"
                >
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
                  <li className="pr3">
                    <span onClick={this.logout} style={{ cursor: "pointer" }}>
                      Logout
                    </span>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
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
              <li className="pr3">
                <span onClick={this.logout} style={{ cursor: "pointer" }}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        );
      }
    }
  }
);
