import React, { Component } from "react";

import Footer from './Footer';

export default class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ""
    }
  }

  componentDidMount() {
    // axios.get('https://5d465ab172adf500143e1b0c.mockapi.io/api/pictures')
    //   .then(function(response) {
    //     console.log(response);
    //   });
  }

  render() {
    return (
      <Footer />
    );
  }
}