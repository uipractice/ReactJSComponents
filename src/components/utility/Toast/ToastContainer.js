import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import ToastComponent from './ToastComponent';
import '../../../App.css';

function ToastContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});
  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Toast'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <ToastComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default ToastContainer;