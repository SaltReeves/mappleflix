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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6585857350615324"
     crossorigin="anonymous"></script>
      <script
  type="text/javascript"
  src="https://pl28280829.effectivegatecpm.com/34/4c/a3/344ca35c1cf65a133be4402831b5fc25.js"
></script>
<script type="text/javascript">
  atOptions = {
  	'key' : '358ed44009501c12ea99fe4d15d885be',
  	'format' : 'iframe',
  	'height' : 250,
  	'width' : 300,
  	'params' : {}
  };
</script>
<script
  type="text/javascript"
  src="https://www.highperformanceformat.com/358ed44009501c12ea99fe4d15d885be/invoke.js"
></script>
<script
  async="async"
  data-cfasync="false"
  src="https://pl28280844.effectivegatecpm.com/dc1492619050697ee754228485b103a6/invoke.js"
></script>
<div id="container-dc1492619050697ee754228485b103a6"></div>
    </footer>
  );
};

export default Footer;
