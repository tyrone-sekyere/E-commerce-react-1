import React, { useState } from 'react';
import './AddToCart.scss';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ colors = '', product }) => {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const { addToCart } = useCartContext();
  const changeColor = (idx) => {
    setActiveColor(colors[idx]);
  };

  const increase = () => {
    setAmount(amount + 1);
  };
  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  return (
    <section className="add-to-cart-section">
      <div className="colors">
        <p className="">Colors :</p>
        {colors &&
          colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`color ${color === activeColor && 'active-color'}`}
                style={{ backgroundColor: color }}
                onClick={() => changeColor(index)}
              >
                <FaCheck className="color-checkmark" />
              </div>
            );
          })}
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link
        to="/cart"
        className="btn"
        onClick={() => addToCart(product, activeColor, amount)}
      >
        ADD TO CART
      </Link>
    </section>
  );
};

export default AddToCart;
