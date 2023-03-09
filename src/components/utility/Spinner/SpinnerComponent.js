import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbSpinner, RbSpinnerCode} from './RbSpinner';
import { MatSpinner, MatSpinnerCode } from './MatSpinner';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function SpinnerComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0), []);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Spinner</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
        />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbSpinner/> : <MatSpinner/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbSpinnerCode/> : <MatSpinnerCode/>}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SpinnerComponent;