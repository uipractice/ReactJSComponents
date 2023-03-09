import React, { useEffect } from 'react';
import MaterialTable from '@material-table/core';
import Spinner from 'react-bootstrap/Spinner';
import Prism from "prismjs";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch"
import '../../prism.css';
export const MatPaginationTable = (props) => {

    const columns = [
    { title: 'id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email'},
    { title: 'Post Id', field: 'postId'}
    ];
    const { data, error } = ApiDataTableFetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    if (error) {
    return error.message;
    }
    console.log("pagination table", data);
    return (
    <div className="demo-wrapper">
    <div style={{ marginBottom: "10px" }}>
    The Pagination component enables the user to select a specific page from a range of pages.
    </div>
    <div style={{ marginRight: "20px" }}>
    {
    data?
    <MaterialTable
                title="Pagination Table with 500 records"
                columns={columns}
                data={data}
                options={{
                    sorting: true,
                headerStyle: {
                backgroundColor: '#01579b',
                Color: '#FFFFFF' }
                }}
            /> : <Spinner animation="border" variant="dark" />
            } </div>
            <div className='compo-description'>
                <h4>Description</h4>
                <p>Pagination Table Component, data can be paginated base on the amount of records it receives</p>
                <h5>Steps</h5>
                <ul>
                <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core material-table --save-dev;</code><br/>
                Add Font Icons Dependency to your root html file <code>{`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`}</code></li>
                <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialTable from 'material-table/core';</code></li>
                <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
            </ul>
            </div>
            </div>
)
}

export const MatPaginationTableCode = () => {
    useEffect(() => Prism.highlightAll(), []);
    return (
    <>
    <div className='jsx-code-wrapper'>
        <h4>React Material UI code</h4>
        <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-javascript'>{`<=======MatPaginationTable.js=======>

import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import Spinner from 'react-bootstrap/Spinner';
import Prism from "prismjs";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch"
import '../../prism.css';

export const MatPaginationTable = (props) => {

    const columns = [
    { title: 'id', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email'},
    { title: 'Post Id', field: 'postId'}
    ];

    const { data, error } = ApiDataTableFetch(
        "https://jsonplaceholder.typicode.com/comments"
    );
    console.log("pagination table", data);
    if (error) {
    return error.message;
    }
    return (`}</code><code className='language-markup'>{`
    <div style={{ marginBottom: "10px" }}>
    The Pagination component enables the user to select a specific page from a range of pages.
    </div>
    <div style={{ marginRight: "20px" }}>
    {
    data?
    <MaterialTable
                title="Pagination Table with 500 records"
                columns={columns}
                data={data}
                options={{
                headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF' }
                }}
            /> : <Spinner animation="border" variant="dark" />
            } </div>
)
}`}</code>

<code className="language-javascript"> {`

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
    </>
    )
  }
