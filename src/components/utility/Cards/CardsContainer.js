import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import CardsComponent from './CardsComponent';
import '../../../App.css';

function CardsContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});
  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Cards'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar  onToggleSidebar={handleToggleSidebar}/>
        </div>
        <CardsComponent  isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default CardsContainer;