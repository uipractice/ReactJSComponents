import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Prism from "prismjs";
import '../../prism.css';

function MatPagination() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Basic pagination with variations</strong></div>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Outlined pagination with variations</strong></div>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Rounded pagination</strong></div>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Pagination Sizes</strong></div>
      <Stack spacing={2}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>A set of presentational components for building pagination UI, enables the user to select a specific page from a range of pages.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, Pagination: <code>import Pagination from '@mui/material/Pagination';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatPaginationCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MatPagination() {
  return(`}
        </code>
        <code className='language-markup'>{`
  <div className='demo-wrapper'>
    <div><strong>Basic pagination with variations</strong></div>
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
    <div style={{ marginTop: '10px' }}><strong>Outlined pagination with variations</strong></div>
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
    <div style={{ marginTop: '10px' }}><strong>Rounded pagination</strong></div>
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
    <div style={{ marginTop: '10px' }}><strong>Pagination Sizes</strong></div>
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  </div>
    `}</code>
        <code className='language-javascript'>{`
  );
}
export default MatPagination;
`
        }
        </code>
      </pre>
    </div>
  );
}

export { MatPagination, MatPaginationCode };