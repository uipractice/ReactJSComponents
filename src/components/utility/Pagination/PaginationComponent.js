import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbPagination, RbPaginationCode } from './RbPagination';
import { MatPagination, MatPaginationCode } from './MatPagination';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function PaginationComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Pagination</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbPagination/> : <MatPagination/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbPaginationCode/> : <MatPaginationCode/> }
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default PaginationComponent;