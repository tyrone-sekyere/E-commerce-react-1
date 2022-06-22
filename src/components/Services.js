import React from 'react';
import './Services.scss';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <section className="services-section">
      <div className="section-center">
        <div className="services-header">
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolore sit non ut consequatur hic neque, sint iste quasi nobis,
            soluta ipsam, aspernatur distinctio dignissimos.
          </p>
        </div>
        <div className="services-cards">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="single-card">
                <div className="icon-container">{icon}</div>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
