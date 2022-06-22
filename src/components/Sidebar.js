import React from 'react';
import './Sidebar.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
/* import { useUserContext } from '../context/user_context'; */

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar sidebar-show' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Comfy Sloth Logo" onClick={closeSidebar} />
        <FaTimes cursor="pointer" onClick={closeSidebar} />
      </div>
      <ul className="sidebar-links">
        {links.map((links) => {
          return (
            <li key={links.id}>
              <Link to={links.url} onClick={closeSidebar}>
                {links.text}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="/checkout" onClick={closeSidebar}>
            checkout
          </Link>
        </li>
      </ul>
      <CartButtons />
    </aside>
  );
};

export default Sidebar;
