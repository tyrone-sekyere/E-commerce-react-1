import React from 'react';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
/* import { useUserContext } from '../context/user_context'; */

const Nav = () => {
  const { openSidebar } = useProductsContext();
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className="sidebar-open-btn" onClick={openSidebar}>
          <FaBars size="30px" />
        </button>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Nav;
