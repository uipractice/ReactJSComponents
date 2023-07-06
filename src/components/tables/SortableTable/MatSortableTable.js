import React, { useEffect, useMemo } from "react";
import MaterialReactTable from 'material-react-table';
import Prism from "prismjs";
import "../../prism.css";

export const MatSortableTable = () => {

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
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
    }

  ],
    [],
  );

  return (
    <div className="demo-wrapper">
      <div className='mb-1'>
        Sorting functionality allows you to sort the data of the tables according to any specific columns.
      </div>
      <div className='mr-2'>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={true}
          enableColumnFilters={false}
          enablePagination={true}
          enableSorting={true}
          enableBottomToolbar={true}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
          muiTableHeadRowProps={{ sx: { backgroundColor: '#01579b' } }}
          muiTableHeadCellProps={{ sx: { color: "#fff" } }}
        />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Sorting functionality allows you to sort the data of the tables according to any specific columns.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install material-react-table</code><br /></li>
          <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialReactTable from '@material-react-table';</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
};

export const MatSortableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <>
      <div className='jsx-code-wrapper'>
        <h4>React Material UI code</h4>
        <pre className="pre-code">
          <code className='language-javascript'>{`
import React, { useEffect, useMemo } from "react";
import MaterialReactTable from 'material-react-table';

export const MatSortableTable = () => {

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
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
    }

  ],
    [],
  );

  return (`}</code><code className='language-markup'>{`
  <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        Sorting functionality allows you to sort the data of the tables according to any specific columns.
      </div>
      <div style={{ marginRight: "20px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={true}
          enableColumnFilters={false}
          enablePagination={true}
          enableSorting={true}
          enableBottomToolbar={true}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
          muiTableHeadRowProps={{ sx: { backgroundColor: '#01579b' } }}
          muiTableHeadCellProps={{ sx: { color: "#fff" } }}
        />
      </div>`}</code><code className="language-javascript">{`
  );
}
`}</code>
        </pre>
      </div>
    </>
  )
}