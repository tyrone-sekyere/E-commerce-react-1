import React from 'react';
import './AboutPage.scss';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageHero page={'about'} />
      <section className="about-container">
        <img src={aboutImg} alt="living room" />
        <div className="about-description">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            vitae tempora voluptatibus suscipit voluptates animi sit, totam
            aliquid obcaecati debitis nihil dolor velit ipsum ea itaque
            aspernatur autem! Sit soluta ea eum? Architecto sunt dolore ducimus
            maiores magnam deleniti ipsa, aliquam numquam accusantium modi.
            Illum ullam voluptate, enim omnis qui facere inventore veritatis
            quasi tenetur at dignissimos quisquam. Voluptas incidunt et dolor
            itaque voluptatem. Quos doloribus cum fugiat eos debitis!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
