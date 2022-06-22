import React from 'react';
import './CartPage.scss';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart_items } = useCartContext();
  return (
    <div className="cart-page">
      <PageHero page="cart" />
      <section className="cart-center">
        {cart_items.length > 0 ? (
          <CartContent />
        ) : (
          <div className="empty-cart">
            <h1>Your cart is empty </h1>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default CartPage;
