import React, { useState, useEffect }from 'react';
import ToggleView from '../../util/ToggleView';
import { RbToggle, RbToggleCode } from './RbToggle';
import { MatToggle, MatToggleCode } from './MatToggle';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';


function ToggleButtonComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Toggle Button</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbToggle/> : <MatToggle />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbToggleCode /> : <MatToggleCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ToggleButtonComponent;