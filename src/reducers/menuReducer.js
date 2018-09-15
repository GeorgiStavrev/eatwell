import {
    types
} from "../actions/menu";

export default (state = {}, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case types.GOT_ALL_MENUS:
            {
                return { ...state,
                    menus: payload
                };
            }
        case types.LOADING_ERROR:
            {
                return {
                    ...state,
                    error: `Loading error ${payload}`
                };
            }
        default:
            return state;
    }
};