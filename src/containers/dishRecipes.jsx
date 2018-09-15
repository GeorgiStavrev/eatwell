import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { actions as dishActions } from "../actions/dish";
import { actions as recipeActions } from "../actions/recipe";

// Components
import DishCard from "../components/dishCard";
import Recipes from "../components/recipes";

class DishRecipes extends Component {
  state = { dish: {}, recipes: [] };

  async componentDidMount() {
    const { dispatch } = this.props;
    const dishPermalink = this.props.match.params.dish;

    dispatch(dishActions.getDishByPermalink(dishPermalink));
    dispatch(recipeActions.getRecipesByDishPermalink(dishPermalink));
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  handleShowVideo = recipeId => {
    const { recipeData, dispatch } = this.props;
    const recipes = recipeData.recipes;

    if (recipes) {
      const recipe = recipes.find(r => r._id === recipeId);

      if (recipe) {
        dispatch(recipeActions.selectRecipe(recipe));
      }
    }
  };

  render() {
    const { dishData, recipeData } = this.props;

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
              <Recipes
                dish={dishData.dish}
                items={recipeData.recipes}
                selected={recipeData.selectedRecipe}
                onClickRecipe={this.handleShowVideo}
              />
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
