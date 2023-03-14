import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Prism from "prismjs";
import '../../prism.css';

function MatAlert() {
  const [open, setOpen] = useState(true);

  return (
    <div className='demo-wrapper'>
      <div style={{ marginBottom: '10px' }}><strong>Alert with Trigger Button</strong></div>
      <Box sx={{ width: '90%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
      <div style={{ marginTop: '10px' }}><strong>Simple Alerts with four severity levels </strong></div>
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Alert with <code>AlertTitle</code> component </strong></div>
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, for Alert: <code>import Alert from '@mui/material/Alert';</code><br />
            For AlertTitle: <code>import AlertTitle from '@mui/material/AlertTitle';</code><br />
            For IconButton: <code>import IconButton from '@mui/material/IconButton';</code><br />
            For Collapse: <code>import Collapse from '@mui/material/Collapse';</code><br />
            For Button: <code>import Button from '@mui/material/Button';</code><br />
            For CloseIcon: <code>import CloseIcon from '@mui/icons-material/Close';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatAlertCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function MatAlert() {
  const [open, setOpen] = useState(true);

  return (`}</code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div style={{marginBottom: '10px'}}><strong>Alert with Trigger Button</strong></div>
      <Box sx={{ width: '90%' }}>
        <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Close me!
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open
          </Button>
        </Box>
      <div style={{marginTop: '10px'}}><strong>Simple Alerts with four severity levels </strong></div>
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <div style={{marginTop: '10px'}}><strong>Alert with <code>AlertTitle</code> component </strong></div>
      <Stack sx={{ width: '90%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    </div>
  `}</code>
        <code className='language-javascript'>{`
  );
}

export default MatAlert;
`}</code>
      </pre>
    </div>
  );
}

export { MatAlert, MatAlertCode };