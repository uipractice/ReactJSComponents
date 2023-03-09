import React, { useState } from 'react';
import './ComponentCard.css';

function ComponentCard(props) {
  const [logo, setLogo] = useState(props.logoSrc);

  return (
    <div 
      className='component-card' 
      onMouseEnter={() => setLogo(props.hovLogo)} 
      onMouseLeave={() => setLogo(props.logoSrc)}>
      <img src={logo} className='compo-logo' alt='react-logo'/>
      <div className='component-title'>{props.title}</div>
      <div className='component-desc'>{props.desc}</div>
    </div>
  );
}

export default ComponentCard;