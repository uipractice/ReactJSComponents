import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbEditableTable, RbEditableTableCode } from './RbEditableTable'
import { MatEditableTable, MatEditableTableCode } from './MatEditableTable';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

const EditableTableComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>CRUD Table</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbEditableTable /> : <MatEditableTable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbEditableTableCode /> : <MatEditableTableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default EditableTableComponent;