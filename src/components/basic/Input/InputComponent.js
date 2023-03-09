import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { MatInput, MatInputCode } from './MatInput';
import { RbInput, RbInputCode } from './RbInput';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import '../Button/ButtonComponent.css';
import './InputComponent.css';

function InputComponent(props) {
    const [ matview, setMatview ] = useState(false);
    useEffect(()=> window.scrollTo(0,0));
    return (
      <div className='btnCompoWrap'>
        <h3 className='btn-title'>Input</h3>
        <ToggleView 
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <div className='step-tabs-wrapper'>
          <Tabs defaultActiveKey="demo" id="code-demo-tab">
            <Tab eventKey="demo" title="Demo">
             {!matview ? <RbInput /> : <MatInput/>}
            </Tab>
            <Tab eventKey="code" title="Code">
              { !matview ? <RbInputCode />: <MatInputCode /> }
            </Tab>
          </Tabs>
        </div>
      </div>
    );
}

export default InputComponent;