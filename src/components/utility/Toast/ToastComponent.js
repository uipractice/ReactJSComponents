import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbToast, RbToastCode } from './RbToast';
import { MatToast, MatToastCode } from './MatToast';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';


function ToastComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Toasts</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbToast /> : <MatToast />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbToastCode /> : <MatToastCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ToastComponent;