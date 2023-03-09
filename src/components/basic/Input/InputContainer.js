import React, { useState }  from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import InputComponent from './InputComponent';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import '../../../App.css';


function InputContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Input'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar}/>
        </div>
        <InputComponent isViewResized={expandView} />
      </div>
      <Footer />
    </>
  );
}

export default InputContainer;