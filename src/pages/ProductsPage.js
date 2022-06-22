import React from 'react';
import './ProductsPage.scss';
import {
  Filters,
  ProductList,
  /* Error, */
  Sort,
  PageHero,
  /* Loading, */
} from '../components';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <PageHero page={'products'} />
      <div className="products-page-center">
        <Filters />
        <div className="all-products">
          <Sort />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
