import React, { useEffect } from "react";
import MaterialTable from "@material-table/core";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";
import Prism from "prismjs";
import "../../prism.css";

export const MatFilterTable = () => {

  const columns = [
    { title: "id", field: "id" },
    { title: "Name", field: "name" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
  ];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   Prism.highlightAll();
  //   if (!data.length)
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setData(result);
  //       });
  // });
  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (error) {
    return error.message;
  }
  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginRight: "20px" }}>
          {data ? (
            <MaterialTable
              title="Filtering Table (Based on user inputs)"
              columns={columns}
              data={data}
              options={{
                filtering: true,
              }}
            />
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>

        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Filter Table Component, in which data can be filtered based on user
            inputs for each columns
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder :{" "}
              <code>
                npm install @material-ui/core @material-ui/lab
                @material-table/core --save-dev
              </code>
              <br />
              Add Font Icons Dependency to your root html file{" "}
              <code>{`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`}</code>
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
              <strong>Step 3 :</strong> Refer React-Material code under the 'Code' tab, to
              understand the usage of component.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
// Code Component
export const MatFilterTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">{`
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";
import Prism from "prismjs";
import "../../prism.css";

export const MatFilterTable = () => {
  const [ data, setData] = useState([]);
    
    const columns = [
        { title: 'id', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Username', field: 'username'},
        { title: 'Email', field: 'email'}
                      ];
    
      useEffect(() => {
        window.scrollTo(0,0);
        Prism.highlightAll();
        if(!data.length)
          fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then((result) => {
                setData(result);
              });
      }); 
      return (`}</code>
        <code className="language-javascript">
          {`
    <MaterialTable
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
  />`}
        </code>

        <code className="language-javascript">
          {`

<=======ApiDataFetch.js=======>

import { useState, useEffect } from 'react';
import axios from 'axios';
import Prism from "prismjs";
import '../prism.css';

const ApiDataTableFetch = (url)=> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =  useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
            Prism.highlightAll();
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
