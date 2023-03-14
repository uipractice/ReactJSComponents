import React, { useEffect } from 'react';
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Prism from "prismjs";
import '../../prism.css';
function RbBadge() {
  return (
    <div className='demo-wrapper'>
      <div>
        <b>Notification Indication Badge with multiple variants</b>
        <br></br>
        <Button variant="secondary">Primary<Badge bg="primary">10</Badge></Button>{" "}
        <Button variant="secondary">Secondary<Badge bg="secondary">10</Badge></Button>{" "}
        <Button variant="secondary">Success<Badge bg="success">10</Badge></Button>{" "}
        <Button variant="secondary">Danger<Badge bg="danger">10</Badge></Button>{" "}
        <Button variant="secondary">Warning<Badge bg="warning">10</Badge></Button>{" "}
        <Button variant="secondary">Light<Badge bg="light" text="dark">10</Badge></Button>{" "}
      </div>
      <br />
      <div>
        <b>Pill Type Badge with multiple variants</b>
        <br></br>
        <Badge pill bg="primary">
          Primary
        </Badge>{' '}
        <Badge pill bg="secondary">
          Secondary
        </Badge>{' '}
        <Badge pill bg="success">
          Success
        </Badge>{' '}
        <Badge pill bg="danger">
          Danger
        </Badge>{' '}
        <Badge pill bg="warning" text="dark">
          Warning
        </Badge>{' '}
        <Badge pill bg="info">
          Info
        </Badge>{' '}
        <Badge pill bg="light" text="dark">
          Light
        </Badge>{' '}
        <Badge pill bg="dark">
          Dark
        </Badge>
      </div>
      <br />
      <div>
        <b>Contextual Badge with multiple variants</b>
        <br></br>
        <Badge bg="primary">Primary variant</Badge>{" "}
        <Badge bg="secondary">Secondary variant</Badge>{" "}
        <Badge bg="success">Success variant</Badge>{" "}
        <Badge bg="danger">Danger variant</Badge>{" "}
        <Badge bg="warning">Warning variant</Badge>{" "}
        <Badge bg="info">Info variant</Badge>{" "}
        <Badge bg="light" text="dark">Light variant</Badge>{" "}
        <Badge bg="dark">Dark variant </Badge>
      </div>
      <br />
      <div>
        <b>Use of badges in normal text</b>
        <br></br>
        <Badge bg="primary">primary badge variant</Badge>{" "}
        <Badge bg="secondary">secondary badge variant</Badge>{" "}
        <Badge bg="success">success badge variant</Badge>{" "}
        <Badge bg="danger">danger badge variant</Badge>{" "}
        <Badge bg="warning">warning badge variant</Badge>{" "}
        <Badge bg="info">info badge variant</Badge>{" "}
        <Badge bg="dark">dark badge variant</Badge>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Badge is a Component which can be used in various use cases, above are the custom badges for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h4>Steps</h4>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import Button from 'react-bootstrap/Button'</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import Badge from 'react-bootstrap/Badge'</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of different variations of the Badge.</li>
        </ul>
      </div>
    </div>
  );
}

function RbBadgeCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className=' language-javascript'>
          {`
import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export function RdBadge() {
return (`}</code><code className="language-markup">{`
  <div className='demo-wrapper'>
    <div>
      <b>Notification Indication Badge with multiple variants</b>
      <br></br>
      <Button variant="secondary">Primary<Badge bg="primary">10</Badge></Button>{" "}
      <Button variant="secondary">Secondary<Badge bg="secondary">10</Badge></Button>{" "}
      <Button variant="secondary">Success<Badge bg="success">10</Badge></Button>{" "}
      <Button variant="secondary">Danger<Badge bg="danger">10</Badge></Button>{" "}
      <Button variant="secondary">Warning<Badge bg="warning">10</Badge></Button>{" "}
      <Button variant="secondary">Light<Badge bg="light" text="dark">10</Badge></Button>{" "}
    </div>
    <br />
    <div>
      <b>Pill Type Badge with multiple variants<b>
      <br></br>
      <Badge pill bg="primary">
          Primary
        </Badge>{' '}
        <Badge pill bg="secondary">
          Secondary
        </Badge>{' '}
        <Badge pill bg="success">
          Success
        </Badge>{' '}
        <Badge pill bg="danger">
          Danger
        </Badge>{' '}
        <Badge pill bg="warning" text="dark">
          Warning
        </Badge>{' '}
        <Badge pill bg="info">
          Info
        </Badge>{' '}
        <Badge pill bg="light" text="dark">
          Light
        </Badge>{' '}
        <Badge pill bg="dark">
          Dark
        </Badge>
    </div>
    <br />
    <div>
      <b>Contextual Badge with multiple variants</b>
      <br></br>
      <Badge bg="primary">Primary variant</Badge>{" "}
      <Badge bg="secondary">Secondary variant</Badge>{" "}
      <Badge bg="success">Success variant</Badge>{" "}
      <Badge bg="danger">Danger variant</Badge>{" "}
      <Badge bg="warning">Warning variant</Badge>{" "}
      <Badge bg="info">Info variant</Badge>{" "}
      <Badge bg="light" text="dark">Light variant</Badge>{" "}
      <Badge bg="dark">Dark variant </Badge>
    </div>
    <br />
    <div>
      <b>Use of badges in normal text</b>
      <br></br>
      <h5>Heading<Badge bg="primary">primary badge variant</Badge></h5>
      <h5>Heading<Badge bg="secondary">secondary badge variant</Badge></h5>
      <h5>Heading<Badge bg="success">success badge variant</Badge></h5>
      <h5>Heading<Badge bg="danger">danger badge variant</Badge></h5>
      <h5>Heading<Badge bg="warning">warning badge variant</Badge></h5>
      <h5>Heading<Badge bg="info">info badge variant</Badge></h5>
      <h5>Heading<Badge bg="dark">dark badge variant</Badge></h5>
    </div>
  </div>
  `}
        </code><code className="language-javascript">
          {`
  );
}

export default RdBadge;
  `}
        </code>
      </pre>
    </div>
  )
}
export { RbBadge, RbBadgeCode }; 