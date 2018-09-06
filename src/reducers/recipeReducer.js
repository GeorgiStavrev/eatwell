import { types } from "../actions/recipe";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOADING_RECIPES: {
      return { ...state, loadingRecipes: payload };
    }
    case types.RECIPES_FOUND: {
      return {
        ...state,
        recipes: payload
      };
    }
    case types.SELECTED_RECIPE: {
      return {
        ...state,
        selectedRecipe: payload
      };
    }
    default:
      return state;
  }
};
