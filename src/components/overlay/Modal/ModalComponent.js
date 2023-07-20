import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbModal, RbModalCode } from './RbModal';
import { MatModal, MatModalCode } from './MatModal';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function ModalComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Modal</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbModal /> : <MatModal />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbModalCode /> : <MatModalCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ModalComponent;