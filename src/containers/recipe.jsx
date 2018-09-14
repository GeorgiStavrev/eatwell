import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Actions
import { actions as dishActions } from "../actions/dish";
import { actions as recipeActions } from "../actions/recipe";

// Components
import DishCard from "../components/dishCard";
import EmbededVideo from "../components/embededVideo";

class Recipe extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const dishPermalink = this.props.match.params.dish;

    dispatch(dishActions.getDishByPermalink(dishPermalink));
    dispatch(recipeActions.getRecipesByDishPermalink(dishPermalink));
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { dishData, recipeData } = this.props;
    const recipePermalink = this.props.match.params.recipe;

    const selectedRecipe =
      dishData && recipeData && recipeData.recipes
        ? recipeData.recipes.find(
            recipe => recipe.permalink === recipePermalink
          )
        : null;

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
          <div className="col-8">
            {selectedRecipe ? (
              <div>
                <div className="row">
                  <h2>{selectedRecipe.name}</h2>
                </div>
                <div className="row">
                  <EmbededVideo videoUrl={selectedRecipe.videoUrl} />
                </div>
                <div className="row">
                  <ul>
                    {selectedRecipe.ingredients.map(i => (
                      <li key={i.name}>
                        {i.name} {i.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="row">{selectedRecipe.description}</div>
              </div>
            ) : (
              <Redirect to="/404" />
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

export default connect(mapStateToProps)(Recipe);
