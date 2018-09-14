import svc from "../services/fakeShoppingListService";

export const types = {
  LOADED_ALL: "LOADED_ALL",
  LOADING: "LOADING"
};

const loadAllItems = () => {
  return async dispatch => {
    dispatch(loading());
    const items = await svc.getAllItems();
    dispatch(loadedAllItems(items));
  };
};

const loading = () => {
  return { type: types.LOADING, payload: null };
};

const loadedAllItems = items => {
  return { type: types.LOADED_ALL, payload: items };
};

export const actions = {
  loadAllItems
};
