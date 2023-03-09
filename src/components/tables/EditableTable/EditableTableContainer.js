import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import EditableTableComponent from './EditableTableComponent';
import '../../../App.css';

const EditableTableContainer= () => {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView})

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='CRUD Table'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar}/>
        </div>
        <EditableTableComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default EditableTableContainer;