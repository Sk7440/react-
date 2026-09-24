export const initialState = {
  cart: [],
  totalPrice: 0,
};

export function Reducerfunc(state, action) {
  console.log(state);
  
  console.log(action.type);
  
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find((ele) => ele.id === action.payload.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((ele) =>
          ele.id === action.payload.id
            ? { ...ele, quantity: ele.quantity + 1 }
            : ele
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
}