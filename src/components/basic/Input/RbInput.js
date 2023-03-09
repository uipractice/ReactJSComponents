import React, { useEffect } from 'react';
import Prism from "prismjs";
import '../../prism.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function RbInput() {
  return (
    <div className='demo-wrapper'>
      <div className='input-group-wrapper'>
        <div style={{ marginBottom: '5px' }}>Normal Input:</div>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <br />
        <div style={{ marginBottom: "5px" }}>Input with Prepended Symbol</div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>Input with apended text</div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>
          Input with prepended and apended text
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>

          <Form.Control aria-label="Amount (to the nearest dollar)" />

          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>Input with TextArea</div>
        <InputGroup>
          <InputGroup.Text>Add Notes</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Input is component is can be used to take user inputs in form fileds, it can be configured based on the data we require. like we shown in the demo fields.</p>
        <h5>Steps</h5>
        <ul>

          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import FormControl from 'react-bootstrap/FormControl'</code></li>
          <li><strong>Step 3</strong> If we require to use prepend/append controls in the input: <code>import InputGroup from 'react-bootstrap/InputGroup'</code></li>
          <li><strong>Step 4 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbInputCode() {
  useEffect(() => Prism.highlightAll(), [])
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function RbInput() {
  return (
    `}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div className='input-group-wrapper'>
        <div style={{ marginBottom: '5px' }}>Normal Input:</div>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <br />
        <div style={{ marginBottom: "5px" }}>Input with Prepended Symbol</div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>Input with apended text</div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>
          Input with prepended and apended text
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>

          <Form.Control aria-label="Amount (to the nearest dollar)" />

          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <div style={{ marginBottom: "5px" }}>Input with TextArea</div>
        <InputGroup>
          <InputGroup.Text>Add Notes</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>
    </div>
    `}
        </code>
    <code className='language-javascript'>{`
  );
}export default RbInput;       
        `}
        </code>
      </pre>
    </div>
  );
}

export { RbInput, RbInputCode };