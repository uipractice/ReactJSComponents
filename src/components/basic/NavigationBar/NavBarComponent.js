import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbNavBar, RbNavBarCode } from './RbNavBar';
import { MatNavBar, MatNavBarCode } from './MatNavBar';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';


function NavBarComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));
  
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Navigation Bar</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbNavBar /> : <MatNavBar/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbNavBarCode /> : <MatNavBarCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default NavBarComponent;