import React, { useEffect, useState } from 'react';
import ToggleView from '../../util/ToggleView';
import { RbBreadcrumbs, RbBreadcrumbsCode } from './RbBreadcrumbs';
import { MatBreadcrumbs, MatBreadcrumbsCode } from './MatBreadcrumbs';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function BreadcrumbsComponent(props) {
  const [ matview, setMatview ] = useState(false);
  useEffect(()=> window.scrollTo(0,0));

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Breadcrumbs</h3>
      <ToggleView 
        onChange={(ev) => (ev === 'react') ? setMatview(false) : setMatview(true)}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbBreadcrumbs/> : <MatBreadcrumbs/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbBreadcrumbsCode/> : <MatBreadcrumbsCode/> }
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default BreadcrumbsComponent;