import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingList extends Component {
  render() {
    return <h2>Shopping List</h2>;
  }
}

const mapStateToProps = ({ shoppingListReducer, uiReducer }) => ({
  shoppingListData: shoppingListReducer,
  ui: uiReducer
});

export default connect(mapStateToProps)(ShoppingList);
