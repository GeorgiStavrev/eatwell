import React, { Component } from "react";
import { connect } from "react-redux";

// https://materializecss.com/cards.html
// https://semantic-ui.com/
class Menus extends Component {
  render() {
    return <h2>Menus</h2>;
  }
}

const mapStateToProps = ({ menuReducer, uiReducer }) => ({
  menuData: menuReducer,
  ui: uiReducer
});

export default connect(mapStateToProps)(Menus);
