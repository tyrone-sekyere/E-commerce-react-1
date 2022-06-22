import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className="home-hero">
      <article className="home-hero-description">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure libero
          necessitatibus laboriosam at vitae cum obcaecati exercitationem,
          impedit sint maiores earum. Ut nulla a cupiditate aliquam voluptatum
          commodi accusantium temporibus.
        </p>
        <Link to="/products" className="btn">
          shop now
        </Link>
      </article>
      <article className="home-hero-images">
        <div className="images-background"></div>
        <img src={heroBcg} alt="living room" className="img-big" />
        <img src={heroBcg2} alt="man making furniture" className="img-small" />
      </article>
    </section>
  );
};

export default Hero;
