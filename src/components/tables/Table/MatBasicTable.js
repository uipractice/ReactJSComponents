import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Prism from "prismjs";
import '../../prism.css';
import { useEffect } from 'react';

// styles for Table 2 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
// Styles for Table 3
  const DarkStyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor:theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));

  // constants
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  // Demo code for basic table
export const MatBasicTable = () => {
  return (
    <div className="demo-wrapper">

<div style={{ marginBottom: "10px" }}>
A simple Table, with no frills.
      </div>
      <div style={{ marginRight: "10px" }}>
{/* Table 1 */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
<br></br>
{/* Table 2 */}
      <div style={{ marginBottom: "10px" }}>
      Table, with <code>striped</code>, <code>bordered</code> and <code>hover</code> props and styles for each TableCell.
      </div>
      <div style={{ marginRight: "10px" }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Basic table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow hover key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <br/>
    {/* Table 3 ( Dark mode ) */}
    <div style={{ marginBottom: "10px" }}>
    Table, with dark mode used <code>theme.palette</code> for representing in Dark style. </div>
      <div style={{ marginRight: "10px" }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Basic Dark table">
        <TableHead>
          <TableRow>
            <DarkStyledTableCell>Dessert (100g serving)</DarkStyledTableCell>
            <DarkStyledTableCell align="right">Calories</DarkStyledTableCell>
            <DarkStyledTableCell align="right">Fat&nbsp;(g)</DarkStyledTableCell>
            <DarkStyledTableCell align="right">Carbs&nbsp;(g)</DarkStyledTableCell>
            <DarkStyledTableCell align="right">Protein&nbsp;(g)</DarkStyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow hover key={row.name}>
              <DarkStyledTableCell component="th" scope="row">
                {row.name}
              </DarkStyledTableCell>
              <DarkStyledTableCell align="right">{row.calories}</DarkStyledTableCell>
              <DarkStyledTableCell align="right">{row.fat}</DarkStyledTableCell>
              <DarkStyledTableCell align="right">{row.carbs}</DarkStyledTableCell>
              <DarkStyledTableCell align="right">{row.protein}</DarkStyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
<br/>
{/* Component Description */}
    <div className="compo-description">
                <h4>Description</h4>
                <p>
                  Table display information in a way that's easy to scan, so that users can look for patterns and insights.
                </p>
                <h5>Steps</h5>
                <ul>
                    <li>
                        <strong>Step 1 :</strong> Install Dependency to your project root
                        folder : <code>npm install @material-ui/core --save-dev</code>   <br/>  
<code>npm install @mui/material @emotion/react @emotion/styled --force</code> <br/> 
<code>npm install @mui/icons-material --force</code> <br/> 
<code>npm install @mui/lab --force</code> <br/> 
                    </li>
                    <li>
                        <strong>Step 2 :</strong> Import components, for BasicTable:{" "}
                        <code>{`import { styled } from '@mui/material/styles';`}</code><br/>
<code>{`import Table from '@mui/material/Table';`}</code><br/>
<code>{`import TableBody from '@mui/material/TableBody';`}</code><br/>
<code>{`import TableCell, { tableCellClasses } from '@mui/material/TableCell';`}</code><br/>
<code>{`import TableContainer from '@mui/material/TableContainer';`}</code><br/>
<code>{`import TableHead from '@mui/material/TableHead';`}</code><br/>
<code>{`import TableRow from '@mui/material/TableRow';`}</code><br/>
<code>{`import Paper from '@mui/material/Paper';`}</code><br/>
                    </li>
                    <li>
                        <strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to
                        understand the usage of component.
                    </li>
                </ul>
            </div>
    </div>

  );
}
// Code component.
export const MatBasicTableCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (<div className='jsx-code-wrapper'>
  <h4>React Material UI code</h4>
  <pre style={{marginRight: '20px', background: '#fff'}}>
    <code className='language-javascript'>{`< ------- MatBasicTable.js ------- >
    import * as React from 'react';
    import { styled } from '@mui/material/styles';
    import Table from '@mui/material/Table';
    import TableBody from '@mui/material/TableBody';
    import TableCell, { tableCellClasses } from '@mui/material/TableCell';
    import TableContainer from '@mui/material/TableContainer';
    import TableHead from '@mui/material/TableHead';
    import TableRow from '@mui/material/TableRow';
    import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
[\`&.${tableCellClasses.head}\`]: {
backgroundColor: theme.palette.common.white,
color: theme.palette.common.black,
},
[\`&.${tableCellClasses.body}\`]: {
fontSize: 14,
},
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
'&:nth-of-type(odd)': {
backgroundColor: theme.palette.action.hover,
},
// hide last border
'&:last-child td, &:last-child th': {
border: 0,
},
}));
// Styles for Table 3
const DarkStyledTableCell = styled(TableCell)(({ theme }) => ({
[\`&.${tableCellClasses.head}\`]: {
backgroundColor: theme.palette.common.black,
color: theme.palette.common.white,
},
[\`&.${tableCellClasses.body}\`]: {
fontSize: 14,
backgroundColor:theme.palette.common.black,
color: theme.palette.common.white,
},
}));
// constants
function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}
const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const MatBasicTable = () => {
        return (`}</code>

  <code className='language-markup'>
  {`<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>`}
</code>
    </pre>
  </div>
  )};