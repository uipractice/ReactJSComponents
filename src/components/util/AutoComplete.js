import React from 'react';
import { NavLink } from 'react-router-dom';
import './AutoComplete.css';

function AutoComplete({ data }) {
  return (
    <div className='auto-complete-contanier'>
      <div className='auto-complete-panel'>
        { data.map((item) => (<div className='auto-option-contanier' key={item.componentName}>
            <span className='auto-option-text'>
              <NavLink
                style={{textDecoration: 'none'}} 
                className='auto-text-link' 
                to={item.path}>
                  {item.componentName}
              </NavLink>
            </span>
        </div>))
        } 
      </div>
    </div>
  );
}

export default AutoComplete;