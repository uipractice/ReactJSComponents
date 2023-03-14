import React, { useState } from 'react';
import classNames from 'classnames';
import DropDownComponent from './DropDownComponent';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import '../../../App.css';

function DropDownContainer() {
  const [expandView, setExpandView] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView });

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Dropdown' />
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <DropDownComponent isViewResized={expandView} />
      </div>
      <Footer />
    </>
  );
}

export default DropDownContainer;