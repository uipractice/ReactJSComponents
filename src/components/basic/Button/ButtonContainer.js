import React, { useState } from 'react';
import classNames from 'classnames';
import ButtonComponent from './ButtonComponent';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import Header from '../../Header';
import Footer from '../../Footer';
import SideBar from '../../SideBar';
import './ButtonContainer.css';
import '../../../App.css';

function ButtonContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});
  // const isBasicOpen = JSON.parse(localStorage.getItem('isBasicOpen'));
  // const isUtilOpen = JSON.parse(localStorage.getItem('isUtilOpen'));
  // const isOverlayOpen = JSON.parse(localStorage.getItem('isOverlayOpen'));
  // const isTableOpen = JSON.parse(localStorage.getItem('isTableOpen'));
  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Button'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar 
            onToggleSidebar={handleToggleSidebar}
          />
        </div>
        <ButtonComponent isViewResized={expandView}/>
      </div>
      <Footer />
    </>
  );
}

export default ButtonContainer;