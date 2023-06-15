import React, { useEffect, useMemo, useState } from "react";
import Prism from "prismjs";
import "../../prism.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table"
import { makeData } from '../makeData';
import { Button, Modal, Form, Table } from 'react-bootstrap';

const RbEditableTable = () => {

  function useDefaultColumn({ getValue, row: { index }, column: { id }, table, isEditing }) {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {

      if (isEditing) {
        table.options.meta?.updateData(index, id, value);
      }
    };

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return {
      value,
      setValue,
      onBlur,
      isEditing,
    };
  }

  const defaultColumn = {
    cell: function Cell(props) {
      const { value, setValue, onBlur, isEditing } = useDefaultColumn(props);
      return (
        <input
          className='form-control form-control-sm input-disabled border-none column-width'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          disabled={!isEditing}
        />
      );
    },
  };

  const columns = useMemo(
    () => [
      {
        header: "Actions",
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
        accessorKey: 'age',
        header: 'Age',
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
    ],
    []
  )

  const [data, setData] = useState(() => makeData(10))

  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
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
      },
      deleteRow: rowIndex => {
        const newData = data.filter((row, index) => index !== rowIndex);
        setData(newData);
        return newData;
      },
      addNewRow: newRow => {
        setData(old => {
          const newData = [...old, newRow];
          return newData
        });

      }
    },
  })

  useEffect(() => {
    setData(data);
  }, [data]);

  const [formData, setFormData] = useState({ firstName: '', lastName: '', age: '', status: '', profileProgress: '', });

  const handleClickEditRow = (index) => {
    if (editableRows.includes(index)) {
      setEditableRows(editableRows.filter((i) => i !== index));
    } else {
      setEditableRows([...editableRows, index]);
    }
  };

  const handleDeleteRow = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this row?");

    if (isConfirmed) {
      const newData = table.options.meta?.deleteRow(index);
      setData(newData);
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    table.options.meta.addNewRow({ id: Date.now(), ...formData });
    setFormData({});
    setShow(false);
  };

  const [show, setShow] = useState(false);
  const [editableRows, setEditableRows] = useState([]);

  const handleModal = () => {
    setShow(!show);
  }

  return (
    <>
      <div className="demo-wrapper">
        <div className='mb-1'>
          <h5> Editable / CRUD Table</h5>
          <div className='mr-2'>
            <div className='d-flex justify-content-between mb-1'>
              <button className='btn btn-sm btn-primary' onClick={handleModal}>Add new row</button>
            </div>
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
                  {data.map((rowData, index) => {
                    const row = table.getRow(index)
                    return (
                      row && (
                        <tr key={row.id}>
                          <td>
                            <span className="btn-group">
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDeleteRow(index)}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-sm btn-outline-secondary edit-button"
                                onClick={() => handleClickEditRow(index)}
                              >
                                {editableRows.includes(index) ? "Save" : "Edit"}
                              </button>
                            </span>
                          </td>
                          {row.getVisibleCells().slice(1).map(cell => {
                            return (
                              <td
                                key={cell.id}
                                className={editableRows.includes(index) ? 'hover-indicate' : ''}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  { ...cell.getContext(), isEditing: editableRows.includes(index) }
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      )
                    );
                  })}
                </tbody>
              </Table>
            </div>
            <Modal show={show} onHide={handleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add new row</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className='d-flex flex-column gap-2'>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter value" name="firstName" value={formData.firstName} onChange={handleFormChange} autoFocus />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter value" name="lastName" value={formData.lastName} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter value" name="age" value={formData.age} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Enter value" name="status" value={formData.status} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Profile progress</Form.Label>
                    <Form.Control type="number" placeholder="Enter value" name="profileProgress" value={formData.profileProgress} onChange={handleFormChange} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModal}>Cancel</Button>
                <Button variant="primary" onClick={handleFormSubmit}>Save changes</Button>
              </Modal.Footer>
            </Modal>
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

const RbEditableTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre className='pre-code'>
        <code className="language-javascript">
          {`<===========RbEditableTable.js==============>
          
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from "@tanstack/react-table"
import { makeData } from '../makeData';
import { Button, Modal, Form, Table } from 'react-bootstrap';

const RbEditableTable = (props) => {

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

    return (
      const columns = useMemo(
        () => [
          {
            header: "Actions",
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
            accessorKey: 'age',
            header: 'Age',
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
        ],
        []
      )

    const [data, setData] = useState(() => makeData(10))

    const table = useReactTable({
      data,
      columns,
      defaultColumn,
      getCoreRowModel: getCoreRowModel(),
      // Provide our updateData function to our table meta
      meta: {
        updateData: (rowIndex, columnId, value) => {
          // Skip page index reset until after next rerender
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
        },
        deleteRow: rowIndex => {
          const newData = data.filter((row, index) => index !== rowIndex);
          setData(newData);
          return newData;
        },
        addNewRow: newRow => {
          setData(old => {
            const newData = [...old, newRow];
            console.log("updated rowData====>", newData)
            return newData
          });
        },
      },
    })

    return (`}</code><code className="language-markup">{`
      <>
        <div className="demo-wrapper">
          <div className="mb-1">
            <h5> Editable / CRUD Table</h5>
            <div className='mr-2'>
              <div className='d-flex justify-content-between mb-1'>
                <button className='btn btn-sm btn-primary' onClick={handleModal}>Add new row</button>
              </div>
              <div className="scrollable-vertical scrollable-horizontal">
                  <Table>
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
                                <td key={cell.id} className={index === editingRowIndex ? 'hover-indicate' : ''}>
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
                  <Modal show={show} onHide={handleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add new row</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className='d-flex flex-column gap-2'>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter value" name="firstName" value={formData.firstName} onChange={handleFormChange} autoFocus />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter value" name="lastName" value={formData.lastName} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" placeholder="Enter value" name="age" value={formData.age} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Status</Form.Label>
                      <Form.Control type="text" placeholder="Enter value" name="status" value={formData.status} onChange={handleFormChange} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Profile progress</Form.Label>
                      <Form.Control type="number" placeholder="Enter value" name="profileProgress" value={formData.profileProgress} onChange={handleFormChange} />
                    </Form.Group>
                  </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleModal}>Cancel</Button>
                      <Button variant="primary" onClick={handleFormSubmit}>Save changes</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>`}</code><code className="language-javascript">{`
  );
}

`}</code><code className="language-javascript">{`
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
export { RbEditableTable, RbEditableTableCode };
