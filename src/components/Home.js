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
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="https://i.ibb.co/w00tmvF/01.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  LEATHER JACKET
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹5000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹6500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/02.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  SNEAKERS
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹1200</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹1500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/03.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  COTTON SWEATER
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹1000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹1500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/04.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  WHITE T-SHIRT
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹2500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row mt5"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/05.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  HANDBAG
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹3000
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/06.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  BLACK SNEAKERS
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2500</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹3500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/07.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  EASY SHOES
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹3000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹4000
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/08.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  SMART WATCH
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹5000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹6500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
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
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="https://i.ibb.co/w00tmvF/01.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  LEATHER JACKET
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹5000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹6500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/02.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  SNEAKERS
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹1200</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹1500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/03.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  COTTON SWEATER
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹1000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹1500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/04.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  WHITE T-SHIRT
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹2500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row mt5"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/05.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  HANDBAG
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹3000
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/06.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  BLACK SNEAKERS
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹2500</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹3500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/07.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  EASY SHOES
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹3000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹4000
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div class="card">
              <div class="card-image">
                <img src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/new-collections/08.jpg" />
                <a
                  class="btn-floating halfway-fab waves-effect waves-light"
                  style={{
                    color: "#505254",
                    backgroundColor: "rgb(56, 188, 253)"
                  }}
                >
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="card-content tc">
                <div className="mt2" style={{ fontWeight: "bold" }}>
                  SMART WATCH
                </div>
                <div className="mt4" style={{ marginBottom: "5%" }}>
                  <span className="mr4">₹5000</span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "gray"
                    }}
                  >
                    ₹6500
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
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
            <h4 className="white-text ml3" style={{ display: "inline-block" }}>
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
