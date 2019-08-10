import React, { Component } from "react";
import { connect } from "react-redux" ;

import Header from './Header';
import { getMenu } from "../../actions/headerActions";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ""
    }
  }

  componentDidMount() {
    this.props.getMenuItems();
  }

  render() {
    return (
      <Header menuItems = { this.props.menuItems } />
    );
  }
}

const mapStateToProps = (menuItems) => {
  return {
    menuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMenuItems: () => {
      dispatch(getMenu());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);