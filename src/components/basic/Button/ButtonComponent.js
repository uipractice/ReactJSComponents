import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { MatButton, MatButtonCode } from './MatButton';
import { RbButton, RbButtonCode } from './RbButton';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './ButtonComponent.css';

function ButtonComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  const handleChange = (ev) => ev === 'react' ? setMatview(false) : setMatview(true);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Button</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={handleChange}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbButton /> : <MatButton />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbButtonCode /> : <MatButtonCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ButtonComponent;