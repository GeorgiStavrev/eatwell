export const types = {
  TOGGLE_NAV_BAR: "TOGGLE_NAV_BAR"
};

const toggleNavBar = () => {
  return { type: types.TOGGLE_NAV_BAR, payload: null };
};

export const uiActions = {
  toggleNavBar
};
