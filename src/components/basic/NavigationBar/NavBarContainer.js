import React, { useState } from 'react';
import classNames from 'classnames';
import NavBarComponent from './NavBarComponent';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import '../Button/ButtonContainer.css';
import '../../../App.css';

function NavBarContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='NavBar'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar}/>
        </div>
        <NavBarComponent isViewResized={expandView} />
      </div>
      <Footer />
    </>
  );
}

export default NavBarContainer;