import svc from "../services/fakeMenuService";

export const types = {
    GOT_ALL_MENUS: "GOT_ALL_MENUS",
    LOADING_ERROR: "LOADING_ERROR"
};


const getAllMenus = () => {
    return async dispatch => {
        const menus = await svc.getMenus();
        if (menus) {
            dispatch(gotAllMenus(menus));
        } else {
            dispatch(loadingError());
        }
    };
};

const loadingError = () => {
    return {
        type: types.loadingError
    }
}

const gotAllMenus = menus => {
    return {
        type: types.GOT_ALL_MENUS,
        payload: menus
    }
}

export const actions = {
    getAllMenus
}