import React from 'react';
import './PageHero.scss';
import { Link } from 'react-router-dom';
const PageHero = ({ page, singleProduct }) => {
  return (
    <section className="page-hero">
      <div className="hero-container">
        <h3>
          <Link to="/">Home </Link>{' '}
          {singleProduct && <Link to="/products">/ Products</Link>} / {page}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
