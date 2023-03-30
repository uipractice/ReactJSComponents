import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import Prism from "prismjs";
import "../../prism.css";

const MatAPITable = () => {
  const columns =
    useMemo(() =>
      [
        { header: "ID", accessorKey: "id" },
        { header: "Email", accessorKey: "email" },
        { header: "First Name", accessorKey: "first_name" },
        { header: "Last Name", accessorKey: "last_name" }
      ],
      [],);

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = 'https://reqres.in/api/users?page=2'

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  return (
    <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        Table with Dynamically fetched data from 3rd party API
      </div>
      <div style={{ marginRight: "10px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableTopToolbar={true}
          enableSorting={false}
          enableRowSelection={false}
          getRowId={(row) => row.id}
          manualFiltering
          manualPagination
          manualSorting
          muiToolbarAlertBannerProps={
            isError
              ? {
                color: 'error',
                children: 'Error loading data',
              }
              : undefined
          }
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          rowCount={rowCount}
          state={{
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isRefetching,
            sorting,
          }}
        />
      </div>
      <div className="compo-description">
        <h4>Description</h4>
        <p>
          API Data Table, with dynamically fetched data from a 3rd party API.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>
            <strong>Step 1 :</strong> Install Dependency in your project root
            folder :{" "}
            <code>
              npm install material-react-table
            </code>
          </li>
          <li>
            <strong>Step 2 :</strong> Import component in view where ever its
            necessary:{" "}
            <code>{`import MaterialReactTable from 'material-react-table';`}</code>
            <br />
          </li>
          <li>
            <strong>Step 3 :</strong> Refer React-Material UI code under the
            'Code' tab, to understand the usage of different variations of the
            API Table.
          </li>
        </ul>
      </div>
    </div>
  );
};

const MatAPITableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Material-UI code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">{`
import React, { useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";

const MatAPITable = () => {
  const columns =
    useMemo(() =>
      [
        { header: "ID", accessorKey: "id" },
        { header: "Email", accessorKey: "email" },
        { header: "First Name", accessorKey: "first_name" },
        { header: "Last Name", accessorKey: "last_name" }
      ],
      [],);

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = 'https://reqres.in/api/users?page=2'

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  return (`}</code>{" "}
        <code className="language-markup">{`
    <div className="demo-wrapper">
      <div style={{ marginBottom: "10px" }}>
        Table with Dynamically fetched data from 3rd party API
      </div>
      <div style={{ marginRight: "10px" }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableTopToolbar={true}
          enableSorting={false}
          enableRowSelection={false}
          getRowId={(row) => row.id}
          initialState={{ showColumnFilters: true }}
          manualFiltering
          manualPagination
          manualSorting
          muiToolbarAlertBannerProps={
            isError
              ? {
                color: 'error',
                children: 'Error loading data',
              }
              : undefined
          }
          onColumnFiltersChange={setColumnFilters}
          onGlobalFilterChange={setGlobalFilter}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          rowCount={rowCount}
          state={{
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isRefetching,
            sorting,
          }}
        />
      </div>`}</code><code className="language-javascript">{`
  );
};`}</code>
      </pre>
    </div>
  );
};

export { MatAPITable, MatAPITableCode };
