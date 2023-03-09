import React, { useState } from 'react';
import classNames from 'classnames';
import AppHeader from './components/AppHeader';
import SideBar from './components/SideBar';
import Header from './components/Header';
// import Routing from './Routing';
import Footer from './components/Footer';
import AppBreadcrumbs from './components/AppBreadcrumbs';
import './App.css';

function App() {
  const [ expandView, setExpandView ] = useState(false);

  const handleToggleSidebar = (value) => {
    setExpandView(!value);
  };
  const classes = classNames('App', { appExpand: expandView});
  return (<>
    <div>

      <Header />

      <AppBreadcrumbs/>
      <div className={classes}>
        <div className='sideBar' style={{height: '1400px'}}>
          <SideBar onToggleSidebar={handleToggleSidebar}/>
        </div>
        <AppHeader />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
