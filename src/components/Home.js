import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row pb6" id="bg">
          <div
            className="col s12 white-text"
            style={{ marginTop: "8%", paddingLeft: "12%", fontSize: "3em" }}
          >
            <h5 style={{ color: "#00FFFB", paddingLeft: "0.5%" }}>
              GET 50% OFF IN SUMMER
            </h5>
            <h1 className="poppins mt0 mb0">Seasonal Offers.</h1>
            <h5
              className="poppins mt5"
              style={{ width: "46%", paddingTop: "0%" }}
            >
              Stock up on sportswear and limited edition collections on our
              awesome mid-season sale.
            </h5>
            <div className="mt5 pt3" style={{ paddingLeft: "8%" }}>
              <a
                href="#abc"
                className="mr5 pl3 darken-1 pl4 pr4 white-text br3 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  backgroundColor: "rgb(12, 87, 123)"
                }}
              >
                VIEW COLLECTIONS
              </a>
              <a
                href="#abc"
                className="darken-1 pl4 pr4 white-text br3 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  backgroundColor: "rgb(12, 87, 123)"
                }}
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 tc">
            <h1>Hi</h1>
          </div>
        </div>
      </div>
    );
  }
}
