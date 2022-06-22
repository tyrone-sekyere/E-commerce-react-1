import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  LOAD_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const initialState = {
  cart_items: [],
  cart_total: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart_items]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    dispatch({ type: LOAD_CART, payload: cart });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product, color, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { product, color, amount } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const changeItemAmount = (id, change) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, change } });
    dispatch({ type: COUNT_CART_TOTALS });
  };
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, changeItemAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
