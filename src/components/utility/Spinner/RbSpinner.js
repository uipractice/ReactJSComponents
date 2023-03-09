import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';

function RbSpinner() {
  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom:'10px'}}>Spinner with <code>animation</code> prop as <code>border</code></div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

      <div style={{marginBottom:'10px', marginTop:'10px'}}>Spinner with <code>animation</code> prop as <code>grow</code></div>
      <Spinner animation="grow" />

      <div style={{marginBottom:'10px', marginTop:'10px'}}>Border Spinner Variants with different <code>variant</code> prop values. i.e., <code>primary,secondary,success etc., </code></div>
      <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
      </>
      <div style={{marginBottom:'10px', marginTop:'10px'}}>Grow Spinner Variants with different <code>variant</code> prop values. i.e., <code>primary,secondary,success etc., </code></div>
      <>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </>
      <div style={{marginBottom:'10px', marginTop:'10px'}}>Spinners inside Buttons</div>
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Spinner Component, Spinners can be used to show the loading state in our Applications.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Popover: <code>import Spinner from 'react-bootstrap/Spinner';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
      </ul>
      </div>
    </div>
  );
}

function RbSpinnerCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
              <h4>React Bootstrap code</h4>
              <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-javascript'>{`// Border Spinner
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";

function RbSpinner() {
  return (
    `}
    </code>
    <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div style={{marginBottom:'10px'}}>Spinner with <code>animation</code> prop as <code>border</code></div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

      <div style={{marginBottom:'10px', marginTop:'10px'}}>Spinner with <code>animation</code> prop as <code>grow</code></div>
      <Spinner animation="grow" />

      <div style={{marginBottom:'10px', marginTop:'10px'}}>Border Spinner Variants with different <code>variant</code> prop values. i.e., <code>primary,secondary,success etc., </code></div>
      <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
      </>
      <div style={{marginBottom:'10px', marginTop:'10px'}}>Grow Spinner Variants with different <code>variant</code> prop values. i.e., <code>primary,secondary,success etc., </code></div>
      <>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </>
      <div style={{marginBottom:'10px', marginTop:'10px'}}>Spinners inside Buttons</div>
      <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    </div>
    `}
    </code>
    <code className='language-javascript'>{`
  );
}
export default RbSpinner;`}
                </code>
              </pre>
    </div>
  );
}

export { RbSpinner, RbSpinnerCode};