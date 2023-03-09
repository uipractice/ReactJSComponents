import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Prism from "prismjs";
import "../../prism.css";
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";

const RbAPITable = (props) => {
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
            <div style={{ marginRight: "20px" }}>
                {data ? (
                    <Table title="Employee Table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((result) => {
                                    return (
                                        <tr key={result.id}>
                                            <td>{result.id}</td>
                                            <td>{result.name}</td>
                                            <td>{result.username}</td>
                                            <td>{result.email}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                ) : (
                    <Spinner animation="border" variant="dark" />
                )}
            </div>

            <div className="compo-description">
                <h4>Description</h4>
                <p>
                    API Data Table, with the dynamically fetched data from 3rd party API
                </p>
                <h5>Steps</h5>
                <ul>
                    <li>
                        <strong>Step 1 :</strong> Install Dependency to your project root
                        folder : <code>npm install react-bootstrap --save-dev</code>
                    </li>
                    <li>
                        <strong>Step 2 :</strong> Import components, for Table:{" "}
                        <code>import Table from 'react-bootstrap/Table';</code>
                    </li>
                    <li>
                        <strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.
                    </li>
                </ul>
            </div>
        </div>
    );
};

const RbAPITableCode = () => {
    useEffect(() => Prism.highlightAll(), []);
    return (
        <div className="jsx-code-wrapper">
            <h4>React Bootstrap code</h4>
            <pre style={{ marginRight: "20px", background: "#fff" }}>
                <code className="language-javascript">{`<======= RbAPITable.js =======>

import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { ApiDataTableFetch } from "../../services/ApiDataTableFetch";

export const RbAPITable =(props)=> {
    const {data,error} =  ApiDataTableFetch('https://jsonplaceholder.typicode.com/users')

    if(error){
      return((error.message))
    }
return (`}</code>{" "}
                <code className="language-markup">{`
{
data ?
<Table title='Employee Table'>
<thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Username</th>
    <th>Email</th>
    </tr>
</thead>
        <tbody>
        {data && data.map(result => {
return (
    <tr key={result.id}>
        <td>{result.id}</td>
        <td>{result.name}</td>
        <td>{result.username}</td>
        <td>{result.email}</td>
    </tr>
        );
        })}
        </tbody>
            </Table> : <Spinner animation="border" variant="dark" />
    }
);
} 
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
export { RbAPITable, RbAPITableCode };
