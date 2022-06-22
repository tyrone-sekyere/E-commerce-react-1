import React from 'react';
import './CheckoutPage.scss';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const CheckoutPage = () => {
  const { cart_total } = useCartContext();
  return (
    <>
      <PageHero page="checkout" />
      <div className="checkout-page">
        <h4>Hello </h4>
        <p>Your total is {formatPrice(cart_total)}</p>
        <form>
          <input type="text" placeholder="Card number" />
          <button type="submit">Pay</button>
        </form>
      </div>
    </>
  );
};

export default CheckoutPage;
