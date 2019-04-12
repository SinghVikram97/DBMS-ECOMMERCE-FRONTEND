import React, { Component } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Axios from "axios";

export default class Cart extends Component {
  state = {
    data: null,
    totalPrice: 0,
    loading: true,
    publishableKey: "pk_test_ZU3mlTy0q00DATc9EyF9A8jX"
  };

  componentDidMount() {
    fetch("http://localhost:4444/cart/1", {
      method: "get"
    })
      .then(res => res.json())
      .then(data => {
        // console.log("data", data);
        let tP = 0;
        for (let i = 0; i < data.length; i++) {
          fetch(`http://localhost:4444/product/${data[i].productId}`)
            .then(res => res.json())
            .then(item => {
              tP = tP + data[i].qty * item.discounted_price;
              this.setState({ totalPrice: tP });
            });
        }

        this.setState({
          data: data,
          loading: false
        });
      });
  }
  onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
    Axios.post("http://localhost:8000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  addProduct = id => {
    // Add to cart
    fetch(`http://localhost:4444/cart/1/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: this.props.image,
        option: "ADD"
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    fetch(`http://localhost:4444/product/${id}`, {
      method: "get"
    })
      .then(res => res.json())
      .then(productData => {
        console.log(productData);
        this.setState({
          totalPrice: this.state.totalPrice + productData.discounted_price
        });
      });
  };
  removeProduct = id => {
    // Remove from cart
    fetch(`http://localhost:4444/cart/1/${id}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: this.props.image,
        option: "REMOVE"
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    fetch(`http://localhost:4444/product/${id}`, {
      method: "get"
    })
      .then(res => res.json())
      .then(productData => {
        console.log(productData);
        this.setState({
          totalPrice: this.state.totalPrice - productData.discounted_price
        });
      });
  };
  render() {
    if (this.state.loading) {
      return <h1>Loading!</h1>;
    } else {
      return (
        <div className="container mt3">
          <div
            className="row mt3 white-text"
            style={{ backgroundColor: "#2A3649" }}
          >
            <div className="col s12">
              <h4 style={{ marginTop: "1%" }}>Cart</h4>
            </div>
          </div>
          <div
            className="row pl5 pb3"
            style={{
              color: "rgb(95, 98, 109)",
              fontSize: "110%",
              borderBottom: "1px solid #efefef"
            }}
          >
            <div className="col s12 m6">Product</div>
            <div className="col s12 m2">Price</div>
            <div className="col s12 m2">Quantity</div>
            <div className="col s12 m2">Total</div>
          </div>
          {this.state.data.map(item => {
            if (item.qty > 0) {
              return (
                <CartProduct
                  qty={item.qty}
                  productId={item.productId}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              );
            }
          })}
          <div className="row mt5">
            <div className="col s12 m6">
              <div className="coupon-code-wrapper">
                <div
                  className="form-element"
                  style={{ display: "inline-block" }}
                >
                  <input
                    id="couponInput"
                    type="text"
                    placeholder="Coupon Code"
                    className="input-field coupon"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <button
                  type="button"
                  className="submit-button"
                  style={{
                    marginLeft: "1%",
                    backgroundColor: "transparent",
                    border: "2px solid #7d7a7a",
                    borderRadius: "6px",
                    fontSize: "15px",
                    color: "rgb(73, 72, 72)",
                    letterSpacing: "2px",
                    paddingTop: "2.5%",
                    paddingBottom: "2.5%",
                    paddingLeft: "3%",
                    paddingRight: "3%"
                  }}
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="col s12 m6">
              <button
                className="submit-button ml6"
                type="button"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #7d7a7a",
                  borderRadius: "6px",
                  fontSize: "15px",
                  color: "rgb(73, 72, 72)",
                  letterSpacing: "2px",
                  paddingTop: "2.5%",
                  paddingBottom: "2.5%",
                  paddingLeft: "3%",
                  paddingRight: "3%"
                }}
              >
                UPDATE CART
              </button>
              {/* <Link
                to="/order"
                type="submit"
                className="submit-button ml3"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #7d7a7a",
                  borderRadius: "6px",
                  fontSize: "15px",
                  color: "rgb(73, 72, 72)",
                  letterSpacing: "2px",
                  paddingTop: "2.5%",
                  paddingBottom: "2.5%",
                  paddingLeft: "3%",
                  paddingRight: "3%",
                  textDecoration: "none"
                }}
              >
                PROCEED TO CHECKOUT
              </Link> */}
              {/* <a href="/order">
                <button
                  type="button"
                  className="submit-button ml3"
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #7d7a7a",
                    borderRadius: "6px",
                    fontSize: "15px",
                    color: "rgb(73, 72, 72)",
                    letterSpacing: "2px",
                    paddingTop: "2.5%",
                    paddingBottom: "2.5%",
                    paddingLeft: "3%",
                    paddingRight: "3%"
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </a> */}
              <StripeCheckout
                label="CHECKOUT" //Component button text
                name="Order Details" //Modal Header
                description="Here are details of your order"
                panelLabel="Order" //Submit button in modal
                amount={(this.state.totalPrice + 2500) * 100} //Amount in cents $9.99
                token={this.onToken}
                stripeKey={this.state.publishableKey}
                billingAddress={false}
                style={{ backgroundColor: "red !important" }}
              />
            </div>
          </div>
          <div className="row mt4">
            <div className="col s4 offset-s8">
              <h5>Cart Totals</h5>
            </div>
          </div>
          <div className="row">
            <div className="col s2 offset-s8">
              <h6 style={{ display: "inline-block", fontWeight: "bold" }}>
                Subtotal
              </h6>
            </div>
            <div className="col s2">
              <h6 style={{ display: "inline-block" }}>
                ₹{this.state.totalPrice}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col s2 offset-s8">
              <h6 style={{ display: "inline-block", fontWeight: "bold" }}>
                Shipping
              </h6>
            </div>
            <div className="col s2">
              <h6 style={{ display: "inline-block" }}>₹500</h6>
            </div>
            <hr style={{ width: "22%", marginLeft: "67%" }} />
          </div>
          <div className="row">
            <div className="col s2 offset-s8">
              <h6 style={{ display: "inline-block", fontWeight: "bold" }}>
                Tax
              </h6>
            </div>
            <div className="col s2">
              <h6 style={{ display: "inline-block" }}>₹2000</h6>
            </div>
            <hr style={{ width: "22%", marginLeft: "67%" }} />
          </div>
          <div className="row mb5">
            <div className="col s2 offset-s8">
              <h6 style={{ display: "inline-block", fontWeight: "bold" }}>
                Total
              </h6>
            </div>
            <div className="col s2">
              <h6 style={{ display: "inline-block", color: "#3881FD" }}>
                {this.state.totalPrice + 2500}
              </h6>
            </div>
            <hr style={{ width: "22%", marginLeft: "67%" }} />
          </div>
        </div>
      );
    }
  }
}
