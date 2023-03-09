import React, { useEffect } from "react";
import MaterialTable from "@material-table/core";
import Prism from "prismjs";
import "../../prism.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";

const MatAPITable = () => {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "UserName", field: "username" },
    { title: "Email", field: "email" },
  ];

  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error) {
    return error.message;
  }
  return (
    <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        Table with Dynamically fetched data from 3rd party API
      </div>
      <div style={{ marginRight: "10px" }}>
        {data ? (
          <MaterialTable
            options={{
              paging: false,
              search: false,
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              }

            }}
            columns={columns}
            data={data}
            title="Employee Data"
            striped
            bordered
            hover
          ></MaterialTable>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <div className="compo-description">
        <h4>Description</h4>
        <p>
          API Data Table, with the dynamically fetched data (Employee Data) from
          3rd party API
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency in your project root
            folder :{" "}
            <code>
              npm install @material-ui/core @material-ui/lab
              @material-table/core --save-dev
            </code>
          </li>
          <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary:{" "}
            <code>{`import MaterialTable from 'material-table/core';`}</code>
            <br />
            And for LoadingButton :
            <code>{`import CircularProgress from "@mui/material/CircularProgress";`}</code>{" "}
            <br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer React-Material UI code under the
            'Code' tab, to understand the usage of different variations of the
            API Table.
          </li>
        </ul>
      </div>
    </div>
  );
};

const MatAPITableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Material-UI code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">{` <=======MatAPITable.js=======>

import React from "react";
import MaterialTable from "@material-table/core";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";

export const MatAPITable = () => {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "UserName", field: "username" },
    { title: "Email", field: "email" },
  ];
  
  const {data,error} =  ApiDataTableFetch('https://jsonplaceholder.typicode.com/users')

  if(error){
    return((error.message))
  }
  return (
`}</code>{" "}
        <code className="language-markup">{`<> {data ? (
          <MaterialTable
          options={{
            paging: false,
            search: false,
              headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF' }
              
          }}
            columns={columns}
            data={data}
            title="Employee Data"
            striped
            bordered
            hover
          ></MaterialTable>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
</>)
`}</code>
        <code className="language-javascript">
          {`

<=======ApiDataFetch.js=======>

import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDataTableFetch = (url)=> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =  useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false);
        })
    },[url]);
    return {data,loading, error}
}
export {ApiDataTableFetch}`}
        </code>
      </pre>
    </div>
  );
};

export { MatAPITable, MatAPITableCode };
