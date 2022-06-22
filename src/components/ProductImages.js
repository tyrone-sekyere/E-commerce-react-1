import React, { useState } from 'react';
import './ProductImages.scss';

const ProductImages = ({ images = [[]] }) => {
  const [mainImage, setMainImage] = useState(images[0].url);

  const handleClick = (url) => {
    setMainImage(url);
  };

  return (
    <section className="images-container">
      <img src={mainImage} alt="main" className="main-image" />
      <div className="small-images-container">
        {images.map((img, index) => {
          const { url } = img;

          return (
            <img
              src={url}
              key={index}
              alt="product"
              className={`small-images ${mainImage === url && 'active'}`}
              onClick={() => handleClick(url)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
