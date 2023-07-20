import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbRadio, RbRadioCode } from './RbRadio';
import { MatRadio, MatRadioCode } from './MatRadio';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function RadioButtonComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>{`Radio & Checkbox`}</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbRadio /> : <MatRadio />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbRadioCode /> : <MatRadioCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default RadioButtonComponent;