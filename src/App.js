import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import CounterComponent from "./components/counter";

const store = configureStore();

class App extends Component {

  componetDidMount() {
    window.executeMainJS();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="ip-container" id="ip-container">
          {/*initial header*/}
          <header className="ip-header">
            <div className="ip-loader">
              <svg className="ip-inner" height="60px" viewBox="0 0 80 80" width="60px"><path className="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"></path><path className="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" id="ip-loader-circle"></path></svg>
            </div>
          </header>
          {/*main content*/}
          <div className="ip-main">
            <div className="top-highlight hide">
              &nbsp;
            </div>
            {/* Start Header Cake */}
            <section className="header-wrapper">
              <header className="wrap-header">
                <div className="top-absolute">
                  <div className="top-header">
                    <div className="container">
                      <div className="navbar-header visible-xs">
                        <button className="navbar-toggle toggle-cake show-menu"><span className="sr-only">Toggle Navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand navbar-cake" href="#"><img alt="Logo-Cupcakes" src="assets/images/logo-100.png" /></a>
                      </div>
                      <nav>
                        <ul className="header-nav hidden-xs">
                          <li>
                            <a href="index-2.html">Home</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li className="pad-top-0i">
                            <img alt="Logo-Cupcakes" src="assets/images/logo-150.png" />
                          </li>
                          <li>
                            <a className="show-menu" href="javascript:void(0);">Themes</a>
                          </li>
                          <li>
                            <a href="blog-center.html">Blog</a>
                          </li>
                        </ul>
                      </nav>
                      {/* Start Mega Menu Cake */}
                      <div className="mega-menu hide">
                        <div className="tittle-mega">
                          <h4>
                            - Mega Menu -
                          </h4>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-4">
                              <ul className="list-mega">
                                <li className="bottom-red-border">
                                  Blog
                                </li>
                                <li>
                                  <a href="blog.html">Blog Left Content</a>
                                </li>
                                <li>
                                  <a href="blog-right-content.html">Blog Right Content</a>
                                </li>
                                <li>
                                  <a href="blog-center.html">Blog Center</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <ul className="list-mega">
                                <li className="bottom-red-border">
                                  Gallery
                                </li>
                                <li>
                                  <a href="gallery.html">Gallery 3 Column</a>
                                </li>
                                <li>
                                  <a href="gallery-4-column.html">Gallery 4 Column</a>
                                </li>
                                <li>
                                  <a href="gallery-dot.html">Gallery With Text</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-4">
                              <ul className="list-mega">
                                <li className="bottom-red-border">
                                  OTHER PAGEs
                                </li>
                                <li>
                                  <a href="chart-page.html">Chart Page</a>
                                </li>
                                <li>
                                  <a href="product-details-page.html">Product Details</a>
                                </li>
                                <li>
                                  <a href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li>
                                  <a href="terms-of-use.html">Terms Of Use</a>
                                </li>
                                <li>
                                  <a href="404.html">404</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="div text-center">
                            <button className="btn btn-pink-cake mar-top-20 close-menu">Close Themes</button>
                          </div>
                        </div>
                      </div>
                      {/* End Mega Menu Cake */}
                    </div>
                  </div>
                  <div className="triangle">
                    &nbsp;
                  </div>
                </div>
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
            {/* End Product Cake */}{/* Start News Cake */}
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
            {/* End News Cake */}{/* Start Option Cake */}
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
            {/* End Option Cake */}{/* Start Pricing Cake */}
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
            {/* End Pricing Cake */}{/* Start Team Cake */}
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
            {/* End Option Cake */}{/* Start Footer Cake */}
            <footer>
              <div className="triangle-no-animate">
                &nbsp;
              </div>
              <div className="container">
                <div className="abs-logo-footer">
                  <img alt="Logo-Cake" src="assets/images/logo.png" />
                </div>
                <div className="top-footer">
                  <div className="row">
                    <div className="col-sm-6">
                      <img alt="Logo-White" className="img-cake-center-res mar-btm-20" src="assets/images/logo-white.png" />
                    </div>
                    <div className="col-sm-6 text-right">
                      <ul className="sosmed-cake">
                        <li>
                          <div className="center-sosmed">
                            <p className="icon icon-facebook">
                              &nbsp;
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="center-sosmed">
                            <p className="icon icon-twitter">
                              &nbsp;
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="center-sosmed">
                            <p className="icon icon-behance">
                              &nbsp;
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="center-sosmed">
                            <p className="icon icon-dribbble">
                              &nbsp;
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="center-sosmed">
                            <p className="icon icon-pinterest">
                              &nbsp;
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="line-top-white mar-btm-20 mar-top-20">
                  &nbsp;
                </div>
                <div className="content-about-footer">
                  {/* Column */}
                  <div className="col-sm-4">
                    <h4>
                      Cake's Dream
                    </h4>
                    <p className="mar-btm-20">
                      Cookie apple pie donut gingerbread <br />sweet roll pudding topping <br />marshmallow.<br />
                    </p>
                    <p className="mar-btm-20">
                      Jl Kalidam RT 05 RW 10 <br />Cimahi Selatan, Indonesia<br />
                    </p>
                    <p className="mar-btm-20">
                      Telp : <strong>085 327787266</strong>
                    </p>
                  </div>
                  {/* Column */}
                  <div className="col-sm-4 hidden-xs">
                    <ul className="list-picture-footer">
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-1.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-1.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-2.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-2.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-3.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-3.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-4.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-4.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-5.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-5.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-6.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-6.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-7.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-7.jpg" /></a>
                      </li>
                      <li>
                        <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-8.jpg"><img alt="Img-sm-picture" className="img-100" src="assets/images/tag-8.jpg" /></a>
                      </li>
                    </ul>
                    <div className="clear"></div>
                    <p>
                      Cookie apple pie donut gingerbread <br />sweet roll pudding topping
                    </p>
                  </div>
                  {/* Column */}
                  <div className="col-sm-4">
                    <ul className="list-link-home">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-of-use.html">Terms Of Use</a>
                      </li>
                      <li>
                        <a href="blog-center.html">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="logo-dn">
                  <img alt="Delip Nugraha" src="assets/images/dn.png" />
                </div>
              </div>
            </footer>
            {/* End Option Cake */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
