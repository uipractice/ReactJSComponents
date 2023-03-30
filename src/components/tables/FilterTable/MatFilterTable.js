import React, { useEffect, useMemo } from "react";
import MaterialReactTable from 'material-react-table'
import Prism from "prismjs";
import "../../prism.css";

export const MatFilterTable = () => {

  const columns = useMemo(() => [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Username", accessorKey: "username" },
    { header: "Email", accessorKey: "email" },
  ],
    [],
  );

  const data = useMemo(() => [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },

  ],
    [],
  );

  return (
    <>
      <div className="demo-wrapper">
        <MaterialReactTable
          columns={columns}
          data={data}
          initialState={{ showColumnFilters: true }}
          enableColumnActions={true}
          enableColumnFilters={true}
          enablePagination={true}
          enableSorting={false}
          enableBottomToolbar={true}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
        />
        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Filter Table Component, in which data can be filtered based on user
            inputs for each column.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder :{" "}
              <code>
                npm install material-react-table
              </code>
            </li>
            <li>
              <strong>Step 2 :</strong> Import component in view where ever its
              necessary:{" "}
              <code>{`import MaterialReactTable from 'material-react-table';`}</code>
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

export const MatFilterTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">{`
import React, { useEffect, useMemo } from "react";
import MaterialReactTable from 'material-react-table'

export const MatFilterTable = () => {

  const columns = useMemo(() => [
    { header: "id", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Username", accessorKey: "username" },
    { header: "Email", accessorKey: "email" },
  ],
    [],
  );

  const data = useMemo(() => [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
    },

  ],
    [],
  );

  return (`}</code>
        <code className="language-markup">
          {`
    <div className="demo-wrapper">
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{ showColumnFilters: true }}
        enableColumnActions={true}
        enableColumnFilters={true}
        enablePagination={true}
        enableSorting={false}
        enableBottomToolbar={true}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
        muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
      />
    </div>`}
        </code><code className="language-javascript">{`
);`}</code>
      </pre>
    </div>
  );
};
