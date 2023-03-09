import React, { useState } from 'react';
import classNames from 'classnames';
import './SideBarToggle.css';
import navigateBeforeRight from '../../images/navigateBeforeRight.svg';
import navigateBeforeLeft from '../../images/navigateBeforeLeft.svg';


function SideBarToggle(props) {
  const [icon, setIcon] = useState(false);

  const onSetIcon = () => {
    setIcon(!icon);
    props.onSidebarToggle(icon);
  };

  const sideBarToggleClasses = classNames({sideBarToggle: !icon}, { sideToggled: icon});

  return (
    <div className='side-bar-toggle' onClick={onSetIcon}>
      <div className={sideBarToggleClasses} style={{position: 'fixed'}}>
        {/* { !icon ? <i className="fa fa-angle-left"></i> : 
          <i className="fa fa-angle-right"></i> }  */}
        { !icon ? <img className='navigation-right-icon' src={navigateBeforeRight} alt='left-navigation' /> : 
          <img className='navigation-left-icon' src={navigateBeforeLeft} alt='right-navigation' /> } 
      </div>
    </div>
  )
}

export default SideBarToggle;