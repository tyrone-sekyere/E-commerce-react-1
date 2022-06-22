import React from 'react';
import './ListView.scss';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
const ListView = ({ products }) => {
  return (
    <div className="list-view">
      {products.map((product) => {
        const { id, price, name, image, description } = product;
        return (
          <article className="list-product" key={id}>
            <img src={image} alt={name} />
            <div className="list-product-text">
              <h4>{name}</h4>
              <p className="list-price">{formatPrice(price)}</p>
              <p className="description">{description.slice(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
