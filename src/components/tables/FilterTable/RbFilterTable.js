import React, { useState, useEffect, useMemo } from 'react'
import "../../prism.css";
import Prism from "prismjs";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table"
import { makeData } from "../makeData"
import { Table } from 'react-bootstrap';

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const cellValue = row.getValue(columnId);

  // Prepare the regular expression pattern to match the query exactly and in order
  const escapedValue = escapeRegExp(value);
  const pattern = escapedValue
    .split('')
    .map((char) => (char === ' ' ? '\\s?' : escapeRegExp(char)))
    .join('');

  // Create a regular expression using the constructed pattern with the 'i' flag for case insensitivity
  const queryRegex = new RegExp(pattern, 'i');

  // Check if the cell value matches the query exactly and in order
  const passed = queryRegex.test(cellValue);

  // Store the filter result in the metadata
  addMeta({ passed });

  return passed;
};

// Helper function to escape special characters in the query
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const RbFilterTable = () => {

  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: 'firstName',
        header: "First Name",
      },
      {
        accessorKey: 'lastName',
        header: "Last Name",
      },
      {
        accessorKey: 'visits',
        header: "Visits",
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'company',
        header: 'Company',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(50))

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  })

  return (
    <>
      <div className="demo-wrapper">
        <div className='mb-2'>
          Filter Table with Dynamically fetched data from 3rd party API
        </div>
        <div className='mr-2'>
          <div className='mb-2'>
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={value => setGlobalFilter(String(value))}
              className="form-control w-25"
              placeholder="Search all columns..."
            />
          </div>
          <div className="scrollable-vertical scrollable-horizontal">
            <Table>
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} className='table-primary'>
                    {headerGroup.headers.map(header => {
                      return (
                        <th key={header.id} colSpan={header.colSpan} className='column-width'>
                          {header.isPlaceholder ? null : (
                            <>
                              <div
                                {...{
                                  className: header.column.getCanSort()
                                    ? "cursor-pointer select-none"
                                    : "",
                                  onClick: header.column.getToggleSortingHandler()
                                }}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {{
                                  asc: " 🔼",
                                  desc: " 🔽"
                                }[header.column.getIsSorted()] ?? null}
                              </div>
                              {header.column.getCanFilter() ? (
                                <div className='column-width'>
                                  <Filter column={header.column} table={table} />
                                </div>
                              ) : null}
                            </>
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
                      {row.getAllCells().map(cell => {
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
        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Filter Table Component, in which data can be filtered based on user
            inputs for each columns
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
              <code>
                {`npm install @tanstack/match-sorter-utils`}
              </code>
            </li>
            <li>
              <strong>Step 2 :</strong> Import component in view where ever its
              necessary:{" "}<br />
              <code>{`import {`}</code><br />
              <code>{`useReactTable`}</code><br />
              <code>{`getCoreRowModel`}</code><br />
              <code>{`getFilteredRowModel`}</code><br />
              <code>{`getFacetedRowModel`}</code><br />
              <code>{`getFacetedUniqueValues`}</code><br />
              <code>{`getFacetedMinMaxValues`}</code><br />
              <code>{`getPaginationRowModel`}</code><br />
              <code>{`sortingFns`}</code><br />
              <code>{`getSortedRowModel`}</code><br />
              <code>{`flexRender`}</code><br />
              <code>{`}`}</code><br />
              <code>{`from "@tanstack/react-table"`}</code><br />
              <code>{`import { rankItem, compareItems } from "@tanstack/match-sorter-utils"`}</code>
              <br />
            </li>
            <li>
              <strong>Step 3 :</strong> Refer React-Material code under the 'Code' tab, to
              understand the usage of component.
            </li>
          </ul>
        </div>
      </div >
    </>
  )
}


function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === "number" ? (
    <div className='input-group input-group-sm'>
      <DebouncedInput
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
        value={columnFilterValue?.[0] ?? ""}
        onChange={value => column.setFilterValue(old => [value, old?.[1]])}
        placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
          ? `(${column.getFacetedMinMaxValues()?.[0]})`
          : ""
          }`}
        className="form-control form-control-sm"
      />
      <DebouncedInput
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
        value={columnFilterValue?.[1] ?? ""}
        onChange={value => column.setFilterValue(old => [old?.[0], value])}
        placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
          ? `(${column.getFacetedMinMaxValues()?.[1]})`
          : ""
          }`}
        className="form-control form-control-sm"
      />
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 50).map(value => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={value => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="form-control form-control-sm"
        list={column.id + "list"}
      />
    </>
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

export const RbFilterTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre className='pre-code'>
        <code className="language-javascript">{`
import React, { useState, useEffect, useMemo, useReducer } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table"

import { makeData } from "../makeData"

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const cellValue = row.getValue(columnId);

  // Prepare the regular expression pattern to match the query exactly and in order
  const escapedValue = escapeRegExp(value);
  const pattern = escapedValue
    .split('')
    .map((char) => (char === ' ' ? '\\\\s?' : escapeRegExp(char)))
    .join('');

  // Create a regular expression using the constructed pattern with the 'i' flag for case insensitivity
  const queryRegex = new RegExp(pattern, 'i');

  // Check if the cell value matches the query exactly and in order
  const passed = queryRegex.test(cellValue);

  // Store the filter result in the metadata
  addMeta({ passed });

  return passed;
};

// Helper function to escape special characters in the query
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
};

export const RbFilterTable = (props) => {

  const [columnFilters, setColumnFilters] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: 'firstName',
        header: "First Name",
      },
      {
        accessorKey: 'lastName',
        header: "Last Name",
      },
      {
        accessorKey: 'visits',
        header: "Visits",
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'company',
        header: 'Company',
      },
    ],
    []
  )

  const [data, setData] = useState(() => makeData(50))

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      columnFilters,
      globalFilter
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  })

  return (`} </code>
        <code className="language-markup">{`
      <>
        <div className="mb-1">
          Filter Table with Dynamically fetched data from 3rd party API
        </div>
        <div className="mr-2">
          <div className='mb-2'>
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={value => setGlobalFilter(String(value))}
              className="p-2 font-lg border border-block"
              placeholder="Search all columns..."
            />
          </div>
          <Table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <>
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick: header.column.getToggleSortingHandler()
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: " 🔼",
                                desc: " 🔽"
                              }[header.column.getIsSorted()] ?? null}
                            </div>
                            {header.column.getCanFilter() ? (
                              <div>
                                <Filter column={header.column} table={table} />
                              </div>
                            ) : null}
                          </>
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
          </Table>
        </div>
      </>
    )
}`}</code><code className="language-javascript">{`

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === "number" ? (`}</code><code className="language-markup">{`
      <div className='input-group input-group-sm'>
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[0] ?? ""}
          onChange={value => column.setFilterValue(old => [value, old?.[1]])}
          placeholder={\`Min \${column.getFacetedMinMaxValues()?.[0]
            ? \`(\${column.getFacetedMinMaxValues()?.[0]})\`
            : ""
            }\`}
          className="form-control form-control-sm"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={columnFilterValue?.[1] ?? ""}
          onChange={value => column.setFilterValue(old => [old?.[0], value])}
          placeholder={\`Max \${column.getFacetedMinMaxValues()?.[1]
            ? \`(\${column.getFacetedMinMaxValues()?.[1]})\`
            : ""
            }\`}
          className="form-control form-control-sm"
        />
      </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map(value => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={value => column.setFilterValue(value)}
        placeholder={\`Search... (\${column.getFacetedUniqueValues().size})\`}
        className="form-control form-control-sm"
        list={column.id + "list"}
      />
    </>`}</code><code className="language-javascript">{`
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (`}</code><code className="language-markup">{`
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />`}</code><code className="language-javascript">`{`
    )
}
`}
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
  )
}