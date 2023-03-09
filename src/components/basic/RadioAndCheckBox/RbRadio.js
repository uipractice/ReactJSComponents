import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Prism from "prismjs";
import '../../prism.css';

function RbRadio() {
  return (
    <div className='demo-wrapper'>
      <div className='toggle-button-wrapper'>
        <div style={{ marginBottom: '5px' }}>Radio Buttons</div>
        <Form>
          <Form.Check
            custom="true"
            type="radio"
            inline
            name='selection1'
            id="custom-radio1"
            label="Radio button 1"
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio2"
            label="Radio button 2"
            name='selection1'
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio3"
            label="Radio button 3"
            name='selection1'
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio4"
            label="Disabled Radio Button"
            disabled
          />
        </Form>

        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Check Boxes</div>
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 1"
          id="custom-checkbox1"
        />
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 2"
          id="custom-checkbox2"
        />
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 3"
          id="custom-checkbox3"
        />
        <Form.Check
          custom="true"
          disabled
          inline
          type="checkbox"
          label="Disabled Checkbox"
          id="custom-disabled-checkbox"
        />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Radio button is component used to select a option from a group, Only one radio button in a group can be selected at the same time.
          Checkboxes are used to let a user select one or more options of a limited number of choices.
        </p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component, for radio button and checkbox: <code>import Form from 'react-bootstrap/Form';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbRadioCode() {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import Form from 'react-bootstrap/Form';

function RbRadio() {
  return (`}
  </code>
  <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div className='toggle-button-wrapper'>
        <div style={{ marginBottom: '5px' }}>Radio Buttons</div>
        <Form>
          <Form.Check
            custom="true"
            type="radio"
            inline
            name='selection1'
            id="custom-radio1"
            label="Radio button 1"
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio2"
            label="Radio button 2"
            name='selection1'
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio3"
            label="Radio button 3"
            name='selection1'
          />
          <Form.Check
            custom="true"
            type="radio"
            inline
            id="custom-radio4"
            label="Disabled Radio Button"
            disabled
          />
        </Form>

        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Check Boxes</div>
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 1"
          id="custom-checkbox1"
        />
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 2"
          id="custom-checkbox2"
        />
        <Form.Check
          custom="true"
          inline
          type="checkbox"
          label="Checkbox 3"
          id="custom-checkbox3"
        />
        <Form.Check
          custom="true"
          disabled
          inline
          type="checkbox"
          label="Disabled Checkbox"
          id="custom-disabled-checkbox"
        />
      </div>
    </div>
    `}
    </code>
    <code className='language-javascript'>{`
  );
}
 export default RbRadio;`}</code>
      </pre>
    </div>
  );
}

export { RbRadio, RbRadioCode };