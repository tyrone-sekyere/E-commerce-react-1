import React from 'react';
import './Product.scss';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <article className="single-product-card" key={id}>
      <div className="img-container">
        <img src={image} alt={name} />
        <div className="layer"></div>
        <Link to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <div className="product-title">
        <p>{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
      </div>
    </article>
  );
};

export default Product;
