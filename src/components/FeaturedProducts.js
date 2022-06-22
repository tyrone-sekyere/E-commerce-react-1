import React from 'react';
import './FeaturedProducts.scss';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const { featured_products, products_loading, products_error } =
    useProductsContext();

  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return (
      <section className="featured-products-section">
        <div className="container">
          <h2>Featured Products</h2>
          <Error />
        </div>
      </section>
    );
  }

  return (
    <section className="featured-products-section">
      <div className="container">
        <h2>Featured Products</h2>

        <div className="featured-products">
          {featured_products.slice(0, 3).map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
        <Link to="/products" className="btn">
          all products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
