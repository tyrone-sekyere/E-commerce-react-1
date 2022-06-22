import React from 'react';
import './CartButtons.scss';
import { FaShoppingCart, /* FaUserMinus, */ FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
/* import { useUserContext } from '../context/user_context'; */

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { cart_items } = useCartContext();
  return (
    <div className="cart-login-btn">
      <Link to="/cart" className="cart-link" onClick={closeSidebar}>
        Cart
        <span className="cart-icon">
          <FaShoppingCart />
        </span>
        <span className="cart-count">{cart_items.length}</span>
      </Link>
      <button className="login-btn" onClick={closeSidebar}>
        Login
        <FaUserPlus className="login-icon" />
      </button>
    </div>
  );
};

export default CartButtons;
