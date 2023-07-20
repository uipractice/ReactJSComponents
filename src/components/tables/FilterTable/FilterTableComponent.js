import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbFilterTable, RbFilterTableCode } from './RbFilterTable'
import { MatFilterTable, MatFilterTableCode } from './MatFilterTable';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

const FilterTableComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Filter Table</h3>
      <div className='step-tabs-wrapper'>
        <ToggleView
          onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbFilterTable /> : <MatFilterTable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbFilterTableCode /> : <MatFilterTableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default FilterTableComponent;