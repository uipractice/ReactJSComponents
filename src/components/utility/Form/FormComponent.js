import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbForm, RbFormCode } from './RbForm'
import { MatForm, MatFormCode } from './MatForm';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

const FormComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Forms</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbForm /> : <MatForm />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbFormCode /> : <MatFormCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default FormComponent;