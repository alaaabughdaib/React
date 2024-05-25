export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId,
  });
  
  export const updateTotalAmount = (total) => ({
    type: 'UPDATE_TOTAL_AMOUNT',
    payload: total,
  });
  