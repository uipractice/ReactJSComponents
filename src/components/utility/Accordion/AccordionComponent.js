import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbAccordion, RbAccordionCode } from './RbAccordion';
import { MatAccordion, MatAccordionCode } from './MatAccordion';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function AccordionComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Accordion</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbAccordion /> : <MatAccordion />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbAccordionCode /> : <MatAccordionCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AccordionComponent;