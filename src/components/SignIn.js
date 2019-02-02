import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row tc ma4" style={{ paddingTop: "6%" }}>
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <h4 className="mb4">Account Login</h4>
                <h6 className="mb4">
                  Signin to view deals and discounts exlusively for you
                </h6>
                <div class="row">
                  <div class="input-field col s12">
                    <input
                      id="email"
                      type="email"
                      class="validate"
                      style={{ width: "50%" }}
                      placeholder="Email"
                    />
                  </div>
                  <div class="row">
                    <div
                      class="input-field col s12"
                      style={{ width: "95.5%", marginLeft: "2.5%" }}
                    >
                      <input
                        id="password"
                        type="password"
                        class="validate"
                        style={{ width: "50%" }}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row tc mt2 mb2">
                  <div className="col s12">
                    <a
                      href="#abc"
                      className="blue darken-1 pl4 pr4 white-text br4 waves-effect waves-light btn"
                      style={{ paddingBottom: "3rem", paddingTop: "0.5rem" }}
                    >
                      SIGN IN
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col blue-text darken-1 pt3 col s12 tc">
                    <h6>Forgot Password?</h6>
                  </div>
                </div>
                <div className="row tc">
                  <div className="col s12">
                    <a
                      href="#abc"
                      className="blue pl4 pr4 darken-3 white-text br4 waves-effect waves-light btn"
                      style={{ paddingBottom: "3rem", paddingTop: "0.5rem" }}
                    >
                      SIGN IN WITH FACEBOOK
                    </a>
                  </div>
                </div>
                <div className="row tc">
                  <div className="col s12">
                    <a
                      href="#abc"
                      className="red  pl4 pr4 accent-4 white-text br4 waves-effect waves-light btn"
                      style={{ paddingBottom: "3rem", paddingTop: "0.5rem" }}
                    >
                      SIGN IN WITH GOOGLE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
