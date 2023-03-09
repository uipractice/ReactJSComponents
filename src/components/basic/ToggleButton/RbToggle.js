import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Prism from "prismjs";
import '../../prism.css';

function RbToggle() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Value 1 (pre-checked)', value: '1' },
    { name: 'Value 2', value: '2' },
  ];

  return (
    <div className='demo-wrapper'>
      <div className='toggle-button-wrapper'>
        <div style={{ marginBottom: '5px' }}>Switch type Toggle Button</div>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Toggle this switch"
          defaultChecked
        />
        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Disabled Switch type Toggle Button</div>
        <Form.Check
          disabled
          type="switch"
          label="Disabled Toggle switch"
          id="disabled-custom-switch"
        />
        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Normal Toggle Group Buttons</div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toggle Button is a component, which can be used to make decision i.e., true/false, user can make it turn on or off</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component, for switch type toggle: <code>import Form from 'react-bootstrap/Form';</code><br /> for Normal Button type toggle group <code>import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';</code><br /><code>
            import ToggleButton from 'react-bootstrap/ToggleButton';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>

      </div>
    </div>
  );
}

function RbToggleCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>
          {`
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function RbToggle() {
  return (`}
        </code>
        <code className='language-markup'>
          {`
    <div className='demo-wrapper'>
      <div className='toggle-button-wrapper'>
        <div style={{ marginBottom: '5px' }}>Switch type Toggle Button</div>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Toggle this switch"
          defaultChecked
        />
        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Disabled Switch type Toggle Button</div>
        <Form.Check
          disabled
          type="switch"
          label="Disabled Toggle switch"
          id="disabled-custom-switch"
        />
        <div style={{ marginBottom: '5px', marginTop: '5px' }}>Normal Toggle Group Buttons</div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={\`radio-\${idx}\`}
              type="radio"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>      
    </div>
  );
}
    `}
        </code>
        <code className='language-javascript'>
          {`
  );
}
export default RbToggle;`}
        </code>
      </pre>
    </div>
  );
}

export { RbToggle, RbToggleCode };