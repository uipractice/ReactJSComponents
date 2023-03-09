import React, { useState } from 'react';
import classNames from 'classnames';
import ButtonGroupComponent from './ButtonGroupComponent';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import Header from '../../Header';
import Footer from '../../Footer';
import SideBar from '../../SideBar';
import './ButtonGroupComponent.css';
import '../../../App.css';

function ButtonGroupContainer() {
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
      <AppBreadcrumbs compoName='ButtonGroup'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar 
            onToggleSidebar={handleToggleSidebar}
          />
        </div>
        <ButtonGroupComponent isViewResized={expandView}/>
      </div>
      <Footer />
    </>
  );
}

export default ButtonGroupContainer;