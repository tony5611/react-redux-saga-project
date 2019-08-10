import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import HeaderContainer from "../src/components/Header/HeaderContainer";
import FooterContainer from "../src/components/Footer/FooterContainer";

const store = configureStore();

class App extends Component {

  componetDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        {/*main content*/}
        <div className="ip-main">
          <div className="top-highlight hide">
            &nbsp;
          </div>
          {/* Start Header Cake */}
          <section className="header-wrapper">
            <header className="wrap-header">
              <HeaderContainer />
              <div className="tittle-cake text-center pad-top-150">
                <div className="container">
                  <h2>
                    Beautiful
                  </h2>
                  <h1>
                    CUPCAKES
                  </h1>
                </div>
              </div>
              <div className="slider-cake">
                <div className="container pad-md-100">
                  <div className="center">
                    <div className="img-relative">
                      <img alt="Cake-one" src="assets/images/cake-one.png" />
                      <div className="price-cake hidden-xs">
                        <p>
                          $40
                        </p>
                      </div>
                    </div>
                    <div>
                      <img alt="Cake-Two" src="assets/images/cake-two.png" />
                    </div>
                    <div>
                      <img alt="Cake-Three" src="assets/images/cake-three.png" />
                    </div>
                    <div>
                      <img alt="Cake-Four" src="assets/images/cake-four.png" />
                    </div>
                    <div>
                      <img alt="Cake-Five" src="assets/images/cake-five.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="green-table mar-to-top">
                &nbsp;
              </div>
              <div className="green-arrow">
                &nbsp;
              </div>
            </header>
          </section>
          {/* End Header Cake */}
          {/* Start About Cake */}
          <section className="about-cake">
            <div className="container">
              {/* About Content */}
              <h2 className="hide">
                &nbsp;
              </h2>
              <div className="about-content">
                <img alt="Cake-White" src="assets/images/cake-white.png" />
                <p>
                  Toffee sugar plum halvah liquorice <b>brownie gummies</b>&nbsp;chocolate bar muffin candy canes.Dessert jelly-o tootsie roll jelly sesame snaps icing.
                </p>
              </div>
            </div>
          </section>
          {/* End About Cake */}
          {/* Start Product Cake */}
          <section className="product-cake">
            <div className="container">
              {/* Product Tittle */}
              <div className="product-tittle">
                <img alt="Cake-Purple" src="assets/images/cake-purple.png" />
                <h2>
                  Product
                </h2>
              </div>
              {/* Product Content */}
              <div className="product-content">
                <div className="row">
                  {/* Column */}
                  <div className="col-sm-4">
                    <div className="wrap-product">
                      <div className="top-product blue-cake">
                        <h1 className="normal-heading">
                          $40
                        </h1>
                        <p className="mar-top-10 mar-btm-0">
                          Blue Cake's
                        </p>
                        <span>Lorem ipsum set <br />amet.</span>
                      </div>
                      <div className="bottom-product bottom-blue">
                        <div className="bottom-product-abs blue-dot">
                          <div className="button-cake">
                            <div className="blue-button-cake">
                              <button className="button-d-cake blue-button-cake">Buy</button>
                            </div>
                          </div>
                        </div>
                        <div className="wrap-bottom-cake">
                          <p>
                            Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                          </p>
                          <div className="blue-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-sm-4">
                    <div className="wrap-product">
                      <div className="top-product red-cake">
                        <h1 className="normal-heading">
                          $30
                        </h1>
                        <p className="mar-top-10 mar-btm-0">
                          Pink Cake's
                        </p>
                        <span>Lorem ipsum set <br />amet.</span>
                      </div>
                      <div className="bottom-product bottom-red">
                        <div className="bottom-product-abs pink-dot">
                          <div className="button-cake">
                            <div className="blue-button-cake">
                              <button className="button-d-cake pink-button-cake">Buy</button>
                            </div>
                          </div>
                        </div>
                        <div className="wrap-bottom-cake">
                          <p>
                            Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                          </p>
                          <div className="red-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="col-sm-4">
                    <div className="wrap-product">
                      <div className="top-product orange-cake">
                        <h1 className="normal-heading">
                          $30
                        </h1>
                        <p className="mar-top-10 mar-btm-0">
                          Orange Cake's
                        </p>
                        <span>Lorem ipsum set <br />amet.</span>
                      </div>
                      <div className="bottom-product bottom-orange">
                        <div className="bottom-product-abs orange-dot">
                          <div className="button-cake">
                            <div className="blue-button-cake">
                              <button className="button-d-cake orange-button-cake">Buy</button>
                            </div>
                          </div>
                        </div>
                        <div className="wrap-bottom-cake">
                          <p>
                            Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                          </p>
                          <div className="orange-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Column Tittle */}
                  <div className="col-sm-12">
                    <p className="text-content text-center">
                      Toffee sugar plum halvah liquorice <b className="purple-color">brownie gummies</b>&nbsp;chocolate bar muffin candy canes.Dessert jelly-o tootsie roll jelly sesame snaps icing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Product Cake */}
          {/* Start News Cake */}
          <section className="news-cake">
            <div className="triangle-no-animate">
              &nbsp;
            </div>
            {/* News Content */}
            <div className="new-cake-content mar-top-20">
              {/* Tittle News Content */}
              <div className="tittle-cake text-center">
                <div className="container">
                  <img alt="Cake-White" src="assets/images/cake-white.png" />
                  <h2>
                    New's Cake
                  </h2>
                </div>
              </div>
              {/* Content News*/}
              <div className="container mar-top-20">
                <div className="row">
                  <div className="col-sm-6 no-pad-right">
                    <div className="left-news">
                      <h1>
                        CAKE <span>Wedding</span>
                      </h1>
                    </div>
                    <div className="right-news">
                      <div className="text-table">
                        <p>
                          <a href="shop.html"><span className="discount">40<span className="percent">%</span><br /></span><span className="sale">Sale Product</span></a>
                        </p>
                      </div>
                      <div className="text-table dot-background">
                        <p>
                          <img alt="Client" src="assets/images/client.png" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 no-pad-left">
                    <div className="top-news-right">
                      <div className="left-news-right">
                        <div className="text-table">
                          <a className="fancybox" data-fancybox-group="contentnews" href="assets/images/ice-cream.png">
                            <div className="wizz-effect wizz-orange">
                              <div className="wrap-info">
                                Ice Cream
                              </div>
                            </div>
                          </a>
                          <p>
                            <img alt="Ice Cream" className="img-100" src="assets/images/ice-cream.png" />
                          </p>
                        </div>
                      </div>
                      <div className="right-news-right">
                        <div className="text-table">
                          <a className="fancybox" data-fancybox-group="contentnews" href="assets/images/ice-cream-cake.png">
                            <div className="wizz-effect wizz-green">
                              <div className="wrap-info">
                                Cake's Flavors
                              </div>
                            </div>
                          </a>
                          <p>
                            <img alt="Ice Cream Cake" className="img-100" src="assets/images/ice-cream-cake.png" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-new-right">
                      <div className="quote">
                        <div>
                          <span className="mar-right-10"><img alt="Quote" className="Quote" src="assets/images/quote.png" /></span>
                          <p>
                            <span className="bold-font-lg">Adam Grilss, </span><span>&nbsp; CEO B </span>
                          </p>
                          <p>
                            That’s great product wonderfull place and cakes, so yummy this cake.
                          </p>
                        </div>
                        <div>
                          <span className="mar-right-10"><img alt="Quote" className="Quote" src="assets/images/quote.png" /></span>
                          <p>
                            <span className="bold-font-lg">Natasya, </span><span>&nbsp; CEO B </span>
                          </p>
                          <p>
                            That’s great product wonderfull place and cakes, so yummy this cake.
                          </p>
                        </div>
                        <div>
                          <span className="mar-right-10"><img alt="Quote" className="Quote" src="assets/images/quote.png" /></span>
                          <p>
                            <span className="bold-font-lg">Melody, </span><span>&nbsp; CEO B </span>
                          </p>
                          <p>
                            That’s great product wonderfull place and cakes, so yummy this cake.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Content News*/}
            </div>
            {/* End News Content*/}
          </section>
          {/* End News Cake */}
          {/* Start Option Cake */}
          <section className="option">
            {/* Tittle Option */}
            <div className="green-table pad-top-10 pad-btm-10">
              <div className="container">
                <div className="tittle-cake text-center">
                  <img alt="Cake-White" src="assets/images/cake-white.png" />
                  <h2>
                    What We Can
                  </h2>
                </div>
              </div>
            </div>
            <div className="green-arrow"></div>
            {/* Option Content */}
            <div className="option-content">
              <div className="container">
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap green-option"></div>
                  </div>
                  <h4 className="green-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-green-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap orange-option"></div>
                  </div>
                  <h4 className="orange-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-orange-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap blue-option"></div>
                  </div>
                  <h4 className="blue-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-blue-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap pink-option"></div>
                  </div>
                  <h4 className="pink-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-pink-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap purple-option"></div>
                  </div>
                  <h4 className="purple-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-purple-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
                {/* Column */}
                <div className="col-sm-4">
                  <div className="messes">
                    <div className="messes-show"></div>
                    <div className="round-wrap dpurple-option"></div>
                  </div>
                  <h4 className="dpurple-color">
                    Make Cake
                  </h4>
                  <div className="line-temp line-dpurple-sm">
                    &nbsp;
                  </div>
                  <p className="text-center mar-top-10">
                    Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End Option Cake */}
          {/* Start Pricing Cake */}
          <section className="pricing-cake">
            <div className="triangle-no-animate">
              &nbsp;
            </div>
            {/* Content Pricing Cake */}
            <div className="content-pricing-cake">
              <div className="tittle-cake text-center">
                <div className="container">
                  <img alt="Cake-White" src="assets/images/cake-white.png" />
                  <h2>
                    Our Price
                  </h2>
                </div>
              </div>
              <div className="container mar-top-20">
                {/* Column */}
                <div className="col-sm-3 mar-btm-20">
                  <div className="img-wrap-price">
                    <img alt="Price-Purple" className="img-full-sm" src="assets/images/price-purple.png" />
                  </div>
                  <div className="content-price content-price-tag text-center">
                    <h4 className="dpurple-color">
                      $ 100/<span>Package</span>
                    </h4>
                    <div className="price-purple">
                      <div className="triangle-no-animate">
                        &nbsp;
                      </div>
                      <div className="text-price">
                        Just Cupcakes + Free Order
                      </div>
                      <ul className="text-left list-price pad-top-0i">
                        <li className="purple-line">
                          - 10 Cupcakes
                        </li>
                        <li className="purple-line">
                          - Free 1 Cupcakes 
                        </li>
                        <li className="purple-line">
                          - Free Order
                        </li>
                      </ul>
                      <div className="price-btn price-purple-btn">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="col-sm-3 mar-btm-20">
                  <div className="img-wrap-price">
                    <img alt="Price-Pink" className="img-full-sm" src="assets/images/price-pink.png" />
                  </div>
                  <div className="content-price content-price-tag text-center">
                    <h4 className="pink-color">
                      $ 200/<span>Package</span>
                    </h4>
                    <div className="price-pink">
                      <div className="triangle-no-animate">
                        &nbsp;
                      </div>
                      <div className="text-price">
                        Cupcakes + Ice Cream + Free Order
                      </div>
                      <ul className="text-left list-price pad-top-0i">
                        <li className="pink-line">
                          - 20 Cupcakes + 5 Ice Cream
                        </li>
                        <li className="pink-line">
                          - Free 5 Cupcakes 
                        </li>
                        <li className="pink-line">
                          - Free Order
                        </li>
                      </ul>
                      <div className="price-btn price-pink-btn">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="col-sm-3 mar-btm-20">
                  <div className="img-wrap-price">
                    <img alt="Price-Green" className="img-full-sm" src="assets/images/price-green.png" />
                  </div>
                  <div className="content-price content-price-tag text-center">
                    <h4 className="green-color">
                      $ 300/<span>Package</span>
                    </h4>
                    <div className="price-green">
                      <div className="triangle-no-animate">
                        &nbsp;
                      </div>
                      <div className="text-price">
                        Cupcakes + Ice Cream + Cookies
                      </div>
                      <ul className="text-left list-price pad-top-0i">
                        <li className="green-line">
                          - 25 Cupcakes + 5 Ice Cream
                        </li>
                        <li className="green-line">
                          - Free 5 Cupcakes
                        </li>
                        <li className="green-line">
                          - 2 Cookies Free Order
                        </li>
                      </ul>
                      <div className="price-btn price-green-btn">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="col-sm-3 mar-btm-20">
                  <div className="img-wrap-price">
                    <img alt="Price-Blue" className="img-full-sm" src="assets/images/price-blue.png" />
                  </div>
                  <div className="content-price content-price-tag text-center">
                    <h4 className="blue-color">
                      $ 400/<span>Package</span>
                    </h4>
                    <div className="price-blue">
                      <div className="triangle-no-animate">
                        &nbsp;
                      </div>
                      <div className="text-price">
                        Special Cupcakes + Ice Cream + Cookies
                      </div>
                      <ul className="text-left list-price pad-top-0i">
                        <li className="blue-line">
                          - 30 Special Cupcakes
                        </li>
                        <li className="blue-line">
                          - Free 10 Cupcakes 
                        </li>
                        <li className="blue-line">
                          - 10 Ice Cream
                        </li>
                      </ul>
                      <div className="price-btn price-blue-btn">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="triangle-top-no-animate">
              &nbsp;
            </div>
          </section>
          {/* End Pricing Cake */}
          {/* Start Team Cake */}
          <section className="abouts-cake">
            <div className="tittle-cake text-center">
              <div className="container">
                <img alt="Cake-Pink" src="assets/images/cake-pink.png" />
                <h2 className="pink-color">
                  Our Team
                </h2>
              </div>
            </div>
            <div className="container mar-top-20">
              {/* Column */}
              <div className="col-sm-4">
                <div className="img-round-about">
                  <img alt="About Team" className="img-100" src="assets/images/about-1.png" />
                </div>
                <h4>
                  Katy Candy
                </h4>
                <div className="line-pink-about">
                  &nbsp;
                </div>
                <p className="text-center">
                  Cookie apple pie donut gingerbread <br />sweet roll pudding topping <br />marshmallow.
                </p>
              </div>
              {/* Column */}
              <div className="col-sm-4">
                <div className="img-round-about">
                  <img alt="About Team" className="img-100" src="assets/images/about-2.png" />
                </div>
                <h4>
                  Will Candy
                </h4>
                <div className="line-pink-about">
                  &nbsp;
                </div>
                <p className="text-center">
                  Cookie apple pie donut gingerbread <br />sweet roll pudding topping <br />marshmallow.
                </p>
              </div>
              {/* Column */}
              <div className="col-sm-4">
                <div className="img-round-about">
                  <img alt="About Team" className="img-100" src="assets/images/about-3.png" />
                </div>
                <h4>
                  Pink Candy
                </h4>
                <div className="line-pink-about">
                  &nbsp;
                </div>
                <p className="text-center">
                  Cookie apple pie donut gingerbread <br />sweet roll pudding topping <br />marshmallow.
                </p>
              </div>
            </div>
            <div className="tittle-cake text-center mar-top-20">
              <div className="container">
                <img alt="Cake-Pink" src="assets/images/cake-pink.png" />
                <h2 className="pink-color">
                  Contact Us
                </h2>
              </div>
            </div>
            <div className="container mar-top-20">
              <div className="col-sm-offset-3 col-sm-6">
                <div className="form-group">
                  <input className="form-control form-default-cakes" placeholder="Full Name" type="text" />
                </div>
                <div className="form-group">
                  <input className="form-control form-default-cakes" placeholder="Email" type="email" />
                </div>
                <textarea className="form-control form-default-cakes" placeholder="Your Message"></textarea>
                <div className="form-group">
                  <button className="btn btn-lg btn-pink-cake btn-send mar-top-20">Send</button>
                </div>
              </div>
            </div>
          </section>
          {/* End Option Cake */}
          {/* Start Footer Cake */}
          <FooterContainer />
          {/* End Option Cake */}
        </div>
      </Provider>
    );
  }
}

export default App;
