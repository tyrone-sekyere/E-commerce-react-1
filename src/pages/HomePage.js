import React from 'react';
import './HomePage.scss';
import {
  FeaturedProducts,
  Hero,
  Services,
  Newsletter,
  Loading,
} from '../components';
const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </div>
  );
};

export default HomePage;
