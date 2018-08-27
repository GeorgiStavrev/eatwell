export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      //console.log("Action", action.type, action.payload);
      return {
        ...state,
        simple: action.payload
      };
    default:
      return state;
  }
};
