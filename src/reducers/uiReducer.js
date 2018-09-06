import { types } from "../actions/ui";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.TOGGLE_NAV_BAR: {
      const { navBarToggled } = state;
      const navBarShouldBeToggled = navBarToggled ? false : true;
      return { ...state, navBarToggled: navBarShouldBeToggled };
    }
    default:
      return state;
  }
};
