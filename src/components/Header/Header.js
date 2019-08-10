import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    console.log(this.props.menuItems);
    return (
          <div className="top-absolute">
            <div className="top-header">
              <div className="container">
                <div className="navbar-header visible-xs">
                  <button className="navbar-toggle toggle-cake show-menu"><span className="sr-only">Toggle Navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand navbar-cake" href="" onClick={(e) => e.preventDefault}><img alt="Logo-Cupcakes" src="assets/images/logo-100.png" /></a>
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
                      <a className="show-menu" onClick={(e) => e.preventDefault}>Themes</a>
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
          
    )
  }
}