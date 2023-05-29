import React, { useState, useEffect, useMemo } from "react";
import Prism from "prismjs";
import "../../prism.css";
import "./sortabletable.css";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table } from 'react-bootstrap';
import { makeData } from '../makeData'

export const RbSortableTable = () => {

  const [sorting, setSorting] = useState([])

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

  const [data, setData] = useState(() => makeData(10))

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="demo-wrapper">
      <div className='mb-1'>
        Sorting functionality allows you to sort the data of the tables
        according to any specific columns.
      </div>
      <div className="mr-2 scrollable-vertical scrollable-horizontal">
        <Table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='table-primary'>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none column-width'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted()] ?? <span className='empty-space'></span>}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => {
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
      <div className="compo-description">
        <h4>Description</h4>
        <p>
          Sorting functionality allows you to sort the data of the tables
          according to any specific columns.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency to your project root
            folder :<code>{'npm install @tanstack/react-table'}</code>
            <br />
          </li>
          <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary: <code>{`import {
              flexRender,
              getCoreRowModel,
              getSortedRowModel,
              useReactTable
              } from '@tanstack/react-table'`}</code>
            <br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer React-Material code under the 'Code'
            tab, to understand the usage of component.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const RbSortableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre className='pre-code'>
        <code className="language-javascript">
          {` <=======RbSortableTable.js=======>
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../../prism.css";
import "./sortabletable.css";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table } from 'react-bootstrap';
import { makeData } from '../makeData'

export const RbSortableTable = (props) => {
  const rerender = React.useReducer(() => ({}), {})[1]

  const [sorting, setSorting] = React.useState([])

  const columns = React.useMemo(
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

  const [data, setData] = useState(() => makeData(10))

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (`}{" "}
        </code>
        <code className="language-markup">{`
    <div className="mb-2">
     The Pagination component enables the user to select a specific page from a range of pages.
    </div>
    <div className="mr-2 scrollable-vertical scrollable-horizontal">
    <Table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id} className='table-primary'>
            {headerGroup.headers.map(header => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none column-width'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                      >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? <span className="empty-space"></span>}
                    </div>
                  )}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table
          .getRowModel()
          .rows.slice(0, 10)
          .map(row => {
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
  </div>
    )
}`}
        </code>
        <code className="language-javascript">
          {`

<=======makeData.js=======>

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
  );
};
