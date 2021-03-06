import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
/* import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react'; */
/* dev-hnyzhixf.eu.auth0.com */
/* XgmOzMMs0l5Y9DMWJvOgtcpTdX30pTm0 */

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </ProductsProvider>,
  document.getElementById('root')
);
