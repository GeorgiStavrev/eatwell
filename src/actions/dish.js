import svc from "../services/fakeDishService";

export const types = {
  GET_DISH_BY_PERMALINK: "GET_DISH_BY_PERMALINK",
  RECEIVED_DISH_LIST: "RECEIVED_DISH_LIST",
  GET_ALL_DISHES: "GET_ALL_DISHES",
  RECEIVE_DISH: "RECEIVE_DISH",
  DISH_NOT_FOUND: "DISH_NOT_FOUND"
};

const getAllDishes = () => {
  return async dispatch => {
    const dishes = await svc.getDishes();
    if (dishes) {
      dispatch(receiveDishList(dishes));
    } else {
      console.log("getAllDishes: NO DISHES FOUND");
    }
  };
};

const getDishByPermalink = permalink => {
  return async dispatch => {
    const dish = await svc.getDishByPermalink(permalink);
    if (dish) {
      dispatch(receiveDish(dish));
    } else {
      dispatch(dishNotFound(null, permalink));
    }
  };
};

const receiveDishList = dishes => {
  return { type: types.RECEIVED_DISH_LIST, payload: dishes };
};

const receiveDish = dish => {
  return { type: types.RECEIVE_DISH, payload: dish };
};

const dishNotFound = (dishId, permalink) => {
  return { type: types.DISH_NOT_FOUND, payload: { dishId, permalink } };
};

// action creators
export const actions = {
  getAllDishes,
  receiveDishList,
  getDishByPermalink,
  receiveDish,
  dishNotFound
};
