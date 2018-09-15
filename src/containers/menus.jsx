import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { actions as menuActions } from "../actions/menu";
import { actions as uiActions } from "../actions/ui";

// Components
import DishRecipes from "./dishRecipes";
import NotFound404 from "../components/notFound404";

class Menus extends Component {
    render() {
        return (<h2>Menus</h2>);
    }
}

const mapStateToProps = ({ menuReducer, uiReducer }) => ({
    menuData: menuReducer,
    ui: uiReducer
});

export default connect(mapStateToProps)(Menus);