import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {currentYear} MAPPLEFLIX. All rights reserved.</p>
          </div>
          
          <div className="footer-right">
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/disclaimer" className="footer-link">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
<div id="container-dc1492619050697ee754228485b103a6"></div>
    </footer>
  );
};

export default Footer;
