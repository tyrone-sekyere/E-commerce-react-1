import React, { useEffect } from 'react';
import './SingleProductPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push('/');
      }, 3000);
      return <Error />;
    }
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
    colors,
  } = singleProduct;
  return (
    <>
      <div className="single-product-page">
        <PageHero page={name} singleProduct />
        <div className="single-product-container">
          <Link to="/products" className="btn">
            back to products
          </Link>
          <div className="image-description-container">
            <ProductImages images={images} />
            <div className="single-product-description">
              <h2>{name}</h2>

              <Stars stars={stars} reviews={reviews} />
              <h4 className="price">{formatPrice(price)}</h4>
              <p className="description">{description}</p>
              <div className="product-specs">
                <p className="product-specs-question">Availability :</p>
                <p className="product-specs-answer">{stock && 'in stock'}</p>
              </div>
              <div className="product-specs">
                <p className="product-specs-question">SKU :</p>
                <p className="product-specs-answer">{sku}</p>
              </div>
              <div className="product-specs">
                <p className="product-specs-question">Brand :</p>
                <p className="product-specs-answer">{company}</p>
              </div>
              <div className="divider"></div>
              {stock > 0 && (
                <AddToCart colors={colors} product={singleProduct} id={sku} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
