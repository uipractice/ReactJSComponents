import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import Prism from "prismjs";
import '../../prism.css';

export const MatEditableTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'surname', header: 'Surname' },
      { accessorKey: 'birthYear', header: 'Birth Year' },
      { accessorKey: 'birthCity', header: 'Birth Place' },
    ],
    []
  );

  const data = useMemo(() => [
    {
      id: 1,
      name: 'Jesse',
      surname: 'Jackson',
      birthYear: 1987,
      birthCity: 'Hyderabad'
    },
    {
      id: 2,
      name: 'Alex',
      surname: 'Mahone',
      birthYear: 2007,
      birthCity: 'Bangalore',
    },
    {
      id: 3,
      name: 'Walter',
      surname: 'White',
      birthYear: 2017,
      birthCity: 'Goa',
    },
  ],
    [],
  );

  const [tableData, setTableData] = useState(() => data);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (
    <div className="demo-wrapper">
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableEditing
        editingMode="row"
        enableTopToolbar={true}
        enableColumnActions={false}
        enableColumnFilters={true}
        enablePagination={true}
        enableSorting={true}
        onEditingRowSave={handleSaveRow}
      />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Editable Table Component, in which we can perform CRUD, Sort, Search & Filter, also provides pagination.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-react-table;</code></li><br />
          <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialReactTable from 'material-react-table;</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  )
}

export const MatEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (<div className='jsx-code-wrapper'>
    <h4>React Material UI code</h4>
    <pre style={{ marginRight: '20px', background: '#fff' }}>
      <code className='language-javascript'>{`
import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';

export const MatEditableTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'surname', header: 'Surname' },
      { accessorKey: 'birthYear', header: 'Birth Year' },
      { accessorKey: 'birthCity', header: 'Birth Place' },
    ],
    []
  );

  const data = useMemo(() => [
    {
      id: 1,
      name: 'Jesse',
      surname: 'Jackson',
      birthYear: 1987,
      birthCity: 'Hyderabad'
    },
    {
      id: 2,
      name: 'Alex',
      surname: 'Mahone',
      birthYear: 2007,
      birthCity: 'Bangalore',
    },
    {
      id: 3,
      name: 'Walter',
      surname: 'White',
      birthYear: 2017,
      birthCity: 'Goa',
    },
  ],
    [],
  );

  const [tableData, setTableData] = useState(() => data);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    tableData[row.index] = values;
    setTableData([...tableData]);
    exitEditingMode();
  };

  return (`}
      </code>
      <code className='language-markup'>{`
    <div className="demo-wrapper">
      <MaterialReactTable
        columns={columns}
        data={tableData}
        enableEditing
        editingMode="row"
        enableTopToolbar={true}
        enableColumnActions={false}
        enableColumnFilters={true}
        enablePagination={true}
        enableSorting={true}
        onEditingRowSave={handleSaveRow}
      />
    </div>`}</code><code className="languae-javascript">{`
  );
}

  export default MatEditableTable;
    `}</code>
    </pre>
  </div>
  )
};        