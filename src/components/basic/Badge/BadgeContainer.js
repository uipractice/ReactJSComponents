import React, { useState } from 'react';
import classNames from 'classnames';
import BadgeComponent from './BadgeComponent';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import Header from '../../Header';
import Footer from '../../Footer';
import SideBar from '../../SideBar';
import './BadgeComponent.css';
import '../../../App.css';

function BadgeContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});
  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Badge'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar 
            onToggleSidebar={handleToggleSidebar}
          />
        </div>
        <BadgeComponent isViewResized={expandView}/>
      </div>
      <Footer />
    </>
  );
}

export default BadgeContainer;