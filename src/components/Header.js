import React from 'react';
import './Header.css';
import Evoke_logo from '../images/Evoke_logo.png';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (
    <div className='app-logo-header navbar navbar-expand-lg navbar-expand-md bg-white fixed-top'>
      <a className="navbar-brand" href="/">
        <img src={Evoke_logo} 
          width="215.53" 
          height="35" 
          alt="" 
          style={{marginLeft: '16px', marginBottom: '1px', width:'215.53px'}} 
        />
      </a>
      <ul id="navb" className="app-nav-margin navbar-nav my-2 my-md-0">
        <li className="nav-item">
          <a href="http://angular-components.evokeapps.com/"><img src="images/icons-03.svg" alt="" />Angular Components</a>
        </li>
        <li className="nav-item active">
          <a href="/" style={{paddingBottom: '16.5px'}}><img src="images/icons-02.svg" alt="" />React Components</a>
        </li>
        <li className="nav-item">
          <a href="http://ui-components.evokeapps.com/"><img src="images/icons-01.svg" alt="" />UI Components</a>
        </li>
        <li className="nav-item">
          <a href="http://components.evokeapps.com/styleguide/EvokeStyleGudie.pdf">Style guides</a>
        </li>
        <li className="nav-item">
          <a href="http://components.evokeapps.com/design_system/EvokeDesignSystem.pdf"> <img src="images/icons-05.svg" alt="" />Design System
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;