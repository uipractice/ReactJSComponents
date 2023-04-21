import React, { useEffect, useMemo, useCallback, useReducer, useRef, useState } from "react";
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table"
import { makeData } from '../makeData';

function useDefaultColumn({ getValue, row: { index }, column: { id }, table }) {
  const initialValue = getValue();
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue,
    onBlur,
  };
}

// Give our default column cell renderer editing superpowers!
const defaultColumn = {
  cell: function Cell(props) {
    const { value, setValue, onBlur } = useDefaultColumn(props);

    return (
      <input
        className='form-control form-control-sm border-none'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );
  },
};

function useEditableColumn({ getValue, row: { index }, column: { id }, table }) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const onSave = () => {
    table.options.meta?.updateData(index, id, value);
    setIsEditing(false);
  };

  const onDelete = () => {
    table.options.meta?.deleteData(index);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue,
    isEditing,
    setIsEditing,
    onSave,
    onDelete
  };
}


function useSkipper() {
  const shouldSkipRef = useRef(true)
  const shouldSkip = shouldSkipRef.current

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = useCallback(() => {
    shouldSkipRef.current = false
  }, [])

  useEffect(() => {
    shouldSkipRef.current = true
  })

  return [shouldSkip, skip]
}

const RbEditableTable = (props) => {

  const rerender = useReducer(() => ({}), {})[1]
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: () => <span>First Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: props => props.column.id,
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => makeData(1000))
  const refreshData = () => setData(() => makeData(1000))

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex()
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value
              }
            }
            return row
          })
        )
      }
    },
  })

  return (
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "10px" }}>
          <h5> Editable / CRUD Table</h5>
          <div style={{ marginRight: "10px" }}>
            <table className='table'>
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} className='table-primary'>
                    {headerGroup.headers.map(header => {
                      return (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <div>

                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column.getCanFilter() ? (
                                <div>
                                  <Filter column={header.column} table={table} />
                                </div>
                              ) : null}
                            </div>
                          )}
                        </th>
                      )
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button className='btn btn-sm btn-primary mr-2' onClick={() => rerender()}>Force Rerender</button>
                <button className='btn btn-sm btn-secondary mr-2' onClick={() => refreshData()}>Refresh Data</button>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <strong>{'<<'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <strong>{'<'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <strong>{'>'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary me-1"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <strong>{'>>'}</strong>
                </button>

                <span className="me-2">
                  <div className="d-inline-block">Page</div>
                  <strong className="mx-1">
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                  </strong>
                </span>

                <span className="me-2">
                  <div className="d-inline-block">Go to page:</div>
                  <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      table.setPageIndex(page)
                    }}
                    className="form-control form-control-sm d-inline-block mx-1"
                    style={{ width: '70px' }}
                  />
                </span>

                <span>
                  <select
                    className='form-select form-select-sm'
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                      table.setPageSize(Number(e.target.value))
                    }}
                  >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
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
                folder : <code>{`npm install @tanstack/react-table`}</code><br />
              </li>
              <li>
                <strong>Step 2 :</strong> Import components, for Table:{" "}
                <code>{`import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";`}</code><br />
                <code>{`import {useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender} from "@tanstack/react-table";`}</code>
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

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "number" ? (
    <div className='input-group input-group-sm'>
      <input
        type="number"
        value={columnFilterValue?.[0] ?? ""}
        onChange={e => column.setFilterValue(old => [e.target.value, old?.[1]])}
        placeholder={`Min`}
        className="form-control form-control-sm"
      />
      <input
        type="number"
        value={columnFilterValue?.[1] ?? ""}
        onChange={e => column.setFilterValue(old => [old?.[0], e.target.value])}
        placeholder={`Max`}
        className="form-control form-control-sm"
      />
    </div>
  ) : (
    <input
      type="text"
      value={columnFilterValue ?? ""}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="form-control form-control-sm"
    />
  )
}

const RbEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`<===========RbEditableTable.js==============>
          
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table"
import { makeData } from '../makeData';

function useDefaultColumn({ getValue, row: { index }, column: { id }, table }) {
  const initialValue = getValue();
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    setValue,
    onBlur,
  };
}

// Give our default column cell renderer editing superpowers!
const defaultColumn = {
  cell: function Cell(props) {
    const { value, setValue, onBlur } = useDefaultColumn(props);

    return (`}</code><code className="language-markup">{`
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />`}</code><code className="language-javascript">{`
    );
  },
};

function useSkipper() {
  const shouldSkipRef = useRef(true)
  const shouldSkip = shouldSkipRef.current

  // Wrap a function with this to skip a pagination reset temporarily
  const skip = React.useCallback(() => {
    shouldSkipRef.current = false
  }, [])

  React.useEffect(() => {
    shouldSkipRef.current = true
  })

  return [shouldSkip, skip]
}

const RbEditableTable = (props) => {

  return (
  const rerender = useReducer(() => ({}), {})[1]
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: () => <span>First Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: props => props.column.id,
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => makeData(1000))
  const refreshData = () => setData(() => makeData(1000))

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex,
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        skipAutoResetPageIndex()
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value
              }
            }
            return row
          })
        )
      }
    },
    debugTable: true
  })

  return (`}</code><code className="language-markup">{`
    <>
      <div className="demo-wrapper">
        <div style={{ marginBottom: "10px" }}>
          <h5> Editable / CRUD Table</h5>
          <div style={{ marginRight: "10px" }}>
            <table className='table table-sm'>
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                      return (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <div>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column.getCanFilter() ? (
                                <div>
                                  <Filter column={header.column} table={table} />
                                </div>
                              ) : null}
                            </div>
                          )}
                        </th>
                      )
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <div>
                <button className='btn btn-sm btn-primary mr-2' onClick={() => rerender()}>Force Rerender</button>
                <button className='btn btn-sm btn-secondary mr-2' onClick={() => refreshData()}>Refresh Data</button>
              </div>

              <div className='d-flex align-items-start gap-1'>
                <button
                  className="btn btn-sm btn-outline-primary cursor-disabled"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <strong>{'<<'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <strong>{'<'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <strong>{'>'}</strong>
                </button>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <strong>{'>>'}</strong>
                </button>
              </div>

              <span className="d-flex gap-1">
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{' '}
                  {table.getPageCount()}
                </strong>

                <span>
                  | Go to page:
                  <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      table.setPageIndex(page)
                    }}
                    className="border p-1 rounded w-16"
                  />
                </span>
                <select
                  className='form-select form-select-sm'
                  value={table.getState().pagination.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>`}</code><code className="language-javascript">{`
  );
};

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === "number" ? (`}</code><code className="language-markup">{`
    <div>
      <input
        type="number"
        value={columnFilterValue?.[0] ?? ""}
        onChange={e => column.setFilterValue(old => [e.target.value, old?.[1]])}
        placeholder={\`Min\`}
        className="w-24 border rounded"
      />
      <input
        type="number"
        value={columnFilterValue?.[1] ?? ""}
        onChange={e => column.setFilterValue(old => [old?.[0], e.target.value])}
        placeholder={\`Max\`}
        className="w-24 border rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={columnFilterValue ?? ""}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={\`Search...\`}
      className="w-36 border rounded"
    />`}</code><code className="language-javascript">{`
  );
}

export { RbEditableTable };

<============makeData.js==================>

import { faker } from "@faker-js/faker"

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(40),
        visits: faker.datatype.number(1000),
        progress: faker.datatype.number(100),
        createdAt: faker.datatype.datetime({ max: new Date().getTime() }),
        status: faker.helpers.shuffle(["accepted", "rejected", "in process"])[0]
    }
}

export function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            }
        })
    }

    return makeDataLevel()
}

`}
        </code>
      </pre>
    </div>
  );
};
export { RbEditableTable, RbEditableTableCode };
