import svc from "../services/userService";

export const types = {
  REGISTER: "REGISTER",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  SET_CURRENT_USER: "SET_CURRENT_USER"
};

const login = user => {
  console.log(user);
  return async dispatch => {
    const res = await svc.login(user);
    const currentUser = svc.getCurrentUser();
    if (res && currentUser) {
      dispatch(loginSuccess(currentUser));
    } else {
      dispatch(loginFailure());
    }
  };
};

const register = userData => {
  return async dispatch => {
    const regResult = await svc.register(userData);
    if (regResult) {
      const res = await svc.login({
        email: userData.email,
        password: userData.password
      });
      const currentUser = svc.getCurrentUser();
      if (res && currentUser) {
        dispatch(loginSuccess(currentUser));
      } else {
        dispatch(loginFailure());
      }
    }
  };
};

const loadFromStorage = () => {
  return async dispatch => {
    const currentUser = svc.getCurrentUser();
    if (currentUser) {
      dispatch(loginSuccess(currentUser));
    }
  };
};

const logout = () => {
  return async dispatch => {
    svc.logout();
    dispatch(logoutSuccess());
  };
};

const logoutSuccess = () => {
  return {
    type: types.LOGOUT,
    payload: null
  };
};

const loginSuccess = currentUser => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: currentUser
  };
};

const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
    payload: null
  };
};

// action creators
export const actions = {
  login,
  loadFromStorage,
  logout,
  register
};
