import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import CarouselsComponent from './CarouselsComponent';
import '../../../App.css';

function CarouselssContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Carousel'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar  onToggleSidebar={handleToggleSidebar} />
        </div>
        <CarouselsComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default CarouselssContainer;