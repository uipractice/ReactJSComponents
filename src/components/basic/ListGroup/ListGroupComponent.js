import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbListGroup, RbListGroupCode } from './RbListGroup';
import { MatListGroup, MatListGroupCode } from './MatListGroup';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
// import './ListGroupComponent.css';

function ListGroupComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>ListGroup</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbListGroup /> : <MatListGroup />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbListGroupCode /> : <MatListGroupCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ListGroupComponent;