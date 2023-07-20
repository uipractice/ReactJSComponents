import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbProgress, RbProgressCode } from './RbProgress';
import { MatProgress, MatProgressCode } from './MatProgress';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function ProgressComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Progress</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbProgress /> : <MatProgress />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbProgressCode /> : <MatProgressCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProgressComponent;