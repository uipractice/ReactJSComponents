import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import Prism from "prismjs";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../../prism.css';


function RbDropdown() {
  return (
    <div className='demo-wrapper'>
      <div style={{ marginBottom: '5px', marginTop: '5px' }}>Single Button Menu Dropdown</div>
      <DropdownButton key='someKey' id="dropdown-basic-button" title="Dropdown Menu">
        <Dropdown.Item href="#/action-1" key='action-1'>Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2" key='action-2'>Another Option</Dropdown.Item>
        <Dropdown.Item href="#/action-3" key='action-3'>Something else</Dropdown.Item>
      </DropdownButton>

      <div style={{ marginBottom: '5px', marginTop: '5px' }}>Dropdown Menu Buttons with multiple variants</div>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={uuid()}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
            style={{ marginRight: '10px' }}
          >
            <Dropdown.Item eventKey="1" key={uuid()}>Action</Dropdown.Item>
            <Dropdown.Item eventKey="2" key={uuid()}>Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" key={uuid()} active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider key={uuid()} />
            <Dropdown.Item eventKey="4" key={uuid()}>Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )}
      <div style={{ marginBottom: '5px', marginTop: '5px' }}>Split Button Dropdown Menu</div>
      <Dropdown key='someOtherKey' as={ButtonGroup}>
        <Button variant="success">Split Button</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" key='act1'>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2" key='act2'>Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3" key='act3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className='compo-description'>
        <h4>Description</h4>
        <p>Drop-down menu is a menu that offers a list of option, user can choose from those options to navigate/route to specific menu.
        </p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import Dropdown and DropdownButton components: <code>import Dropdown from 'react-bootstrap/Dropdown';</code><br />
            <code>import DropdownButton from 'react-bootstrap/DropdownButton';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbDropdownCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`      
import React, from 'react';
import uuid from 'react-uuid';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function RbDropdown() {
  return(`}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div style={{marginBottom: '5px', marginTop: '5px'}}>Single Button Menu Dropdown</div>
      <DropdownButton key='someKey' id="dropdown-basic-button" title="Dropdown Menu">
        <Dropdown.Item href="#/action-1" key='action-1'>Option 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2" key='action-2'>Another Option</Dropdown.Item>
        <Dropdown.Item href="#/action-3" key='action-3'>Something else</Dropdown.Item>
      </DropdownButton>

      <div style={{marginBottom: '5px', marginTop: '5px'}}>Dropdown Menu Buttons with multiple variants</div>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={uuid()}
              id={dropdown-variants-${'variant'}}
              variant={variant.toLowerCase()}
              title={variant}
              style={{marginRight: '10px'}}
            >
              <Dropdown.Item eventKey="1" key={uuid()}>Action</Dropdown.Item>
              <Dropdown.Item eventKey="2"  key={uuid()}>Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" key={uuid()}active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider  key={uuid()}/>
              <Dropdown.Item eventKey="4"  key={uuid()}>Separated link</Dropdown.Item>
            </DropdownButton>
        ),
      )}
      <div style={{marginBottom: '5px', marginTop: '5px'}}>Split Button Dropdown Menu</div>
      <Dropdown key='someOtherKey' as={ButtonGroup}>
        <Button variant="success">Split Button</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" key='act1'>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2" key='act2'>Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3" key='act3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    `}
        </code>
        <code className='language-javascript'>{` 
  );
}  
export default Dropdown;
        `}</code>
      </pre>
    </div>
  );
}

export { RbDropdown, RbDropdownCode };