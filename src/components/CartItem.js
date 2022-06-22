import React from 'react';
import './CartItem.scss';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
const CartItem = ({
  item: { name, full_price, single_price, color, image, amount, id },
}) => {
  const { removeItem, changeItemAmount } = useCartContext();
  return (
    <article className="single-cart-item">
      <div className="cart-item-info">
        <img src={image} alt={name} />
        <div className="item-specs">
          <div className="name-price">
            <h5 className="single-item-name">{name}</h5>
            <p>Color :</p>
            <div
              className="cart-item-color"
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div>
          <h5 className="cart-item-price">{formatPrice(single_price)}</h5>
        </div>
      </div>
      <p className="cart-item-price-big">{formatPrice(single_price)}</p>
      <AmountButtons
        amount={amount}
        increase={() => changeItemAmount(id, 'increase')}
        decrease={() => changeItemAmount(id, 'decrease')}
      />
      <p className="full-price">{formatPrice(full_price)}</p>
      <button className="trash-btn">
        <FaTrash
          className="trash-icon"
          onClick={() => removeItem('recEHmzvupvT8ZONH')}
        />
      </button>
    </article>
  );
};

export default CartItem;
