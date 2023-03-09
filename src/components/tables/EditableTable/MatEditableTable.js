import * as React from 'react';
import MaterialTable from '@material-table/core';
import Prism from "prismjs";
import '../../prism.css';
import { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  MuiTableCellAlignRight: {
    textAlign: 'inherit'
  }
}));
  // Demo code for Editable table
export const MatEditableTable = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
 { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Bangalore', 63: 'Hyderabd', 22: 'Goa' },
      },
    ],
    data: [
      { id: 1,
name: 'Jesse', 
        surname: 'Jackson', 
        birthYear: 1987, 
        birthCity: 63 
      },
      { id: 2,
        name: 'Alex',
        surname: 'Mahone',
        birthYear: 2017,
        birthCity: 34,
      },
      { id: 3,
        name: 'Walter',
        surname: 'White',
        birthYear: 2017,
        birthCity: 22,
      },
    ],
  });

  return (
    <div className="demo-wrapper">
<MaterialTable
              title="CURD Table"
              columns={state.columns}
              data={state.data}
              className={classes.MuiTableCellAlignRight}
              // options={{
              //   paging: false
              // }}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />
{/* Component Description */}<div className='compo-description'>
                <h4>Description</h4>
                <p>Editable Table Component, in which we can perform CRUD, Sort, Search & Filter, also provides pagination.</p>
                <h5>Steps</h5>
                <ul>
                  <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core material-table --save-dev;</code><br/>
                  Add Font Icons Dependency to your root html file <code>{`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`}</code></li>
                  <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialTable from 'material-table';</code></li>
                  <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
              </ul>
              </div>
            </div>
  )
}
// Code component.
export const MatEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (<div className='jsx-code-wrapper'>
  <h4>React Material UI code</h4>
  <pre style={{marginRight: '20px', background: '#fff'}}>
    <code className='language-javascript'>{`
import MaterialTable from '@material-table/core';

const useStyles = makeStyles((theme) => ({
  MuiTableCellAlignRight: {
    textAlign: 'inherit'
  }
}));
  // Demo code for Editable table
export const MatEditableTable = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Bangalore', 63: 'Hyderabd', 22: 'Goa' },
      },
    ],
    data: [
      { name: 'Jesse', 
        surname: 'Jackson', 
        birthYear: 1987, 
        birthCity: 63 
      },
      {
        name: 'Alex',
        surname: 'Mahone',
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: 'Walter',
        surname: 'White',
        birthYear: 2017,
        birthCity: 22,
      },
    ],
  });

  return (`}
  </code>
  <code className='language-markup'>{`
    <div className="demo-wrapper">
    `}
  </code>
  <code className='language-javascript'>{`
    <MaterialTable
        title="CURD Table"
        columns={state.columns}
        data={state.data}
        className={classes.MuiTableCellAlignRight}
        // options={{
        //   paging: false
        // }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />

  </div>
  )
}
export default MatEditableTable;
  `}
</code>
    </pre>
  </div>
  )};        