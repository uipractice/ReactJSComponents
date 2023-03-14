import React, { useState, useEffect, forwardRef } from 'react';
import PositionedToast from './PositionedToast';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Prism from "prismjs";
import '../../prism.css';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MatToast() {
  const [open, setOpen] = useState(false);
  const [cusopen, setCusopen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCusClick = () => {
    setCusopen(true);
  };

  const handleCusClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCusopen(false);
  };

  return (
    <div className='demo-wrapper'>
      <div><strong>A basic toast that aims to reproduce Google Keep's toast behavior.</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Button onClick={handleClick}>Open simple toast</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </div>
      <div><strong>Customized Toast</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Button variant="outlined" onClick={handleCusClick}>
          Open success toast
        </Button>
        <Snackbar open={cusopen} autoHideDuration={3000} onClose={handleCusClose}>
          <Alert onClose={handleCusClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
      <div style={{ margin: '10px 0 10px 0' }}><strong>Positioned Toasts</strong></div>
      <PositionedToast />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toasts are lightweight notifications, provides brief messages about app processes</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, for Toast: <code>import Snackbar from '@mui/material/Snackbar';</code> <br />
            For IconButton : <code>import IconButton from '@mui/material/IconButton';</code><br />
            For CloseIcon: <code>import CloseIcon from '@mui/icons-material/Close';</code><br />
            For MuiAlert: <code>import MuiAlert from '@mui/material/Alert';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatToastCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import PositionedToast from './PositionedToast';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MatToast(){
  const [open, setOpen] = useState(false);
  const [cusopen, setCusopen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCusClick = () => {
    setCusopen(true);
  };

  const handleCusClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCusopen(false);
  };

  return (
        `}</code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
    <div><strong>A basic toast that aims to reproduce Google Keep's toast behavior.</strong></div>
    <div style={{marginTop: '10px'}}>
      <Button onClick={handleClick}>Open simple toast</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
    <div><strong>Customized Toast</strong></div>
    <div style={{marginTop:'10px'}}>
      <Button variant="outlined" onClick={handleCusClick}>
        Open success Toast
      </Button>
      <Snackbar open={cusopen} autoHideDuration={3000} onClose={handleCusClose}>
        <Alert onClose={handleCusClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
    <div style={{margin:'10px 0 10px 0'}}><strong>Positioned Toasts</strong></div>
    <PositionedToast />
  </div>
    
    `}</code><code className='language-javascript'>{`
    </div>
  );
}export default MatToast;`}
        </code>
      </pre>
    </div>
  );
}

export { MatToast, MatToastCode };