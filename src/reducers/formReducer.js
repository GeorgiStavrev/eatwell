import { types } from "../actions/form";
import _ from "lodash";

const defaultState = {};

export default (state = {}, action) => {
  const { type, payload } = action;

  if (state === undefined) {
    return defaultState;
  }

  switch (type) {
    case types.FIELD_CHANGED: {
      if (payload) {
        let formData = state[payload.form];
        if (formData === undefined) {
          formData = {};
          state[payload.form] = formData;
        }
        _.set(formData, payload.name, payload.value);
        return { ...state };
      }

      return { ...state };
    }
    case types.FORM_RESET: {
      state[payload.form] = payload.initialState;
      return { ...state };
    }
    default:
      return state;
  }
};
