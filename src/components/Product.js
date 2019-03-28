import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src={this.props.picture} />
            <a
              class="btn-floating halfway-fab waves-effect waves-light"
              style={{
                color: "#505254",
                backgroundColor: "rgb(56, 188, 253)"
              }}
              onClick={() => {
                this.props.addProduct(this.props.id);
              }}
            >
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content tc">
            <div className="mt2" style={{ fontWeight: "bold" }}>
              {this.props.name}
            </div>
            <div className="mt4" style={{ marginBottom: "5%" }}>
              <span className="mr4">₹{this.props.discounted_price}</span>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "gray"
                }}
              >
                ₹{this.props.original_price}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
