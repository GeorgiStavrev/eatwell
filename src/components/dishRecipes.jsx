import React, { Component } from "react";

//Services
import { getDishByPermalink } from "../services/fakeDishService";
import { getDishRecipes } from "../services/fakeRecipeService";

//Components
import DishCard from "./dishCard";
import Recipes from "./recipes";

class DishRecipes extends Component {
  state = { dish: {}, recipes: [] };

  async componentDidMount() {
    const dish = await getDishByPermalink(this.props.match.params.dish);
    const recipes = await getDishRecipes(dish._id);
    this.setState({ dish, recipes });
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { onClickRecipe } = this.props;
    const { dish, recipes } = this.state;
    return (
      <React.Fragment>
        <div className="row mt-5">
          <button className="btn btn-primary btn-sm" onClick={this.handleBack}>
            &lt; Back
          </button>
        </div>
        <div className="row">
          <div className="col-4 mt-5">
            <DishCard dish={dish} showButton={false} />
          </div>
          <div className="col-auto">
            <Recipes
              dish={dish}
              items={recipes}
              onClickRecipe={onClickRecipe}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DishRecipes;
