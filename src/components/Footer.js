import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span> All rights reserved
      </p>
    </div>
  );
};

export default Footer;
