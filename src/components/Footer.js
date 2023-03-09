import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <div className="container-fluid">
        <ul>
          <li>Evoke Technologies Pvt Ltd. All Rights Reserved</li>
          <li><a className='footer-link-item' href="mailto:uiuxpractice@evoketechnologies.com?subject=Feedback">Provide Feedback </a></li>
          <li className='footer-link-item'><span>|</span></li>
          <li><a className='footer-link-item' href="mailto:uiuxpractice@evoketechnologies.com?subject=Request for a new component"> Request Component </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;