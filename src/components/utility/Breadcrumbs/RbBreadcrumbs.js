import React, { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Breadcrumbs.css';
import Prism from "prismjs";
import '../../prism.css';

function RbBreadcrumbs() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Breadcrumbs</strong></div><br />
      <Breadcrumb style={{ width: "80%" }}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <div className='compo-description'>
        <h4>Description</h4>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Breadcrumb: <code>import Breadcrumb from 'react-bootstrap/Breadcrumb';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbBreadcrumbsCode() {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function RbBreadcrumbs() {
  return (
    `}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div><strong>Simple Breadcrumbs</strong></div><br/>
      <Breadcrumb style={{width: "80%"}}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    `}
        </code>
        <code className='language-javascript'>{`
    );
}
export default RbBreadcrumbs;
        `}
        </code>
      </pre>
    </div>
  );
}

export { RbBreadcrumbs, RbBreadcrumbsCode };