import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Sorry, the page you tried to find cannot be found</h2>
      <Link to="/">back home</Link>
    </div>
  );
};

export default ErrorPage;
