import React, { Component } from "react";
import "./Cart.css";
export default class Cart extends Component {
  render() {
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
        <div
          className="row mt5"
          style={{ borderBottom: "1px solid #efefef", paddingBottom: "4%" }}
        >
          <div className="col s12 m1">
            <i
              className="fa fa-times"
              style={{
                color: "red",
                position: "absolute",
                top: "34%",
                left: "17%"
              }}
            />
          </div>
          <div className="col s12 m2">
            <img
              alt="product"
              src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/cart/01.jpg"
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
            <h6>Wireless Audio System Multiroom 360</h6>
          </div>
          <div
            className="col s12 m2"
            style={{
              color: "rgb(83, 87, 99)",
              paddingTop: "4%",
              paddingLeft: "2.75%"
            }}
          >
            <h6>₹5000</h6>
          </div>
          <div
            className="col s12 m2 qty"
            style={{ marginLeft: "-0.5%", paddingTop: "2.7%" }}
          >
            <div className="qty">
              <ul className="addToCart">
                <li>
                  <span className="qty-minus">
                    <i className="fas fa-minus" />
                  </span>
                </li>
                <li>
                  <span className="qty-total">1</span>
                </li>
                <li>
                  <span className="qty-plus">
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
            <h6>₹5000</h6>
          </div>
        </div>
        <div
          className="row mt5"
          style={{ borderBottom: "1px solid #efefef", paddingBottom: "4%" }}
        >
          <div className="col s12 m1">
            <i
              className="fa fa-times"
              style={{
                color: "red",
                position: "absolute",
                top: "63%",
                left: "17%"
              }}
            />
          </div>
          <div className="col s12 m2">
            <img
              alt="product"
              src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/cart/01.jpg"
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
            <h6>Wireless Audio System Multiroom 360</h6>
          </div>
          <div
            className="col s12 m2"
            style={{
              color: "rgb(83, 87, 99)",
              paddingTop: "4%",
              paddingLeft: "2.75%"
            }}
          >
            <h6>₹5000</h6>
          </div>
          <div
            className="col s12 m2 qty"
            style={{ marginLeft: "-0.5%", paddingTop: "2.7%" }}
          >
            <div className="qty">
              <ul className="addToCart">
                <li>
                  <span className="qty-minus">
                    <i className="fas fa-minus" />
                  </span>
                </li>
                <li>
                  <span className="qty-total">1</span>
                </li>
                <li>
                  <span className="qty-plus">
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
            <h6>₹5000</h6>
          </div>
        </div>
        <div className="row mt5">
          <div className="col s12 m6">
            <div className="coupon-code-wrapper">
              <div className="form-element" style={{ display: "inline-block" }}>
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
            <h6 style={{ display: "inline-block" }}>₹10000</h6>
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
            <h6 style={{ display: "inline-block", fontWeight: "bold" }}>Tax</h6>
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
              ₹12500
            </h6>
          </div>
          <hr style={{ width: "22%", marginLeft: "67%" }} />
        </div>
      </div>
    );
  }
}
