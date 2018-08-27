import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//Services
import { getDishes } from "./services/fakeDishService";

//Components
import DishRecipes from "./components/dishRecipes";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { simpleAction } from "./actions/simpleAction";
import { dishActions } from "./actions/dishes";

class App extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(dishActions.getAllDishes());
  }

  handleTestRedux = () => {
    const { dispatch } = this.props;
    dispatch(simpleAction());
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main role="main" className="container">
            <button
              className="btn bnt-primary btn-sm"
              onClick={this.handleTestRedux}
            >
              Test Redux {this.props.simple}
            </button>
            <Switch>
              <Route
                path="/dish/:dish/recipes"
                render={props => (
                  <DishRecipes
                    {...props}
                    onClickRecipe={this.handleShowVideo}
                  />
                )}
              />
              <Route path="/" render={props => <Dashboard {...props} />} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  handleShowVideo = recipeId => {
    console.log(recipeId);
    const recipe = this.state.recipes.find(r => r._id === recipeId);
    if (recipe) {
      const recipes = [...this.state.recipes];
      recipes.map(r => (r.videoShown = false));
      const idx = recipes.indexOf(recipe);
      recipes[idx].videoShown = true;
      this.setState({ recipes });
    }
  };
}

const mapStateToProps = ({ dishReducer, simpleReducer }) => ({
  dishData: dishReducer,
  simple: simpleReducer.simple
});

export default connect(mapStateToProps)(App);
