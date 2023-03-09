import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { MatButtonGroup, MatButtonGroupCode } from './MatButtonGroup';
import { RbButtonGroup, RbButtonGroupCode } from './RbButtonGroup';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ButtonGroupComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  const handleChange = (ev) => ev === 'react' ? setMatview(false) : setMatview(true);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Button Group</h3>
      <ToggleView
        onChange={handleChange}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbButtonGroup /> : <MatButtonGroup />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbButtonGroupCode /> : <MatButtonGroupCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ButtonGroupComponent;