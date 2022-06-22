import React from 'react';
import './GridView.scss';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <div className="grid-view">
      {products.map((product) => {
        return <Product product={product} key={product.id}></Product>;
      })}
    </div>
  );
};

export default GridView;
