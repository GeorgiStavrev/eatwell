import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { dishActions } from "../actions/dish";
import { uiActions } from "../actions/ui";
import { shoppingListActions } from "../actions/shoppingList";

// Components
import DishRecipes from "./dishRecipes";
import NavBar from "../components/navBar";
import Dashboard from "../components/dashboard";

// CSS
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(dishActions.getAllDishes());
    dispatch(shoppingListActions.loadAllItems());
  }

  render() {
    console.log("render app.js");
    const { ui, shoppingList } = this.props;
    console.log(shoppingList);
    const navBarOptions = {
      shoppingListItemsCount: shoppingList.items ? shoppingList.items.length : 0
    };
    return (
      <BrowserRouter>
        <div>
          <NavBar
            toggled={ui.navBarToggled}
            onToggle={this.handleToggleNavBar}
            options={navBarOptions}
          />
          <main role="main" className="container">
            <Switch>
              <Route
                path="/dish/:dish/recipes"
                render={this.renderDishRecipePage}
              />
              <Route path="/" render={this.renderDashboard} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  handleToggleNavBar = () => {
    const { dispatch } = this.props;
    dispatch(uiActions.toggleNavBar());
  };

  renderDishRecipePage = routerProps => {
    return <DishRecipes {...routerProps} />;
  };

  renderDashboard = routerProps => {
    const { dishData } = this.props;
    return <Dashboard {...routerProps} dishes={dishData.dishes} />;
  };

  loadDishData = dishPermalink => {
    const { dispatch } = this.props;
    dispatch(dishActions.getDishByPermalink(dishPermalink));
  };
}

const mapStateToProps = ({ dishReducer, uiReducer, shoppingListReducer }) => ({
  dishData: dishReducer,
  ui: uiReducer,
  shoppingList: shoppingListReducer
});

export default connect(mapStateToProps)(App);
