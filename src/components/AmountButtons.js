import React from 'react';
import './AmountButtons.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="amount-btns">
      <FaMinus className="change-amount" onClick={decrease} />
      <h2>{amount}</h2>
      <FaPlus className="change-amount" onClick={increase} />
    </div>
  );
};

export default AmountButtons;
