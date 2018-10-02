import { types } from "../actions/auth";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccess: true,
        currentUser: payload
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        loginSuccess: false
      };
    }
    case types.LOGOUT: {
      return { ...state, loginSuccess: false, currentUser: null };
    }
    default:
      return state;
  }
};
