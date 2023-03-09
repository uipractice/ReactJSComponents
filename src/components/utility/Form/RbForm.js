import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Prism from "prismjs";
import "../../prism.css";
import React, { useEffect } from "react";

export const RbForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "10px" }}>
          <strong>Basic Login Form</strong>
        </div>
        <div style={{ width: "700px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Form, renders a form control with Bootstrap styling. The{" "}
            <code>{`<FormGroup>`}</code> component wraps a form control with
            proper spacing, along with support for a label, help text, and
            validation state
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder : <code>npm install react-bootstrap --save-dev</code>
            </li>
            <li>
              <strong>Step 2 :</strong> Import components:{" "}
              <code>import Form from 'react-bootstrap/Form';</code>
            </li>
            <li>
              <strong>Step 3 :</strong> Refer React Bootstrap code under the
              'Code' tab, to understand the usage of component.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export const RbFormCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';
import React, { useEffect } from 'react';

export const RbForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Prism.highlightAll();
  }, []);
  return (`}
        </code>
        <code className="language-markup">
          {`
              <>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              <div style={{ marginBottom: '10px', marginTop: '20px' }}><strong>Form Controls</strong></div>
              <div style={{ width: '700px' }}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.FileInput">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Form>
              </>           
                `}
        </code>
        <code className="language-javascript">{`
);
}
 `}</code>
      </pre>
    </div>
  );
};
