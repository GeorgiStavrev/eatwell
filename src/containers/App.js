import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { dishActions } from "../actions/dish";
import { uiActions } from "../actions/ui";

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
  }

  render() {
    const { ui } = this.props;
    return (
      <BrowserRouter>
        <div>
          <NavBar
            toggled={ui.navBarToggled}
            onToggle={this.handleToggleNavBar}
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

const mapStateToProps = ({ dishReducer, uiReducer }) => ({
  dishData: dishReducer,
  ui: uiReducer
});

export default connect(mapStateToProps)(App);
