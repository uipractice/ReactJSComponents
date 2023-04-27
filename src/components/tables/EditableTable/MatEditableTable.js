import React, { useMemo, useState, useEffect, useCallback } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Prism from "prismjs";
import '../../prism.css';

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button variant='outlined' color='secondary' onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

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
      id: 4,
      name: 'Walter',
      surname: 'White',
      birthYear: 2017,
      birthCity: 'Goa',
    },
    {
      id: 5,
      name: 'Penelope',
      surname: 'Carson',
      birthYear: 1888,
      birthCity: 'Madrid',
    },
    {
      id: 6,
      name: 'Salman',
      surname: 'Khan',
      birthYear: 1966,
      birthCity: 'Mumbai',
    },
    {
      id: 7,
      name: 'Larry',
      surname: 'Page',
      birthYear: 1975,
      birthCity: 'San Francisco',
    },
    {
      id: 8,
      name: 'Dana',
      surname: 'Kruger',
      birthYear: 1919,
      birthCity: 'London',
    },
  ],
    [],
  );

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !window.confirm(`Are you sure you want to delete ${row.getValue('name')}?`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  return (
    <div className="demo-wrapper">
      <>
        <MaterialReactTable
          displayColumnDefOptions={{
            'mrt-row-actions': {
              muiTableHeadCellProps: {
                align: 'center',
              },
              size: 120,
            },
          }}
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Button
              color="primary"
              onClick={() => setCreateModalOpen(true)}
              variant="contained"
            >
              Create New Account
            </Button>
          )}
        />
        <CreateNewAccountModal
          columns={columns}
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onSubmit={handleCreateNewRow}
        />
      </>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Editable Table Component, in which we can perform CRUD, Sort, Search & Filter, also provides pagination.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-react-table;</code></li>
          <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialReactTable from 'material-react-table;</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

export const MatEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (<div className='jsx-code-wrapper'>
    <h4>React Material UI code</h4>
    <pre style={{ marginRight: '20px', background: '#fff' }}>
      <code className='language-javascript'>{`
import React, { useMemo, useState, useEffect, useCallback } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (`}
      </code>
      <code className='language-markup'>{`
    <Dialog open={open}>
    <DialogTitle textAlign="center">Create New Account</DialogTitle>
    <DialogContent>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack
          sx={{
            width: '100%',
            minWidth: { xs: '300px', sm: '360px', md: '400px' },
            gap: '1.5rem',
          }}
        >
          {columns.map((column) => (
            <TextField
              key={column.accessorKey}
              label={column.header}
              name={column.accessorKey}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          ))}
        </Stack>
      </form>
    </DialogContent>
    <DialogActions sx={{ p: '1.25rem' }}>
      <Button onClick={onClose}>Cancel</Button>
      <Button color="secondary" onClick={handleSubmit} variant="contained">
        Create New Account
      </Button>
    </DialogActions>
  </Dialog>`}</code><code className="language-javascript">{`
  );
}

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

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !window.confirm(\`Are you sure you want to delete \${row.getValue('name')}?\`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  return (`}</code><code className="language-markup">{`
  <div className="demo-wrapper">
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Account
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  </div>
  `}</code><code className="language-javascript">{`
  );
}

export default MatEditableTable;
    `}</code>
    </pre>
  </div>
  )
};        