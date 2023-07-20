import React, { useState, useEffect } from 'react';
import { RbAlert, RbAlertCode } from './RbAlert';
import { MatAlert, MatAlertCode } from './MatAlert';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function AlertComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Alert</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbAlert /> : <MatAlert />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbAlertCode /> : <MatAlertCode></MatAlertCode>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AlertComponent;