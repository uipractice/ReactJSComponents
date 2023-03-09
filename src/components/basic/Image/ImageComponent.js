import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import { MatImage, MatImageCode } from './MatImage';
import { RbImage, RbImageCode } from './RbImage';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ImageComponent(props) {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  const handleChange = (ev) => ev === 'react' ? setMatview(false) : setMatview(true);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Image</h3>
      <ToggleView
        onChange={handleChange}
        isViewResized={props.isViewResized}
      />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbImage /> : <MatImage/>}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbImageCode /> : <MatImageCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ImageComponent;