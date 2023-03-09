import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbDropdown, RbDropdownCode } from './RbDropdown';
import { MatDropdown, MatDropdownCode } from './MatDropdown';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import './DropDownComponent.css';

function DropDownComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));
  
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Dropdown</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbDropdown /> : <MatDropdown/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbDropdownCode /> : <MatDropdownCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default DropDownComponent;