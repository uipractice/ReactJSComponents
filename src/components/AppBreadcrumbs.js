import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './AppBreadcrumbs.scss';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import AutoComplete from './util/AutoComplete';

const availableComponentRoutes = [
  { componentName: 'Button', path:'/button' },
  { componentName: 'Toggle Button', path:'/toggleButton' },
  { componentName: 'Input', path:'/input' },
  { componentName: 'Radio & Checkbox', path:'/radioButton' },
  { componentName: 'Dropdown', path:'/dropdown' },
  { componentName: 'Image', path:'/image' },
  { componentName: 'Tooltip', path:'/tooltip' },
  { componentName: 'Popover', path:'/popover' },
  { componentName: 'Modal', path:'/modal' },
  { componentName: 'Alert', path:'/alert' },
  { componentName: 'Spinner', path:'/spinner' },
  { componentName: 'Toast', path:'/toast' },
  { componentName: 'Basic Table', path:'/table' },
  { componentName: 'Tabs', path:'/tabs' },
  { componentName: 'Form', path:'/form' },
  { componentName: 'API Data Table', path:'/apidatatable' },
  { componentName: 'CRUD Table', path:'/editabletable' },
  { componentName: 'Filter Table', path:'/filtertable' },
  { componentName: 'Pagination Table', path:'/paginationtable' },
  { componentName: 'Sortable Table', path:'/sortabletable' },
  { componentName: 'Accordion', path:'/accordion' },
  { componentName: 'Breadcrumbs', path:'/breadcrumbs' },
  { componentName: 'Carousels', path:'/carousels' },
  { componentName: 'Progress', path:'/progress' },
  { componentName: 'Cards', path:'/cards' },
  { componentName: 'Pagination', path:'/pagination' },
  { componentName: 'Badge', path:'/badge' },
  { componentName: 'ButtonGroup', path:'/buttongroup' }
];

function AppBreadcrumbs(props) {
  const [ toggleSearch, setToggleSearch ] = useState(false);
  const [ selectedRoutes, setSelectedRoutes] = useState([]);
  const inputEl = useRef(null);
  const handleSearch = () => {
    setToggleSearch(!toggleSearch);
    setSelectedRoutes([]);
  };
  const searchIconClasses = classNames(
            'material-icons', 
            { componentSearch: !toggleSearch }, 
            { componentSearchToggled: toggleSearch }
          );
  const handleInputChanges = (ev) => {
    ev.persist()
    if(ev.target.value === '') {
      setSelectedRoutes([]);
      return;
    }
    const filteredRoutes = availableComponentRoutes.filter(item => 
        item.componentName.toLowerCase().includes(ev.target.value.toLowerCase()));
    console.log('filterdResults', filteredRoutes);
    setSelectedRoutes(filteredRoutes);
  };

  useEffect(() => {
    if(toggleSearch) {
      inputEl.current.children[0].focus();
    }
  },[toggleSearch]);

  return (
    <div className='app-breadcrumbs'>
      <Breadcrumbs 
        style={{marginTop: '-0.1px'}}
        separator={
          <NavigateNextIcon 
            fontSize="small" 
            style={{
              fontSize: '16px', 
              marginTop: '5px',
              marginLeft: '-8px'
            }} 
          />} aria-label="breadcrumb">
        <NavLink 
          to="/"
          activeClassName='breadLinkActive'
          style={{
            fontSize: '14px',
            color: 'rgb(0, 136, 209)',
            letterSpacing: '-0.01px'
          }}>
          Home
        </NavLink>
        <NavLink activeClassName='breadLinkActive' to="/" style={{fontSize: '14px', color: 'rgb(0, 136, 209)', marginLeft: '-5px'}}>
          React Components
        </NavLink>
        {props.compoName && 
          <NavLink 
            style={{
              fontSize: '14px', 
              marginLeft: '-5px',
              color: 'rgb(0, 136, 209)',
              pointerEvents: 'none'
            }} 
            to=''
            activeClassName='breadLinkActive'
          >
          {props.compoName}
        </NavLink>}
        <div style={{cursor: 'pointer'}}>
          <i className={searchIconClasses} onClick={handleSearch} disabled={toggleSearch}>search</i>
          { toggleSearch &&
             <Input
              ref={inputEl}
              id="standard-adornment"
              type='text'
              className='component-search-box'
              onChange={handleInputChanges}
              style={{
                fontSize: '14px',
                caretColor: '#039be5',
                padding: '15px 3px 13px 1px',
                textTransform: 'capitalize'
              }}
             endAdornment={
               <InputAdornment position="end">
                 <span 
                  className="material-icons closeIconClass"
                  onClick={handleSearch} 
                  >close</span>
               </InputAdornment>
             }
           />
          }
          { selectedRoutes.length > 0 ? <AutoComplete data={selectedRoutes}/> : null }
        </div>
      </Breadcrumbs>
      
    </div>
  );
}

export default AppBreadcrumbs;