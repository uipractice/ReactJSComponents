import React, { useEffect, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import Prism from "prismjs";
import '../../prism.css';

export const MatBasicTable = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Dessert (100g serving)',
      },
      {
        accessorKey: 'calories',
        header: 'Calories',
        size: '100'
      },
      {
        accessorKey: 'fat',
        header: 'Fat (g)',
        size: '100'
      },
      {
        accessorKey: 'carbs',
        header: 'Carbs (g)',
        size: '100'
      },
      {
        accessorKey: 'protein',
        header: 'Protein (g)',
        size: '100'
      },
    ],
    [],
  );

  const data = useMemo(() => [
    {
      id: 1,
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0
    },
    {
      id: 2,
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3
    },
    {
      id: 3,
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0
    },
    {
      id: 3,
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3
    },
    {
      id: 3,
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9
    },
  ],
    [],
  );

  return (
    <div className="demo-wrapper">

      <div style={{ marginBottom: "10px" }}>
        A simple Table, with no frills.
      </div>
      <div style={{ marginRight: "10px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
        />
      </div>
      <br></br>
      {/* Table 2 */}
      <div style={{ marginBottom: "10px" }}>
        Table with bordered cells and striped rows.
      </div>
      <div style={{ marginRight: "10px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTableBodyProps={{
            sx: {
              '& tr:nth-of-type(even)': {
                backgroundColor: '#f5f5f5',
              },
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              border: '1px solid #e0e0e0',
            }
          }}
          muiTableHeadCellProps={{
            sx: {
              border: '1px solid #e0e0e0',
            }
          }}
          muiTableHeadRowProps={{
            sx: {
              background: '#e0f0e0',
            }
          }}
        />
      </div>
      <br />

      <div style={{ marginBottom: "10px" }}>
        Table with dark mode used for representing in Dark style. </div>
      <div style={{ marginRight: "10px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          muiTableBodyRowProps={{
            hover: false
          }}
          muiTableBodyCellProps={{ sx: { backgroundColor: '#0e0e0e', color: '#fff' } }}
          muiTableHeadRowProps={{
            sx: {
              backgroundColor: '#0e0e0e'
            }
          }}
          muiTableHeadCellProps={{ sx: { color: '#fff' } }}
        />
      </div>
      <br />
      <div className="compo-description">
        <h4>Description</h4>
        <p>
          Table display information in a way that's easy to scan, so that users can look for patterns and insights.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency to your project root
            folder : <code>npm install @material-react-table</code>   <br />
          </li>
          <li>
            <strong>Step 2 :</strong> Import components, for BasicTable:{" "}
            <code>{`import MaterialReactTable from 'material-react-table';`}</code><br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to
            understand the usage of component.
          </li>
        </ul>
      </div>
    </div>

  );
}

export const MatBasicTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (<div className='jsx-code-wrapper'>
    <h4>React Material UI code</h4>
    <pre style={{ marginRight: '20px', background: '#fff' }}>
      <code className='language-javascript'>{`
import React, { useEffect, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

export const MatBasicTable = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Dessert (100g serving)',
      },
      {
        accessorKey: 'calories',
        header: 'Calories',
        size: '100'
      },
      {
        accessorKey: 'fat',
        header: 'Fat (g)',
        size: '100'
      },
      {
        accessorKey: 'carbs',
        header: 'Carbs (g)',
        size: '100'
      },
      {
        accessorKey: 'protein',
        header: 'Protein (g)',
        size: '100'
      },
    ],
    [],
  );

  const data = useMemo(() => [
    {
      id: 1,
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0
    },
    {
      id: 2,
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3
    },
    {
      id: 3,
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0
    },
    {
      id: 3,
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3
    },
    {
      id: 3,
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9
    },
  ],
    [],
  );

  return (`}</code><code className='language-markup'>{`
    <div className="demo-wrapper">
    <div style={{ marginBottom: "10px" }}>
      A simple Table, with no frills.
    </div>
    <div style={{ marginRight: "10px" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
        muiTablePaperProps={{ sx: { borderRadius: '8px' } }}
      />
    </div>
    <br></br>
    <div style={{ marginBottom: "10px" }}>
      Table with bordered cells and striped rows.
    </div>
    <div style={{ marginRight: "10px" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
        muiTableBodyProps={{
          sx: {
            '& tr:nth-of-type(even)': {
              backgroundColor: '#f5f5f5',
            },
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: '1px solid #e0e0e0',
          }
        }}
        muiTableHeadCellProps={{
          sx: {
            border: '1px solid #e0e0e0',
          }
        }}
        muiTableHeadRowProps={{
          sx: {
            background: '#e0f0e0',
          }
        }}
      />
    </div>
    <br />
    <div style={{ marginBottom: "10px" }}>
      Table with dark mode used for representing in Dark style. </div>
    <div style={{ marginRight: "10px" }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{
          hover: false
        }}
        muiTableBodyCellProps={{ sx: { backgroundColor: '#0e0e0e', color: '#fff' } }}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor: '#0e0e0e'
          }
        }}
        muiTableHeadCellProps={{ sx: { color: '#fff' } }}
      />
    </div>`}
      </code>
    </pre>
  </div>
  )
};