import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';

function RbButton(){
  return (
    <div className='demo-wrapper'>
      <div>Styled Buttons with different values for variant prop.  i.e., <code>variant="primary"</code></div>
        <br />
    
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '} <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '} <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        <br />
        <br />
      <div>Outline Buttons with no background color, with different values for variant prop. i.e., <code>variant="outline-primary"</code></div>
      <br/>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
      <br />
      <br />
      <div> Buttons with sizes with <code>size</code> prop. i.e <code>size="lg"/"sm"</code></div>
      <br />
      <Button variant="primary" size="lg">Large button</Button>{' '}
      <Button variant="secondary" size="sm">Small button</Button>
      <br />
      <br />
      <div> Active and Disabled state Buttons with <code>active/disabled</code> prop</div>
      <br />
      <Button variant="primary" size="lg" active>Active button</Button>{' '}
      <Button variant="primary" size="lg" disabled>Disabled button</Button>
      <br />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Button is a Component which can be used in various use cases, above are the custom buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h5>Steps</h5>
        <ul>

          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import Button from 'react-bootstrap/Button'</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of different variations of the Button.</li>
      </ul>
      </div>
    </div>
  );
}

function RbButtonCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className=' language-javascript'>
          {`
import React from 'react';
import Button from 'react-bootstrap/Button';

function RbButton(){
  return (
    `}
    </code>
    <code className=' language-markup'>
          {`
    <div className='demo-wrapper'>
      <div>Styled Buttons with different values for variant prop.  i.e., <code>variant="primary"</code></div>
        <br />
    
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '} <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '} <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        <br />
        <br />
      <div>Outline Buttons with no background color, with different values for variant prop. i.e., <code>variant="outline-primary"</code></div>
      <br/>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
      <br />
      <br />
      <div> Buttons with sizes with <code>size</code> prop. i.e <code>size="lg"/"sm"</code></div>
      <br />
      <Button variant="primary" size="lg">Large button</Button>{' '}
      <Button variant="secondary" size="sm">Small button</Button>
      <br />
      <br />
      <div> Active and Disabled state Buttons with <code>active/disabled</code> prop</div>
      <br />
      <Button variant="primary" size="lg" active>Active button</Button>{' '}
      <Button variant="primary" size="lg" disabled>Disabled button</Button>
      <br />
    </div>
    `}
    </code>
    <code className=' language-javascript'>
          {`
  );
}
export default Button;`}
        </code>
      </pre>
    </div>
  );
}

export { RbButton, RbButtonCode };