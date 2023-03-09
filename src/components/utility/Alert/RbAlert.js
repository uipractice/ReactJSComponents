import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Prism from "prismjs";
import '../../prism.css';

function RbAlert() {
  const [show, setShow] = useState(false);
  const [ showsecond, setShowsecond] = useState(false);
  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom:'10px'}}>{`Alert with Heading & Body Text`}</div>
      <div style={{marginRight: '20px'}}>
        {
          show ? 
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert> :
            <Button onClick={() => setShow(true)}>Show Alert</Button>
        }
      </div>
      
      <div style={{marginBottom:'10px', marginTop:'10px'}}>{`Alert with body and button control`}</div>
      <div style={{marginRight: '20px'}}>
        <Alert show={showsecond} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowsecond(false)} variant="outline-success">
              Click to Close Me!
            </Button>
          </div>
        </Alert>

        {!showsecond && <Button variant="secondary" onClick={() => setShowsecond(true)}>Show Alert</Button>}
      </div>
      <div style={{marginBottom:'10px', marginTop:'10px'}}>{`Alert Types with Link(Alert.Link) in it`}</div>
      {
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant} style={{marginRight: '20px'}}>
            This is a {variant} alert with{' '}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
            like.
          </Alert>
        ))
      }
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Alert Component, Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Alert: <code>import Alert from 'react-bootstrap/Alert';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbAlertCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
// Alert with Heading & Body Text
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  if (show) {
    return (`}</code>
    <code className='language-markup'>{`
      <Alert variant="danger" onClose={handleClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={handleShow}>Show Alert</Button>;
}`}</code>
<code className='language-javascript'>{`

// Alert with body and button control
function AlertDismissible() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (`}</code>
  <code className='language-markup'>{`
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={handleShow}>Show Alert</Button>}`}</code>
    <code className='language-javascript'>{`
  );
}
export {AlertDismissibleExample,AlertDismissible};`}</code>
  </pre>
  </div>
  );
}

export { RbAlert, RbAlertCode };