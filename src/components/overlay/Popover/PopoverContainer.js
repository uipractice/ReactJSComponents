import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import PopoverComponent from './PopoverComponent';
import '../../../App.css';

function PopoverContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});
  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Popover'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <PopoverComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default PopoverContainer;