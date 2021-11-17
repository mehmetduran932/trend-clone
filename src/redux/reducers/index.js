const INITIAL_STATE = {
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (addedItem) {
        let newState = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return {
          ...state,
          cart: newState,
        };
      } else {
        return {
          ...state,
          cart: [action.payload, ...state.cart],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};