import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { actions as shoppingListActions } from "../actions/shoppingList";
import { actions as uiActions } from "../actions/ui";

// Components
import DishRecipes from "./dishRecipes";
import NotFound404 from "../components/notFound404";

class ShoppingList extends Component {
    render() {
        return (<h2>Shopping List</h2>);
    }
}

const mapStateToProps = ({ shoppingListReducer, uiReducer }) => ({
    shoppingListData: shoppingListReducer,
    ui: uiReducer
});

export default connect(mapStateToProps)(ShoppingList);