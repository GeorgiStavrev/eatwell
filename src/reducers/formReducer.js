import { types } from "../actions/form";
import _ from "lodash";

const defaultState = { data: {} };

export default (state = {}, action) => {
  const { type, payload } = action;

  if (state.data === undefined) {
    return defaultState;
  }

  switch (type) {
    case types.FIELD_CHANGED: {
      const { data } = state;
      let forms = { data };
      if (forms === undefined) {
        forms = {};
      }

      if (payload) {
        let formData = forms[payload.form];
        if (formData === undefined) {
          formData = {};
          forms[payload.form] = formData;
        }
        _.set(formData, payload.name, payload.value);
        return { ...state, data: forms };
      }

      return { ...state };
    }
    default:
      return state;
  }
};
