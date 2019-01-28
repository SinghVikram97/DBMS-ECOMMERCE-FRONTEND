import React, { Component } from "react";
import "./ProductDetails.css";
export default class ProductDetails extends Component {
  state = {
    bigImage:
      "http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/product-details/01.jpg",
    route: "SPECIFICATIONS"
  };
  handleImageClick = e => {
    let src = e.target.src;
    let a = src.slice(0, 85);
    let b = src.slice(91, src.length);
    src = a + b;
    this.setState({ bigImage: src });
  };
  clickDescription = e => {
    if (e.target.text === "SPECIFICATIONS") {
      let description = e.target.nextSibling;
      let moreFeatures = e.target.nextSibling.nextSibling;
      let specs = e.target;
      specs.style.color = "#545050";
      specs.style.backgroundColor = "#fff";
      description.style.color = "rgb(84, 80, 80)";
      description.style.backgroundColor = "rgb(255, 255, 255)";
      moreFeatures.style.color = "rgb(84, 80, 80)";
      moreFeatures.style.backgroundColor = "rgb(255, 255, 255)";
    } else if (e.target.text === "DESCRIPTION") {
      let specs = e.target.previousSibling;
      let moreFeatures = e.target.nextSibling;
      let description = e.target;
      description.style.color = "#545050";
      description.style.backgroundColor = "#fff";
      moreFeatures.style.color = "rgb(84, 80, 80)";
      moreFeatures.style.backgroundColor = "rgb(255, 255, 255)";
      specs.style.color = "rgb(84, 80, 80)";
      specs.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
      let description = e.target.previousSibling;
      let specs = e.target.previousSibling.previousSibling;
      let moreFeatures = e.target;
      moreFeatures.style.color = "#545050";
      moreFeatures.style.backgroundColor = "#fff";
      specs.style.color = "rgb(84, 80, 80)";
      specs.style.backgroundColor = "rgb(255, 255, 255)";
      description.style.color = "rgb(84, 80, 80)";
      description.style.backgroundColor = "rgb(255, 255, 255)";
    }

    this.setState({ route: e.target.text });
    if (e.target.style.color === "white") {
      e.target.style.color = "#545050";
      e.target.style.backgroundColor = "#fff";
    } else {
      e.target.style.color = "white";
      e.target.style.backgroundColor = "#2a9cf5";
    }
  };
  render() {
    let options;
    if (this.state.route === "SPECIFICATIONS") {
      options = (
        <div
          className="row mt5"
          style={{ paddingLeft: "37.3rem", fontSize: "120%" }}
        >
          <h5 style={{ paddingLeft: "-1.3rem", fontWeight: "bold" }}>
            Technical Specifications
          </h5>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Brand:{" "}
            </span>{" "}
            Apple
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Item Height:{" "}
            </span>{" "}
            18 Millimeters
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Item Width:{" "}
            </span>{" "}
            31.4 Centimeters
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Screen Size:{" "}
            </span>{" "}
            13 Inches
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Item Weight:{" "}
            </span>{" "}
            1.6 Kg
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Product Dimensions :{" "}
            </span>{" "}
            21.9 x 31.4 x 1.8 cm
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Item Model Number:{" "}
            </span>{" "}
            MF841HN/A
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Processor Brand:{" "}
            </span>{" "}
            Intel
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Processor Type:{" "}
            </span>{" "}
            Core i5
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Processor Speed:{" "}
            </span>{" "}
            2.9 GHz
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              RAM Size:{" "}
            </span>{" "}
            8 GB
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Hard Drive Size:{" "}
            </span>{" "}
            512 GB
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Operating System:{" "}
            </span>{" "}
            Mac OS
          </div>
          <div className="mt4">
            <span style={{ fontWeight: "600", marginRight: "1%" }}>
              Average Battery Life (in hours):{" "}
            </span>{" "}
            9
          </div>
        </div>
      );
    } else if (this.state.route === "DESCRIPTION") {
      options = (
        <div
          className="row mt5"
          style={{ paddingLeft: "37.3rem", fontSize: "120%" }}
        >
          <h5 style={{ paddingLeft: "-1.3rem", fontWeight: "bold" }}>
            Product Description
          </h5>
          <div className="col s7" style={{ paddingLeft: 0 }}>
            <p style={{ textAlign: "justify" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncove many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like) Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum will uncover many web
              sites still in their infancy. Various versions have evolved over
              the years, sometimes by accident, sometimes on purpose (injected
              humour and the like)..
            </p>
          </div>
        </div>
      );
    } else if (this.state.route === "FEATURES") {
      options = (
        <div
          className="row mt5"
          style={{ paddingLeft: "37.3rem", fontSize: "120%" }}
        >
          <h5 style={{ paddingLeft: "-1.3rem", fontWeight: "bold" }}>
            More Features
          </h5>

          <div className="col s3">
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="row mt4">
              <div className="col s12 " style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12 " style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
            <div className="row mt4">
              <div className="col s12" style={{ paddingLeft: 0 }}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5rem", color: "#2a9cf5" }}
                />
                <span>24/7 Online Support</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row mt6 mb4" style={{ overflowX: "hidden" }}>
        <div className="col s12">
          <div className="row">
            <div className="col s12 m3 ml7 mr5" style={{ marginLeft: "21%" }}>
              <div className="row" style={{ marginTop: "15%" }}>
                <div className="cols12">
                  <img src={this.state.bigImage} alt="" srcset="" />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="row tc">
                    <div className="col s4">
                      <img
                        src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/product-details/thumb/01.jpg"
                        alt=""
                        srcset=""
                        onClick={this.handleImageClick}
                      />
                    </div>
                    <div className="col s4">
                      <img
                        src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/product-details/thumb/02.jpg"
                        alt=""
                        srcset=""
                        onClick={this.handleImageClick}
                      />
                    </div>
                    <div className="col s4">
                      <img
                        src="http://idealbrothers.thesoftking.com/html/bigenza/bigenja/assets/img/product-details/thumb/03.jpg"
                        alt=""
                        srcset=""
                        onClick={this.handleImageClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="row">
                <div className="col s4" style={{ paddingTop: "4%" }}>
                  <i class="fas fa-star" style={{ color: "#FFBE00" }} />
                  <i class="fas fa-star" style={{ color: "#FFBE00" }} />
                  <i class="fas fa-star" style={{ color: "#FFBE00" }} />
                  <i
                    class="fas fa-star-half-alt"
                    style={{ color: "#FFBE00" }}
                  />
                  <i class="far fa-star" style={{ color: "#FFBE00" }} />
                </div>
                <div className="col s3 font" style={{ paddingTop: "4%" }}>
                  23 Reviews
                </div>
                <div className="col s3 font" style={{ paddingTop: "2.2%" }}>
                  <span className="numOrders">Orders(200+)</span>
                </div>
              </div>
              <div className="row mt1" style={{ marginBottom: "0" }}>
                <div
                  className="col s3 blueColor font"
                  style={{
                    fontWeight: "bold",
                    fontSize: "110%"
                  }}
                >
                  ACCESSORIES
                </div>
              </div>
              <div className="row">
                <div className="col s12 font">
                  <h5>Wireless Audio System Multiroom 360</h5>
                </div>
              </div>
              <div className="row" style={{ paddingLeft: "3%" }}>
                <div
                  className="col s4 font blueColor tc"
                  style={{ paddingLeft: "9%" }}
                >
                  <h5>Rs 2000</h5>
                </div>
                <div
                  className="col s3 ml6 pl6 font blueColor"
                  style={{
                    textDecoration: "line-through",
                    paddingLeft: "1%",
                    color: "#BEC3D3"
                  }}
                >
                  <h5>Rs 2500</h5>
                </div>
                <div className="col s4" style={{ paddingLeft: "4%" }}>
                  <a
                    href="#abc"
                    id="size-chart"
                    className="white-text br4 waves-effect waves-light btn"
                    style={{
                      paddingBottom: "3rem",
                      paddingTop: "0.5rem",
                      color: "#2a9cf5",
                      backgroundColor: "#2a9cf5"
                    }}
                  >
                    SIZE CHART
                  </a>
                </div>
              </div>
              <div className="row mt4 pt3">
                <div className="col s4 offset-s2 boldFont">Brands:</div>
                <div className="col s5 rubikFont">Hewlett-Packard</div>
              </div>
              <div className="row">
                <div className="col s4 offset-s2 boldFont">Product Code:</div>
                <div className="col s5 rubikFont">d12</div>
              </div>
              <div className="row">
                <div className="col s4 offset-s2 boldFont">Reward Points:</div>
                <div className="col s5 rubikFont">100</div>
              </div>
              <div className="row">
                <div className="col s4 offset-s2 boldFont">Stock</div>
                <div className="col s5 rubikFont">In Stock</div>
              </div>
              <div className="row pl2 mt2 mb0">
                <div className="col">
                  <h5>Overview</h5>
                </div>
              </div>
              <div className="row pl2 mb0">
                <div className="col">
                  <p style={{ fontSize: "110%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip. Excepteur sint occaecat
                    cupida...
                  </p>
                </div>
              </div>
              <div className="row pl3 mt3">
                <div className="col s5 offset-s1">
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
                <div className="col s5">
                  <ul className="activities">
                    <li>
                      <a href="#abc" className="activitiesIcon">
                        <i className="fas fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#abc" className="activitiesIcon">
                        <i className="fas fa-hourglass" />
                      </a>
                    </li>
                    <li>
                      <a href="#abc" className="activitiesIcon">
                        <i className="fas fa-share-square" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row tc mt4">
                <div className="col s12" style={{ marginLeft: "-3%" }}>
                  <a
                    href="#abc"
                    id="size-chart"
                    className="white-text br4 waves-effect waves-light btn"
                    style={{
                      paddingBottom: "3rem",
                      paddingTop: "0.5rem",
                      color: "#2a9cf5",
                      backgroundColor: "#2a9cf5",
                      fontWeight: "700",
                      fontSize: "110%"
                    }}
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
          <div className="row mt5">
            <div className="col s12 tc">
              <a
                href="#abc"
                id="size-chart"
                className="br4 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  color: "white",
                  backgroundColor: "#2a9cf5",
                  fontSize: "110%"
                }}
                onClick={this.clickDescription}
              >
                SPECIFICATIONS
              </a>
              <a
                href="#abc"
                id="size-chart"
                className="br4 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  color: "#545050",
                  backgroundColor: "#fff",
                  fontSize: "110%",
                  marginLeft: "10%"
                }}
                onClick={this.clickDescription}
              >
                DESCRIPTION
              </a>
              <a
                href="#abc"
                id="size-chart"
                className="br4 waves-effect waves-light btn"
                style={{
                  paddingBottom: "3rem",
                  paddingTop: "0.5rem",
                  color: "#545050",
                  backgroundColor: "#fff",
                  fontSize: "110%",
                  marginLeft: "10%"
                }}
                onClick={this.clickDescription}
              >
                FEATURES
              </a>
            </div>
          </div>
          <div className="row mt4">
            <div className="col s10 offset-s3" />
            {options}
          </div>
        </div>
      </div>
    );
  }
}
