import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbBasicTable, RbBasicTableCode } from './RbBasicTable';
import { MatBasicTable, MatBasicTableCode } from './MatBasicTable';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function BasicTableComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Basic Table</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbBasicTable /> : <MatBasicTable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbBasicTableCode /> : <MatBasicTableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default BasicTableComponent;