import { types } from "../actions/dishes";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.RECEIVE_DISH: {
      return { ...state, dish: payload };
    }
    case types.DISH_NOT_FOUND: {
      return {
        ...state,
        error: `Dish not found id ${payload.dishId} permalink ${
          payload.permalink
        }`
      };
    }
    case types.RECEIVED_DISH_LIST: {
      console.log("RECEIVED_DISH_LIST");
      return { ...state, dishes: payload };
    }
    default:
      return state;
  }
};
