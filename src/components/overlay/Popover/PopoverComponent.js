import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbPopover, RbPopoverCode } from './RbPopover';
import { MatPopover, MatPopoverCode } from './MatPopover';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';


function PopoverComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Popover</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbPopover /> : <MatPopover />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbPopoverCode /> : <MatPopoverCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default PopoverComponent;
