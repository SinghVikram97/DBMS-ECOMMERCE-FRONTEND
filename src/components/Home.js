import React, { Component } from "react";
import Product from "./Product";
import "./Home.css";
export default class Home extends Component {
  state = {
    data: null,
    loading: true
  };
  componentDidMount() {
    fetch("http://localhost:4444/product", {
      method: "get"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data });
        this.setState({ loading: false });
      });
  }
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
  };
  removeProduct = id => {
    // Add to cart
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
  };
  render() {
    if (this.state.loading) {
      return <h1>Loading!</h1>;
    } else {
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
          <div className="row mt6 mb0">
            <div className="col s12 tc">
              <h5 style={{ color: "#2a9cf5", fontWeight: "700" }}>
                NEW PRODUCTS
              </h5>
            </div>
          </div>
          <div className="row mt0">
            <div className="col s12 tc">
              <h3 style={{ fontWeight: "700" }}>New Collections</h3>
            </div>
          </div>
          <div
            className="row mt5"
            style={{ marginLeft: "15%", marginRight: "15%" }}
          >
            {this.state.data.slice(0, 4).map(item => {
              return (
                <Product
                  id={item.product_id}
                  picture={item.picture}
                  name={item.name}
                  discounted_price={item.discounted_price}
                  original_price={item.original_price}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              );
            })}
          </div>
          <div
            className="row mt5"
            style={{ marginLeft: "15%", marginRight: "15%" }}
          >
            {this.state.data.slice(4, 9).map(item => {
              return (
                <Product
                  id={item.product_id}
                  picture={item.picture}
                  name={item.name}
                  discounted_price={item.discounted_price}
                  original_price={item.original_price}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              );
            })}
          </div>
          <div
            className="row mt5 pb5"
            id="ladies-wear"
            style={{ paddingBottom: "4.5%" }}
          >
            <div className="col mt5 s12 m4 offset-m7 ml6">
              <h5
                style={{
                  color: "#2a9cf5",
                  paddingLeft: "9%",
                  fontWeight: "bold"
                }}
              >
                GET 50% OFF IN SUMMER
              </h5>
              <h1
                className="poppins mt4 mb0"
                style={{
                  paddingLeft: "8%",
                  fontWeight: "bold",
                  fontSize: "5em"
                }}
              >
                Ladies Clothes
              </h1>
              <h5 className="poppins mt4" style={{ paddingLeft: "10%" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal.
              </h5>
              <div className="mt4 pt3" style={{ paddingLeft: "12%" }}>
                <a
                  href="#abc"
                  className="mr5 pl3 darken-1 pl4 pr4 white-text br3 waves-effect waves-light btn"
                  style={{
                    paddingBottom: "3rem",
                    paddingTop: "0.5rem",
                    backgroundColor: "#2a9cf5"
                  }}
                >
                  VIEW COLLECTIONS
                </a>
              </div>
            </div>
          </div>
          <div className="row mt6 mb0">
            <div className="col s12 tc">
              <h5 style={{ color: "#2a9cf5", fontWeight: "700" }}>
                TRENDING PRODUCTS
              </h5>
            </div>
          </div>
          <div className="row mt0">
            <div className="col s12 tc">
              <h3 style={{ fontWeight: "700" }}>OUR BEST SELLERS</h3>
            </div>
          </div>
          <div
            className="row mt5"
            style={{ marginLeft: "15%", marginRight: "15%" }}
          >
            {this.state.data.slice(0, 4).map(item => {
              return (
                <Product
                  id={item.product_id}
                  picture={item.picture}
                  name={item.name}
                  discounted_price={item.discounted_price}
                  original_price={item.original_price}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              );
            })}
          </div>
          <div
            className="row mt5"
            style={{ marginLeft: "15%", marginRight: "15%" }}
          >
            {this.state.data.slice(4, 9).map(item => {
              return (
                <Product
                  id={item.product_id}
                  picture={item.picture}
                  name={item.name}
                  discounted_price={item.discounted_price}
                  original_price={item.original_price}
                  addProduct={this.addProduct}
                  removeProduct={this.removeProduct}
                />
              );
            })}
          </div>
          <div className="row mt5 pt5 pb5 mb5" id="shipping">
            <div className="col tc s12 m6">
              <i
                class="fas fa-shipping-fast"
                style={{
                  color: "white",
                  fontSize: "242%",
                  display: "inline-block"
                }}
              />
              <h4
                className="white-text ml3"
                style={{ display: "inline-block" }}
              >
                Free Shipping Worldwide
              </h4>
              <br />
              <a
                href="#abc"
                className="pl4 pt4 mt4 pr4 white-text br2 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  fontWeight: "bold",
                  backgroundColor: "rgb(12, 87, 123)"
                }}
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}
