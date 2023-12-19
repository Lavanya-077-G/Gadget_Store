import { createStore } from 'redux';

const initialState = {
  cartItems: [],
  popupMessage: '',
  showPopup: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        popupMessage: `${action.payload.name} added to the cart!`,
        showPopup: true,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case 'CLOSE_POPUP':
      return {
        ...state,
        showPopup: false,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
