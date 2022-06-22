import React from 'react';
import './CartContent.scss';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart_items, clearCart } = useCartContext();
  return (
    <div className="cart-content-section">
      <div className="cart-columns-container">
        <div className="cart-columns">
          <p className="item">item</p>
          <p>price</p>
          <p>quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="divider"></div>
      </div>
      <div className="items-list">
        {cart_items.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="divider"></div>
      <div className="btns-container">
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button className="btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals items={cart_items} />
    </div>
  );
};

export default CartContent;
