import svc from "../services/fakeRecipeService";
import dishSvc from "../services/fakeDishService";
import configureStore from "../store";

export const types = {
  RECIPES_FOUND: "RECIPES_FOUND",
  LOADING_RECIPES: "LOADING_RECIPES"
};

const getRecipesByDishPermalink = dishPermalink => {
  return async dispatch => {
    dispatch(setLoadingRecipes(true));
    const dish = await dishSvc.getDishByPermalink(dishPermalink);
    if (dish) {
      const recipes = await svc.getDishRecipes(dish._id);
      if (recipes) {
        dispatch(recipesFound(recipes));
      } else {
        console.log("no recipes found");
      }
    } else {
      console.log("no dish with permalink", dishPermalink);
    }
    dispatch(setLoadingRecipes(false));
  };
};

const getRecipesByDishId = dishId => {
  return async dispatch => {
    dispatch(setLoadingRecipes(true));
    const recipes = await svc.getDishRecipes(dishId);
    if (recipes) {
      dispatch(recipesFound(recipes));
    } else {
      console.log("no recipes found");
    }
    dispatch(setLoadingRecipes(false));
  };
};

const setLoadingRecipes = isOn => {
  return { type: types.LOADING_RECIPES, payload: isOn };
};

const recipesFound = recipes => {
  return { type: types.RECIPES_FOUND, payload: recipes };
};

export const recipeActions = {
  getRecipesByDishId,
  getRecipesByDishPermalink
};
