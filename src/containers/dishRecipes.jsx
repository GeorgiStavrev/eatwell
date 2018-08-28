import React, { Component } from "react";
import { connect } from "react-redux";

import { dishActions } from "../actions/dish";
import { recipeActions } from "../actions/recipe";

//Components
import DishCard from "../components/dishCard";
import Recipes from "../components/recipes";

class DishRecipes extends Component {
  state = { dish: {}, recipes: [] };

  async componentDidMount() {
    const { dispatch, dishData } = this.props;
    const dishPermalink = this.props.match.params.dish;

    dispatch(dishActions.getDishByPermalink(dishPermalink));
    dispatch(recipeActions.getRecipesByDishPermalink(dishPermalink));
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { dishData, recipeData, onClickRecipe } = this.props;

    return (
      <React.Fragment>
        <div className="row mt-5">
          <button className="btn btn-primary btn-sm" onClick={this.handleBack}>
            &lt; Back
          </button>
        </div>
        <div className="row">
          <div className="col-4 mt-5">
            {dishData && dishData.dish ? <DishCard dish={dishData.dish} /> : ""}
          </div>
          <div className="col-auto">
            {dishData && dishData.dish && recipeData && recipeData.recipes ? (
              <Recipes dish={dishData.dish} items={recipeData.recipes} />
            ) : (
              ""
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ dishReducer, recipeReducer }) => ({
  dishData: dishReducer,
  recipeData: recipeReducer
});

export default connect(mapStateToProps)(DishRecipes);
