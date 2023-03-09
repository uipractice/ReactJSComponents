import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import reactLogo from "../../../images/LogoforNavBar.svg";
import "../../prism.css";
import Prism from "prismjs";

import { useEffect } from "react";

export const RbNavBar = () => {
  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <hr />A NavBar example of all the sub-components included in a
          responsive light-themed navbar that automatically collapses at the lg
          (large) breakpoint.
        </div>
        <Container className='nav-design'>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>

        <br />

        <ul>
          <li>
            Use the <code>expand</code> prop to allow for collapsing the Navbar
            at lower breakpoints.
          </li>
          <li>
            Navbars and their contents are fluid by default. Use optional
            containers to limit their horizontal width.
          </li>
        </ul>

        <hr />
        <div style={{ marginBottom: "30px", marginTop: "10px" }}>
          A simple flexible branding component. Images are supported but will
          likely require custom styling to work well.
        </div>

        <Container>
          <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={reactLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
        <br />
        <Container>
          <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={reactLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                React Bootstrap
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
        <br />
        <ul>
          <li>
            Theming the navbar has never been easier thanks to the combination
            of theming classes and background-color utilities.
          </li>
          <li>
            Choose from <code> variant="light" </code> for use with{" "}
            <code> light background colors, or variant="dark" </code>for dark
            background colors. Then, customize with the bg prop or any custom
            css!
          </li>
        </ul>
        <hr />
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>
          Responsive behaviors
        </div>
        <ul>
          <li>
            Use the expand prop as well as the<code> Navbar.Toggle</code> and{" "}
            <code> Navbar.Collapse </code>components to control when content
            collapses behind a button.
          </li>
          <li>
            Set the <code>defaultExpanded</code> prop to make the Navbar start
            expanded. Set <code> collapseOnSelect </code>to make the Navbar
            collapse automatically when the user selects an item. You can also
            finely control the collapsing behavior by using the expanded and
            onToggle props.
          </li>
        </ul>
        <samp>
          Note: You need to provide a breakpoint value to <code>expand</code> in
          order for the Navbar to collapse at all.
        </samp>
        <Container className='nav-design nav-links-white'>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" >
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>

        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Navigation Bar Component is a powerful, responsive navigation
            header, the navbar. Includes support for branding, navigation, and
            more, including support for our collapse plugin.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder : <code>npm install react-bootstrap --save-dev</code>
            </li>
            <li>
              <strong>Step 2 :</strong> Import component in view where ever its
              necessary: <code>import React from 'react';</code>
              <br />
              <code>import Container from 'react-bootstrap/Container';</code>
              <br />
              <code>import Nav from 'react-bootstrap/Nav';</code>
              <br />
              <code>import Navbar from 'react-bootstrap/Navbar';</code>
              <br />
              <code>
                import NavDropdown from 'react-bootstrap/NavDropdown';
              </code>
              <br />
              <code>
                import reactLogo from '../../../images/LogoforNavBar.svg'
              </code>
              <br />
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

export const RbNavBarCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import reactLogo from '../../../images/LogoforNavBar.svg'

export const RbNavBar = () => {
  return (`}
        </code>
        <code className="language-markup">
          {`<>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <hr />
        A NavBar example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
        </div>
<Container>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>

<br/>

<hr/>
// A simple flexible branding component. 
<Container>
<Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
</Container>
<br/>
<Container>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
</Container>
<br/>
<hr/>
// Responsive behaviors

<Container>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>
</>
`}
        </code>
        <code className="language-javascript">
          {`);
}     
        `}
        </code>
      </pre>
    </div>
  );
};
