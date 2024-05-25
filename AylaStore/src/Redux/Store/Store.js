import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk directly

// Import your reducers
import cartReducer from '../Reducers/cartReducer'; // Import your cart reducer
// Import other reducers if you have them

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
});

// Create the Redux store with the root reducer and apply middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;
