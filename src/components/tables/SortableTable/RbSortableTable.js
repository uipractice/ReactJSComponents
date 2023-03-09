import React from "react";
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
import { useState, useEffect } from "react";
import "./sortabletable.css";

export const RbSortableTable = (props) => {
  const { SearchBar, ClearSearchButton } = Search;
  const [state] = useState({
    columns: [
      { dataField: "id", text: "Id", sort: true },
      { dataField: "name", text: "Name", sort: true },
      { dataField: "email", text: "Email", sort: true },
      { dataField: "postId", text: "postId", sort: true },
    ],
  });

  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  if (error) {
    return error.message;
  }

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 3,
    pageStartIndex: 1,
    //   alwaysShowAllBtns: true, // Always show next and previous button
    nextPageTitle: "First page",
    //   prePageTitle: 'Pre page',
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    //   disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "20",
        value: 20,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        Sorting functionality allows you to sort the data of the tables
        according to any specific columns.
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
                <BootstrapTable
                  keyField="id"
                  pagination={paginationFactory(options)}
                  {...props.baseProps}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <Spinner animation="border" variant="dark" />
        )}
      </div>

      <div className="compo-description">
        <h4>Description</h4>
        <p>
          Sorting functionality allows you to sort the data of the tables
          according to any specific columns.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency to your project root
            folder :{" "}
            <code>{`npm install react-bootstrap-table-next --save`}</code>
            <br />
            <code>{`npm install react-bootstrap-table2-paginator --save `}</code>
            <br />
            <code>{`npm i react-bootstrap-table2-toolkit --force `}</code>
            <br />
          </li>
          <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary: <code>{`import React from 'react';`}</code>
            <br />
            <code>{`import { ApiDataTableFetch } from "./services/ApiDataTableFetch";`}</code>
            <br />
            <code>{`import BootstrapTable from "react-bootstrap-table-next";`}</code>
            <br />
            <code>{`import ToolkitProvider, {
  Search,
} from "../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";`}</code>
            <br />
            <code>{`import paginationFactory from "react-bootstrap-table2-paginator";`}</code>
            <br />
            <code>{`import { useState, useEffect } from "react";`}</code>
            <br />
            And for LoadingSpinner :
            <code>{`import Spinner from "react-bootstrap/Spinner";`}</code>
            <br /> <br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer React-Material code under the 'Code'
            tab, to understand the usage of component.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const RbSortableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {` <=======RbSortableTable.js=======>

import React from 'react'
import Spinner from "react-bootstrap/Spinner";
import { ApiDataTableFetch } from "./services/ApiDataTableFetch";
import "../../prism.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState,useEffect } from "react";

export const RbSortableTable = (props) => {
    const { SearchBar, ClearSearchButton } = Search;
    const [state] = useState({
        columns: [
            { dataField: "id", text: "Id", sort: true,},
            { dataField: "name", text: "Name", sort: true,},
            { dataField: "email", text: "Email", sort: true },
            { dataField: "postId", text: "postId", sort: true },
        ],
    });

    const { data, error } = ApiDataTableFetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    if (error) {
        return error.message;
    }

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const options = {
  paginationSize: 3,
  pageStartIndex: 1,
//   alwaysShowAllBtns: true, // Always show next and previous button
  nextPageTitle: 'First page',
//   prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
//   disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  },
{
    text: '20', value: 20
  },] // A numeric array is also available. the purpose of above example is custom the text
};

  return (`}{" "}
        </code>
        <code className="language-markup">
          {`<div style={{ marginBottom: "10px" }}>
     The Pagination component enables the user to select a specific page from a range of pages.
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
            <BootstrapTable
                keyField="id"
                pagination={ paginationFactory(options)}{...props.baseProps}
            />
        </div>
    )}
</ToolkitProvider>
        ): (
        <Spinner animation="border" variant="dark" />
        )}
    </div>
    )
}`}
        </code>
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
