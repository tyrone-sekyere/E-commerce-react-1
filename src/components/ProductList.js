import React from 'react';
import './ProductList.scss';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();
  return (
    <section className="product-list">
      {grid_view ? (
        <GridView products={filtered_products} />
      ) : (
        <ListView products={filtered_products} />
      )}
    </section>
  );
};

export default ProductList;
