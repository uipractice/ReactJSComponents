import React, { useEffect, useState, useMemo } from 'react'
import Prism from 'prismjs'
import '../../prism.css'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table'
import { Table } from 'react-bootstrap'
import { makeData } from '../makeData'
import { ExportToCsv } from 'export-to-csv'

const RbExportExcel = () => {

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
                accessorKey: "visits",
                header: "Visits"
            },
            {
                accessorKey: 'progress',
                header: 'Profile Progress (%)',
            },
            {
                accessorKey: 'status',
                header: 'Status',
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
                accessorKey: "createdAt",
                header: "Created At"
            }
        ],
        []
    )

    const [data, setData] = useState(() => makeData(10))

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const handleExportData = () => {
        console.log(data);
        csvExporter.generateCsv(data);
    };

    return (
        <div className="demo-wrapper">
            <div className='mb-2'>
                The Export to Excel table component enables the user to export the table data to an Excel file.
            </div>
            <div className='mr-2'>
                <button onClick={handleExportData} className="btn btn-primary mb-1">Export To Excel</button>
                <div className="scrollable-vertical scrollable-horizontal">
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
                    </Table>
                </div>
            </div>
            <div className="compo-description">
                <h4>Description</h4>
                <p>
                    The Export to Excel table component enables the user to export the table data to an Excel file.
                </p>
                <h5>Steps</h5>
                <ul>
                    <li>
                        <strong>Step 1 :</strong> Install Dependency to your project root
                        folder :<code>npm install export-to-csv --save-dev</code>
                        <br />
                    </li>
                    <li>
                        <strong>Step 2 :</strong> Import component in view where ever its
                        necessary: <code>{`import { ExportToCsv } from 'export-to-csv';`}</code>
                        <br />
                    </li>
                    <li>
                        <strong>Step 3 :</strong> Refer React-Bootstrap code under the 'Code'
                        tab, to understand the usage of component.
                    </li>
                </ul>
            </div>
        </div>
    )
}

const RbExportExcelCode = () => {
    useEffect(() => Prism.highlightAll(), []);
    return (
        <div className="jsx-code-wrapper">
            <h4>React Bootstrap code</h4>
            <pre className="pre-code">
                <code className="language-javascript">
                    {`
<==========RbExportExcel.js============>
import React, { useEffect, useState, useMemo } from 'react'
import Prism from "prismjs"
import "../../prism.css"
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table'
import { Table } from 'react-bootstrap'
import { makeData } from "../makeData"
import { ExportToCsv } from 'export-to-csv'

const RbExportExcel = () => {

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
            accessorKey: "visits",
            header: "Visits"
        },
        {
            accessorKey: 'progress',
            header: 'Profile Progress (%)',
        },
        {
            accessorKey: 'status',
            header: 'Status',
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
            accessorKey: "createdAt",
            header: "Created At"
        }
    ],
    []
)

const [data, setData] = useState(() => makeData(10))

const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
})

const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
};

const handleExportData = () => {
    console.log(data);
    csvExporter.generateCsv(data);
};

return (
                    `}</code>
                <code className="language-markup">
                    {`
    <div className="demo-wrapper">
    <div className='mb-2'>
        The Export to Excel table component enables the user to export the table data to an Excel file.
    </div>
    <div className='mr-2'>
        <button onClick={handleExportData} className="btn btn-primary mb-1 mr-1">Export to Excel</button>
        <div className="scrollable-vertical scrollable-horizontal">
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
            </Table>
        </div>
                        `}
                </code><code className="language-javascript">
                    {`
    )
};

export default RbExportExcel;

<==============makeData.js=================>

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
        id: faker.datatype.number(100),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.datatype.number(40),
        visits: faker.datatype.number(1000),
        progress: faker.datatype.number(100),
        status: faker.helpers.shuffle(["accepted", "rejected", "in process"])[0],
        state: faker.address.state(),
        company: faker.company.name(),
        phone: faker.phone.number(),
        department: faker.commerce.department(),
        account: faker.finance.accountName(),
        role: faker.company.bs(),
        createdAt: faker.datatype.datetime({ max: new Date().getTime() }),
    }
}

export function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson()
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

export { RbExportExcelCode, RbExportExcel };