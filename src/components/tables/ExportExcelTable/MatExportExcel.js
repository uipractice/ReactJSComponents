import React, { useEffect, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';
import Prism from "prismjs";
import "../../prism.css";

export const MatExportExcel = () => {

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
        csvExporter.generateCsv(data);
    };

    return (
        <div className="demo-wrapper">
            <div className='mb-2'>
                The Export to Excel table component enables the user to export the table data to an Excel file.
            </div>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableRowSelection
                positionToolbarAlertBanner="bottom"
                renderTopToolbarCustomActions={() => (
                    <Button
                        color="primary"
                        onClick={handleExportData}
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                    >
                        Export to Excel
                    </Button>
                )}
            />
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
                        <strong>Step 3 :</strong> Refer React-Material code under the 'Code'
                        tab, to understand the usage of component.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const MatExportExcelCode = () => {
    useEffect(() => Prism.highlightAll(), [])
    return (
        <div className="jsx-code-wrapper">
            <h4>React Material UI code</h4>
            <pre className="pre-code">
                <code className="language-javascript">
                    {`<============MatExportExcel.js=============>

import React, { useEffect, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { ExportToCsv } from 'export-to-csv';
import Prism from "prismjs";
import "../../prism.css";
                
const MatExportExcel = () => {

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
        csvExporter.generateCsv(data);
    };
                
    return (
            `}
                </code>
                <code className="language-markup">
                    {`
        <MaterialReactTable
            columns={columns}
            data={data}
            enableRowSelection
            positionToolbarAlertBanner="bottom"
            renderTopToolbarCustomActions={() => (
                    <Button
                        color="primary"
                        //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                        onClick={handleExportData}
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                    >
                        Export All Data
                    </Button>
        />
            `}
                </code>
                <code className="language-javascript">
                    {`
                )}
            );
        };

export default MatExportExcel;
        `}
                </code>
            </pre>
        </div>
    )
}