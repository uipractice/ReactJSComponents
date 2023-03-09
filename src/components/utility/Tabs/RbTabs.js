import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Prism from "prismjs";
import '../../prism.css';


function RbTabs() {
  const [key, setKey] = useState('home');

  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom:'10px'}}><strong>Normal Tabs(Uncontrolled)</strong></div>
      <div style={{width: '500px'}}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <div>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat`}</div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <div>{`Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."`}</div>
          </Tab>
          <Tab eventKey="contact" title="DisabledTab" disabled>
            
          </Tab>
        </Tabs>
      </div>
      <div style={{marginBottom:'10px', marginTop:'20px'}}><strong>Tabs(Controlled)</strong></div>
      <div style={{width: '500px'}}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="home" title="Home">
            <div>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat`}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <div>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat`}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Disabled" disabled>
            <div>{`Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.`}
            </div>
          </Tab>
        </Tabs>
      </div>
      <div style={{marginBottom:'10px', marginTop:'20px'}}><strong>Custom Tab Layout</strong></div>
      <div style={{width: '500px'}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat`}
              </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                  <div>{`Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum`}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>

        <div className='compo-description'>
          <h4>Description</h4>
          <p>Tabs Component, which can be used to show data/components under separtate tabs, on clicking on each tab will navigate to the specific tab data</p>
          <h5>Steps</h5>
          <ul>
            <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
            <li><strong>Step 2 :</strong> Import components,<br/> for Tabs: <code>import Tabs from 'react-bootstrap/Tabs';</code> <br/>
            for Tab: <code>import Tab from 'react-bootstrap/Tab';</code><br/> for Nav: <code>import Nav from 'react-bootstrap/Nav';</code> <br/>
            for Row: <code>import Row from 'react-bootstrap/Row';</code><br/> for Col : <code>import Col from 'react-bootstrap/Col';</code>
            </li>
            <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
          </ul>
        </div>
      </div>
  );
}

function RbTabsCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
              <h4>React Bootstrap code</h4>
              <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-javascript'>{`
import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function RbTabs() {
  const [key, setKey] = useState('home');

  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom:'10px'}}><strong>Normal Tabs(Uncontrolled)</strong></div>
      <div style={{width: '500px'}}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <div>{Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat}</div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <div>{Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."}</div>
          </Tab>
          <Tab eventKey="contact" title="DisabledTab" disabled>
            
          </Tab>
        </Tabs>
      </div>
      <div style={{marginBottom:'10px', marginTop:'20px'}}><strong>Tabs(Controlled)</strong></div>
      <div style={{width: '500px'}}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="home" title="Home">
            <div>{Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
          <div>{Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Disabled" disabled>
            <div>{Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.}
            </div>
          </Tab>
        </Tabs>
      </div>
      <div style={{marginBottom:'10px', marginTop:'20px'}}><strong>Custom Tab Layout</strong></div>
      <div style={{width: '500px'}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>{Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat}
              </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                  <div>{Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
      </div>
  );
}export default RbTabs;
`}</code>
              </pre>
            </div>
  );
}

export { RbTabs, RbTabsCode };