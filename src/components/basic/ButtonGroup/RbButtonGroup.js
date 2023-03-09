import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Prism from "prismjs";
import '../../prism.css';

function RbButtonGroup() {
  return (
    <div className='demo-wrapper'>
      <div>Basic Button group example</div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup><br /><br />
      <div>Button toolbarButton</div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="Second group">
          <Button>5</Button> <Button>6</Button> <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <div>
        <div>Sizing: Add <code>size</code> prop to the <code>&lt;ButtonGroup&gt;</code></div>
        <ButtonGroup size="lg" className="mb-2">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div><br />
      <div>
        <div>Nesting: Can place other button types within the <code>&lt;ButtonGroup&gt;</code> like <code>&lt;DropdownButton&gt;</code>.</div>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Button Group is a Component which can be used in various use cases, above are the basic buttongroup for actions in forms and more with support for multiple sizes, states, and more.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import Button from 'react-bootstrap/Button'</code></li>
          <code>import ButtonGroup from 'react-bootstrap/ButtonGroup';</code>
          <br />
          <code>import ButtonToolbar from 'react-bootstrap/ButtonToolbar';</code>
          <br />
          <code>import DropdownButton from 'react-bootstrap/DropdownButton';</code>
          <br />
          <code>import Dropdown from 'react-bootstrap/Dropdown';</code>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of different variations of the Button Group.</li>
        </ul>
      </div>
    </div>

  );
}
function RbButtonGroupCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className=' language-javascript'>
          {`import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function RbButtonGroup() {
  return (`}</code><code className='language-markup'>{`
      <div className='demo-wrapper'>
        <div>Basic Button group example</div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup><br /><br />
        <div>Button toolbarButton</div>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button>5</Button> <Button>6</Button> <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <br />
        <div>
          <div>Sizing: Add <code>size</code> prop to the <code>&lt;ButtonGroup&gt;</code></div>
          <ButtonGroup size="lg" className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup size="sm">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div><br />
        <div>
          <div>Nesting: Can place other button types within the <code>&lt;ButtonGroup&gt;</code> like <code>&lt;DropdownButton&gt;</code>.</div>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>`}</code><code className=' language-javascript'>{`
     );
}
    
export default RbButtonGroup;`}
        </code>
      </pre>
    </div>
  )
}
export { RbButtonGroup, RbButtonGroupCode };