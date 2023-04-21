import React, { useEffect, useState, useMemo, useReducer } from 'react'
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import { makeData } from "../makeData"

export const RbPaginationTable = (props) => {
  const rerender = useReducer(() => ({}), {})[1]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        header: () => <span>First Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
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
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(100000))
  const refreshData = () => setData(() => makeData(100000))
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  return (
    <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        The Pagination component enables the user to select a specific page from a range of pages.
      </div>
      <div style={{ marginRight: "20px" }}>
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
                      <td key={cell.id} className='column-width'>
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
          The Pagination component enables the user to select a specific page from a range of pages.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency to your project root
            folder :{" "}
            <code>
              {`npm install @tanstack/react-table`}
            </code>
            <br />
          </li>
          <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary:{" "}
            <code>{`import React, { useEffect } from 'react'`}</code>
            <br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer React-Material code under the 'Code' tab, to
            understand the usage of component.
          </li>
        </ul>
      </div>
    </div>
  )
}

export const RbPaginationTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">

          {` <=======RbPaginationTable.js=======>

import React, { useEffect, useState, useMemo } from 'react'
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import { makeData } from "../makeData"

export const RbPaginationTable = (props) => { 
  const rerender = useReducer(() => ({}), {})[1]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        header: () => <span>First Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.lastName,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
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
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(100000))
  const refreshData = () => setData(() => makeData(100000))
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  return (`} </code>
        <code className="language-markup">
          {`<div style={{ marginBottom: "10px" }}>
     The Pagination component enables the user to select a specific page from a range of pages.
    </div>
    <div style={{ marginRight: "20px" }}>
      <table className='table'>
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

          <span className="d-flex justify-content-between gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>

            <span className="flex items-center gap-1">
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
      </div>
    )
  }`}
        </code>
        <code className="language-javascript">
          {`
          
<=========makeData.js==============>

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
  )
}