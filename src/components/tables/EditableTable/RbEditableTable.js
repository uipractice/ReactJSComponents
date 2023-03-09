import { useEffect, useState } from "react";
import React from "react";
import Prism from "prismjs";
import "../../prism.css";
import Spinner from "react-bootstrap/Spinner";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";

const RbEditableTable = (props) => {
  const { SearchBar, ClearSearchButton } = Search;
  const [state] = useState({
    columns: [
      { dataField: "id", text: "Id", sort: true },
      { dataField: "name", text: "Name", sort: true },
      { dataField: "email", text: "Email", sort: true },
    ]
  });
  const { data, error } = ApiDataTableFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  if (error) {
    return error.message;
  }

  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "10px" }}>
          <h5> Editable / CRUD Table</h5>  <div style={{ marginRight: "20px" }}>
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
                      cellEdit={cellEditFactory({
                        mode: "click",
                        blurToSave: true,
                      })}
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
              Editable Table Component, in which we can perform CRUD, Sort, Search
              & Filter, also provides pagination.
            </p>
            <h5>Steps</h5>
            <ul>
              <li>
                <strong>Step 1 :</strong> Install Dependency to your project root
                folder : <code>{`npm install react-bootstrap-table-next --save `}</code><br />
                <code>{`npm install react-bootstrap-table2-paginator react-bootstrap-table2-filter --save `}</code><br />
                <code>{`npm i react-bootstrap-table2-toolkit --force `}</code><br />
              </li>
              <li>
                <strong>Step 2 :</strong> Import components, for Table:{" "}
                <code>{`import { useEffect, useState } from "react";`}</code><br />
                <code>{`import React from "react";`}</code><br />
                <code>{`import BootstrapTable from "react-bootstrap-table-next";`}</code><br />
                <code>{`import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";`}</code><br />
                <code>{`import cellEditFactory from "react-bootstrap-table2-editor";`}</code><br />
                <code>{`import paginationFactory from "react-bootstrap-table2-paginator";`}</code><br />
              </li>
              <li>
                <strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to
                understand the usage of component.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const RbEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`
import {useState} React from "react";
import Prism from "prismjs";
import "../../prism.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "../../../../node_modules/react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';

const RbEditableTable = (props) => {

  const { SearchBar, ClearSearchButton } = Search;
  const [state, setState] = useState({
    columns: [
      { dataField: "id", text: "Id", sort: true },
      { dataField: "name", text: "Name", sort: true },
      { dataField: "birthPlace", text: "Birth Place", sort: true },
    ],
    data: [
      { id: 1, name: "George", birthPlace: "Goa" },
      { id: 2, name: "Jeffrey", birthPlace: "Hyderabad" },
      { id: 3, name: "Alice", birthPlace: "Bangalore" },
      { id: 4, name: "Alice", birthPlace: "Goa" },
      { id: 5, name: "George", birthPlace: "Goa" },
      { id: 6, name: "Jeffrey", birthPlace: "Hyderabad" },
      { id: 7, name: "Alice", birthPlace: "Bangalore" },
      { id: 8, name: "Alice", birthPlace: "Goa" },
      { id: 9, name: "George", birthPlace: "Goa" },
      { id: 10, name: "Jeffrey", birthPlace: "Hyderabad" },
      { id: 11, name: "Alice", birthPlace: "Bangalore" },
      { id: 12, name: "Alice", birthPlace: "Goa" },
      { id: 13, name: "George", birthPlace: "Goa" },
      { id: 14, name: "Jeffrey", birthPlace: "Hyderabad" },
      { id: 15, name: "Alice", birthPlace: "Bangalore" },
      { id: 16, name: "Alice", birthPlace: "Goa" },
    ],
  });

  return (
    `}</code>

        <code className="language-markup">
          {`<>
<h5> Editable / CRUD Table</h5>
  <ToolkitProvider
  keyField="id"
  data={ state.data }
  columns={ state.columns }
  search 
>
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <ClearSearchButton { ...props.searchProps } />
        <hr />
          <BootstrapTable pagination={ paginationFactory() } cellEdit={ cellEditFactory({mode: 'click', blurToSave: true })} 
            { ...props.baseProps }/>
      </div>
    )
  }
  </ToolkitProvider>
    </>
  );
};
`}
        </code>
      </pre>
    </div>
  );
};
export { RbEditableTable, RbEditableTableCode };
