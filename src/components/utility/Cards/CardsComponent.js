import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbCards, RbCardsCode } from './RbCards';
import { MatCards, MatCardsCode } from './MatCards';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function CardsComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Cards</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbCards/> : <MatCards/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbCardsCode/> : <MatCardsCode/> }
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CardsComponent;