import React, { useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Prism from "prismjs";
import '../../prism.css';

function TableComponent(props) {
  useEffect(()=> {
    window.scrollTo(0,0);
    Prism.highlightAll();
  },[]);
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Table</h3>
      <ToggleView materialDisabled={true} isViewResized={props.isViewResized}/>
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            <div className='demo-wrapper'>
            <div style={{marginBottom:'10px'}}>Table, Use the <code>striped</code>, <code>bordered</code> and <code>hover</code> props to customise the table.</div>
            <div style={{marginRight: '20px'}}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Jackson</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>  
            </div>  
              
            <div style={{marginBottom:'10px'}}>Use <code>size="sm"</code> to make tables compact by cutting cell padding in half. and <code>colSpan="2"</code> to customize any row to occupy given column width.</div>
            <div style={{marginRight: '20px'}}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div style={{marginBottom:'10px'}}>Use <code>variant="dark"</code> to invert the colors of the table and get light text on a dark background.</div>
            <div style={{marginRight: '20px'}}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            
              <div className='compo-description'>
                <h4>Description</h4>
                <p>Table Component, which can be used to show data in organized rows and columns manner.</p>
                <h5>Steps</h5>
                <ul>
                  <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
                  <li><strong>Step 2 :</strong> Import components, for Table: <code>import Table from 'react-bootstrap/Table';</code></li>
                  <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
              </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="code" title="Code">
            <div className='jsx-code-wrapper'>
              <h4>React Bootstrap code</h4>
              <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-markup'>{`
  import Tabs from 'react-bootstrap/Tabs'
  import Tab from 'react-bootstrap/Tab';
  import Table from 'react-bootstrap/Table';

  function TableComponent(props) {
    return (
      <div className='btnCompoWrap'>
        <h3 className='btn-title'>Table</h3>
        <ToggleView materialDisabled={true} isViewResized={props.isViewResized}/>
        <div className='step-tabs-wrapper'>
          <Tabs defaultActiveKey="demo" id="code-demo-tab">
            <Tab eventKey="demo" title="Demo">
              <div className='demo-wrapper'>
              <div style={{marginBottom:'10px'}}>Table, Use the <code>striped</code>, <code>bordered</code> and <code>hover</code> props to customise the table.</div>
              <div style={{marginRight: '20px'}}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>Jackson</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>  
              </div>  
                
              <div style={{marginBottom:'10px'}}>Use <code>size="sm"</code> to make tables compact by cutting cell padding in half. and <code>colSpan="2"</code> to customize any row to occupy given column width.</div>
              <div style={{marginRight: '20px'}}>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
  
              <div style={{marginBottom:'10px'}}>Use <code>variant="dark"</code> to invert the colors of the table and get light text on a dark background.</div>
              <div style={{marginRight: '20px'}}>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              </div>
            </Tab>
            </Tabs>
            </div>
          </div>
        );
      }
      
      export default TableComponent;          
                `}</code>
              </pre>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TableComponent;