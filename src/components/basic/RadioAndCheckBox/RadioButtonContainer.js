import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import RadioButtonComponent from './RadioButtonComponent';
import '../../../App.css';

function RadioButtonContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Radio & Checkbox'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <RadioButtonComponent isViewResized={expandView}/>
      </div>
      <Footer/>
    </>
  );
}

export default RadioButtonContainer;