import { types } from "../actions/shoppingList";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOADING: {
      return { ...state, loading: true };
    }
    case types.LOADED_ALL: {
      return { ...state, loading: false, items: payload };
    }
    default:
      return state;
  }
};
