import React, { useState,useEffect } from 'react';
import { RbTabs, RbTabsCode } from './RbTabs';
import { MatTabs, MatTabsCode } from './MatTabs';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function TabsComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Tabs</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
        />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbTabs/> : <MatTabs/> }
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbTabsCode/> : <MatTabsCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsComponent;