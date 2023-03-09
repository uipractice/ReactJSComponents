import React from 'react'
import Spinner from "react-bootstrap/Spinner";
import "../../prism.css";
import Prism from "prismjs";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";
import "../../prism.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState,useEffect } from "react";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


export const RbFilterTable = (props) => {
  
  const { SearchBar, ClearSearchButton } = Search;
  const [state] = useState({
    columns: [
      { dataField: "id", text: "Id", sort: true, filter: textFilter()},
      { dataField: "name", text: "Name", sort: true, filter: textFilter({
        onFilter: filterVal => console.log(`Filter Value: ${filterVal}`)
      }) },
      { dataField: "username", text: "UserName", sort: true, filter: textFilter() },
      { dataField: "email", text: "Email", sort: true, filter: textFilter() }
    ]})
  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/users"
);
if (error) {
return error.message;
}

function afterFilter(newResult, newFilters) {
  console.log(newResult);
  console.log(newFilters);
}

  return (
   <>
    <div className="demo-wrapper">
    <div style={{ marginBottom: "10px" }}>
       Filter Table with Dynamically fetched data from 3rd party API
    </div>
    <div style={{ marginRight: "20px" }}>
        {data ? (
          <ToolkitProvider
          keyField="id"
          data={data}
          columns={state.columns}
          search
        >
          {(props) => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable keyField="id"
                pagination={paginationFactory()}
                {...props.baseProps}
                filter={ filterFactory({ afterFilter }) }
              />
            </div>
          )}
        </ToolkitProvider>
        ): (
          <Spinner animation="border" variant="dark" />
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
                  {`npm install react-bootstrap-table-next --save`}
              </code>
              <br/>
              <code>
              {`npm i react-bootstrap-table2-filter --force`}
              </code>
              <br /><code>{`npm install react-bootstrap-table2-paginator --save `}</code><br/>
              <code>{`npm i react-bootstrap-table2-toolkit --force `}</code><br/>
            </li>
            <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary:{" "}
            <code>{`import React from 'react';`}</code><br/>
            <code>{`import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";`}</code><br/>
            <code>{`import Prism from "prismjs";`}</code><br/>
            <code>{`import "../../prism.css";`}</code><br/>
            <code>{`import BootstrapTable from "react-bootstrap-table-next";`}</code><br/>
            <code>{`import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";`}</code><br/>
            <code>{`import paginationFactory from "react-bootstrap-table2-paginator";`}</code><br/>
            <code>{`import { useState, useEffect } from "react";`}</code><br/>
            <code>{`import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';`}</code><br/>
            And for LoadingSpinner :
           <code>{`import Spinner from "react-bootstrap/Spinner";`}</code><br/>{" "}
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
  )
}
export const RbFilterTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
{`import React from 'react'
import Spinner from "react-bootstrap/Spinner";
import "../../prism.css";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";
import "../../prism.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState } from "react";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


export const RbFilterTable = (props) => {
  
  const { SearchBar, ClearSearchButton } = Search;
  const [state, setState] = useState({
    columns: [
      { dataField: "id", text: "Id", sort: true, filter: textFilter()},
    { dataField: "name", text: "Name", sort: true, filter: textFilter()
      }) },
      { dataField: "username", text: "UserName", sort: true, filter: textFilter() },
      { dataField: "email", text: "Email", sort: true, filter: textFilter() }
    ]})
  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/users"
);

if (error) {
return(error.message);
}

function afterFilter(newResult, newFilters) {
  console.log(newResult);
  console.log(newFilters);
}

  return (`} </code>
  <code className="language-markup">
          {`<>
          <div style={{ marginBottom: "10px" }}>
          Filter Table with Dynamically fetched data from 3rd party API
       </div>
       <div style={{ marginRight: "20px" }}>
           {data ? (
             <ToolkitProvider
             keyField="id"
             data={data}
             columns={state.columns}
             search
           >
             {(props) => (
               <div>
                 <SearchBar {...props.searchProps} />
                 <ClearSearchButton {...props.searchProps} />
                 <hr />
                 <BootstrapTable keyField="id"
                   pagination={paginationFactory()}
                   {...props.baseProps}
                   filter={ filterFactory({ afterFilter }) }
                 />
               </div>
             )}
           </ToolkitProvider>
           ): (
             <Spinner animation="border" variant="dark" />
             )}
         </div>
        </>
  )
}`}
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
  )}