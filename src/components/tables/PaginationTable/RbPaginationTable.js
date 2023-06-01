import React, { useEffect, useState, useMemo } from 'react'
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import { Table, Pagination } from 'react-bootstrap'
import { makeData } from "../makeData"

export const RbPaginationTable = () => {

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      {
        accessorKey: 'firstName',
        header: "First Name",
      },
      {
        accessorKey: 'lastName',
        header: "Last Name",
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress (%)',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'company',
        header: 'Company',
      },
      {
        accessorKey: 'phone',
        header: 'Contact No.',
      },
      {
        accessorKey: "department",
        header: "Department"
      },
      {
        accessorKey: "account",
        header: "Account Type"
      },
      {
        accessorKey: "role",
        header: "Role Summary"
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(50))

  let currentPage = 1
  const pageSize = 10;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const totalPages = Math.ceil(data.length / pageSize);

  const tableRows = table.getRowModel().rows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="demo-wrapper">
      <div className='mb-2'>
        The Pagination component enables the user to select a specific page from a range of pages.
      </div>
      <div className='mr-2'>
        <div className='d-flex justify-content-end p-2'>
          <Pagination>
            <Pagination.First onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
            <Pagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
            {[...Array(totalPages).keys()].map(page => (
              <Pagination.Item
                key={page}
                active={(page === 0 && !table.getState().pagination.pageIndex) || (page === table.getState().pagination.pageIndex)}
                onClick={() => table.setPageIndex(page)}
              >
                {page + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            <Pagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
          </Pagination>
        </div>
        <div className="scrollable-horizontal">
          <Table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className='table-primary'>
                  {headerGroup.headers.map(header => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div className='column-width'>
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
              {tableRows.map(row => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell, index) => {
                      return (
                        <td
                          key={cell.id}
                          className={index === row.getVisibleCells().length - 1 ? 'column-end-width' : 'column-width'}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
        <div className='d-flex justify-content-end p-2'>
          <Pagination>
            <Pagination.First onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
            <Pagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
            {[...Array(totalPages).keys()].map(page => (
              <Pagination.Item
                key={page}
                active={(page === 0 && !table.getState().pagination.pageIndex) || (page === table.getState().pagination.pageIndex)}
                onClick={() => table.setPageIndex(page)}
              >
                {page + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            <Pagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
          </Pagination>
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
            <code>{`import {useReactTable, getCoreRowModel, getPaginationRowModel, flexRender} from '@tanstack/react-table'`}
            </code>
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
      <pre className='pre-code'>
        <code className="language-javascript">

          {` <=======RbPaginationTable.js=======>

import React, { useEffect, useState, useMemo } from 'react'
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import { Pagination } from 'react-bootstrap'
import { makeData } from "../makeData"

export const RbPaginationTable = (props) => { 

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      {
        accessorKey: 'firstName',
        header: "First Name",
      },
      {
        id: 'lastName',
        header: "Last Name",
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress (%)',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'company',
        header: 'Company',
      },
      {
        accessorKey: 'phone',
        header: 'Contact No.',
      },
      {
        accessorKey: "department",
        header: "Department"
      },
      {
        accessorKey: "account",
        header: "Account Type"
      },
      {
        accessorKey: "role",
        header: "Role Summary"
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(100))

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (`} </code>
        <code className="language-markup">
          {`
    <div className="demo-wrapper">
    <div className='mb-2'>
      The Pagination component enables the user to select a specific page from a range of pages.
    </div>
    <div className="mr-2">
        <div className='d-flex justify-content-end p-2'>
          <Pagination>
            <Pagination.First onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
            <Pagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
            {[...Array(totalPages).keys()].map(page => (
              <Pagination.Item
                key={page}
                active={(page === 0 && !table.getState().pagination.pageIndex) || (page === table.getState().pagination.pageIndex)}
                onClick={() => table.setPageIndex(page)}
              >
                {page + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            <Pagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
          </Pagination>
        </div>
        <div className="scrollable-horizontal">
          <Table>
          <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className='table-primary'>
                  {headerGroup.headers.map(header => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div className='column-width'>
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
              {tableRows.map(row => {
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
    </Table>
    </div>
    <div className='d-flex justify-content-end p-2'>
      <Pagination>
        <Pagination.First onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
        <Pagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
        {[...Array(totalPages).keys()].map(page => (
          <Pagination.Item
            key={page}
            active={(page === 0 && !table.getState().pagination.pageIndex) || (page === table.getState().pagination.pageIndex)}
            onClick={() => table.setPageIndex(page)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
        <Pagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
      </Pagination>
    </div>
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
        status: faker.helpers.shuffle(["accepted", "rejected", "in process"])[0],
        state: faker.address.state(),
        company: faker.company.name(),
        phone: faker.phone.number(),
        department: faker.commerce.department(),
        role: faker.company.bs(),
        account: faker.finance.accountName(),
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