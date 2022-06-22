import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-text">
        <h3>Join our newsletter and get 20% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut in
          quibusdam excepturi accusamus aut aperiam explicabo minus quia
          doloribus!
        </p>
      </div>
      <form action="https://formspree.io/f/mvolyqyl" method="POST">
        <input type="email" name="email" placeholder="Enter Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
