import React from 'react';
import './Stars.scss';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars = 0, reviews }) => {
  const icons = [];

  if (stars > 0) {
    for (let i = 0; i < 5; i++) {
      if (stars >= 0.5) {
        icons.push(<BsStarFill />);
        stars--;
      } else if (stars > 0 && stars < 0.5) {
        icons.push(<BsStarHalf />);
        stars--;
      } else {
        icons.push(<BsStar />);
      }
    }
  }
  return (
    <div className="reviews-container">
      {icons.map((icon, index) => {
        return (
          <span key={index} className="stars">
            {icon}
          </span>
        );
      })}
      <p>({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
