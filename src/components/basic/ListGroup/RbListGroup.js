import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Prism from "prismjs";
import "../../prism.css";
import { useEffect } from "react";

export const RbListGroup = () => {
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };
  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <br />
          List Groups with Active , disabled items and Actionable Items{" "}
        </div>

        {/* List Group #1 */}
        <ListGroup
          as="ul"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
        >
          <ListGroup.Item as="li" active>
            Active Item 1
          </ListGroup.Item>
          <ListGroup.Item as="li"> Item 2 </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Disabled Item 2
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Actionable Item
          </ListGroup.Item>
        </ListGroup>
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <br />
          Flush - Add the flush variant to remove outer borders and rounded
          corners to render list group items edge-to-edge in a parent container
          such as a Card.
        </div>
        {/* List Group #2 */}
        <ListGroup
          as="ul"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
        >
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </ListGroup>

        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <br />
          Numbered- Add the numbered prop to opt into numbered list group
          items. Numbers are generated via CSS (as opposed to a ordered list
          ol's default browser styling)for better placement inside list group
          items and to allow for better customization.
        </div>
        {/* List Group #3 */}
        <ListGroup
          as="ol"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
          numbered
        >
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        </ListGroup>

        <div className="compo-description">
          <h4>Description</h4>
          <p>
            List groups are a flexible and powerful component for displaying a
            series of content. Modify and extend them to support just about any
            content within.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder : <code>npm install react-bootstrap --save-dev</code>
            </li>
            <li>
              <strong>Step 2 :</strong> Import component in view where ever its
              necessary:{" "}
              <code>import ListGroup from 'react-bootstrap/ListGroup'</code>
            </li>
            <li>
              <strong>Step 4 :</strong> Refer React Bootstrap code under the
              'Code' tab, to understand the usage of component.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const RbListGroupCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Prism from "prismjs";
import '../../prism.css';


export const RbListGroup = () => {
const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };
  return (`}
        </code>
        <code className="language-markup">
          {`
<>
{/* List Group #1 -List Groups with Active , disabled items and Actionable Items */}
        <ListGroup
          as="ul"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
        >
          <ListGroup.Item as="li" active>
            Active Item 1
          </ListGroup.Item>
          <ListGroup.Item as="li"> Item 2 </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Disabled Item 2
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            Actionable Item
          </ListGroup.Item>
        </ListGroup>

{/* List Group #2 - #Flush  */}
        <ListGroup
          as="ul"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
        >
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </ListGroup>

{/* List Group #3 - #Numbered */}
        <ListGroup
          as="ol"
          style={{
            marginBottom: "5px",
            marginTop: "5px",
            marginRight: "500px",
          }}
          numbered
        >
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        </ListGroup>
</div>
</>
    `}
        </code>
        <code className="language-javascript">
          {`
  );
}     
        `}
        </code>
      </pre>
    </div>
  );
};
