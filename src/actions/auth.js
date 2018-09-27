import svc from "../services/userService";

export const types = {
    REGISTER: "REGISTER",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGOUT: "LOGOUT",
    SET_CURRENT_USER: "SET_CURRENT_USER"
};


const login = user => {
    console.log('LOGIN:' + user);
    console.log(user);
    return async dispatch => {
        const res = await svc.login(user);
        const currentUser = svc.getCurrentUser();
        console.log(res);
        console.log(currentUser);
        if (res && currentUser) {
            dispatch(loginSuccess(currentUser));
        } else {
            dispatch(loginFailure());
        }
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
    login
};