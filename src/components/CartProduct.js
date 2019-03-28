import React, { Component } from "react";

export default class CartProduct extends Component {
  state = {
    data: null,
    qty: 0,
    loading: true
  };
  componentDidMount() {
    fetch(`http://localhost:4444/product/${this.props.productId}`, {
      method: "get"
    })
      .then(res => res.json())
      .then(data => {
        // console.log("Data", data);
        this.setState({
          data: data,
          qty: this.props.qty,
          loading: false
        });
      });
  }
  addProduct = () => {
    // Update state
    this.setState({ qty: this.state.qty + 1 });
  };
  removeProduct = () => {
    // Update state
    if (this.state.qty > 0) {
      this.setState({ qty: this.state.qty - 1 });
    }
  };
  render() {
    if (this.state.loading) {
      return <h1>Loading!</h1>;
    } else if (this.state.qty == 0) {
      return <div />;
    } else {
      return (
        <div
          className="row mt5"
          style={{ borderBottom: "1px solid #efefef", paddingBottom: "4%" }}
        >
          <div className="col s12 m1">
            <i
              className="fa fa-times"
              style={{
                color: "red",
                paddingTop: "90%"
              }}
            />
          </div>
          <div className="col s12 m2">
            <img
              alt="product"
              src={this.state.data.picture}
              width="170px"
              height="170px"
            />
          </div>
          <div
            className="col s12 m3"
            style={{
              color: "rgb(83, 87, 99)",
              paddingTop: "4%",
              paddingLeft: "0%"
            }}
          >
            <h6>{this.state.data.name}</h6>
          </div>
          <div
            className="col s12 m2"
            style={{
              color: "rgb(83, 87, 99)",
              paddingTop: "4%",
              paddingLeft: "2.75%"
            }}
          >
            <h6>₹{this.state.data.discounted_price}</h6>
          </div>
          <div
            className="col s12 m2 qty"
            style={{ marginLeft: "-0.5%", paddingTop: "2.7%" }}
          >
            <div className="qty">
              <ul className="addToCart">
                <li>
                  <span
                    className="qty-minus"
                    onClick={() => {
                      this.removeProduct();
                      this.props.removeProduct(this.props.productId);
                    }}
                  >
                    <i className="fas fa-minus" />
                  </span>
                </li>
                <li>
                  <span className="qty-total">{this.state.qty}</span>
                </li>
                <li>
                  <span
                    className="qty-plus"
                    onClick={() => {
                      this.addProduct();
                      this.props.addProduct(this.props.productId);
                    }}
                  >
                    <i className="fas fa-plus" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col s12 m1"
            style={{
              color: "rgb(83, 87, 99)",
              paddingTop: "4%",
              paddingLeft: "1.8%"
            }}
          >
            <h6>{this.state.qty * this.state.data.discounted_price}</h6>
          </div>
        </div>
      );
    }
  }
}
