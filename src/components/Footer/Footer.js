import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
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
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-1.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-1.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-2.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-2.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-3.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-3.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-4.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-4.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-5.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-5.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-6.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-6.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-7.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-7.jpg" /></a>
                </li>
                <li>
                  <a className="fancybox" data-fancybox-group="contentgallery" href="assets/images/tag-8.jpg"><img alt="Img-sm" className="img-100" src="assets/images/tag-8.jpg" /></a>
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
    )
  }
}