import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import BasicTableComponent from './BasicTableComponent';
import '../../../App.css';

function BasicTableContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>z
      <Header />
      <AppBreadcrumbs compoName='Basic Table'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <BasicTableComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default BasicTableContainer;