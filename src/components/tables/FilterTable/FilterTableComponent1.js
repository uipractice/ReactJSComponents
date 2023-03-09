import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
// import MaterialTable from 'material-table';
import MaterialTable from '@material-table/core';
import Spinner from 'react-bootstrap/Spinner';
import Prism from "prismjs";
import '../../prism.css';


function FilterTableComponent(props) {
  const [data, setData] = useState([]);

  const columns = [
    { title: 'id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Username', field: 'username' },
    { title: 'Email', field: 'email' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    Prism.highlightAll();
    if (!data.length)
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((result) => {
          setData(result);
        });
  });

  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Filter Table</h3>
      <ToggleView rbDisabled={true} isViewResized={props.isViewResized} />
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            <div className='demo-wrapper'>
              <div style={{ marginRight: '20px' }}>
                {
                  data.length ?
                    <MaterialTable
                      title="Filtering Table (Based on user inputs)"
                      columns={columns}
                      data={data}
                      options={{
                        filtering: true
                      }}
                    /> : <Spinner animation="border" variant="info" />
                }
              </div>

              <div className='compo-description'>
                <h4>Description</h4>
                <p>Filter Table Component, in which data can be filtered based on user inputs for each columns</p>
                <h5>Steps</h5>
                <ul>
                  <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core material-table --save-dev;</code><br />
                    Add Font Icons Dependency to your root html file <code>{`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`}</code></li>
                  <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialTable from 'material-table';</code></li>
                  <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
                </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="code" title="Code">
            <div className='jsx-code-wrapper'>
              <h4>React Bootstrap code</h4>
              <pre style={{ marginRight: '20px', background: '#fff' }}>
                <code className='language-markup'>{`<MaterialTable
  title="Basic Filtering Table"
  columns={[
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]}
  data={[
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]}        
  options={{
    filtering: true
  }}
/>`}</code>
              </pre>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default FilterTableComponent;