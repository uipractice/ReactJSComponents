import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbTooltip, RbTooltipCode } from './RbTooltip';
import { MatTooltip, MatTooltipCode } from './MatTooltip';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function TooltipComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Tooltip</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbTooltip/> : <MatTooltip />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbTooltipCode/> : <MatTooltipCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TooltipComponent;