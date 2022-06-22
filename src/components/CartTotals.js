import React from 'react';
import './CartTotals.scss';
import { useCartContext } from '../context/cart_context';
/* import { useUserContext } from '../context/user_context'; */
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { cart_total } = useCartContext();
  return (
    <>
      <section className="cart-totals-section">
        <h5>
          Subtotal : <span>{formatPrice(cart_total)}</span>
        </h5>
        <p>
          Shipping Fee : <span>$5.55</span>
        </p>
        <div className="divider"></div>
        <h4>
          Order Total <span>{formatPrice(cart_total + 555)}</span>
        </h4>
      </section>
      <Link to="/checkout" className="btn checkout-btn">
        go to checkout
      </Link>
    </>
  );
};

export default CartTotals;
