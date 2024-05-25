const initialState = {
    cartItems: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case 'UPDATE_TOTAL_AMOUNT':
        return {
          ...state,
          totalAmount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  