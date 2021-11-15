const INITIAL_STATE = {
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
