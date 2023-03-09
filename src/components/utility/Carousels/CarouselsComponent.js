import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbCarousels, RbCarouselsCode } from './RbCarousels';
import { MatCarousels, MatCarouselsCode } from './MatCarousels';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function CarouselsComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Carousels</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbCarousels/> : <MatCarousels/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbCarouselsCode/> : <MatCarouselsCode/> }
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CarouselsComponent;