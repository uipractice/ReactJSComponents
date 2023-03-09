import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { MatBadge, MatBadgeCode } from './MatBadge';
import { RbBadge, RbBadgeCode } from './RbBadge';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './BadgeComponent.css';

function BadgeComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  const handleChange = (ev) => ev === 'react' ? setMatview(false) : setMatview(true);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Badge</h3>
      <ToggleView
        onChange={handleChange}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbBadge /> : <MatBadge />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbBadgeCode /> : <MatBadgeCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default BadgeComponent;