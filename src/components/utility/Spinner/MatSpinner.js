import React, { useEffect, useState, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Prism from "prismjs";
import '../../prism.css';

function MatSpinner() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <div className='demo-wrapper'>
      <div><strong>Default spinners with color variants</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Stack direction="row" spacing={2}>
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="error" />
          <CircularProgress color="warning" />
        </Stack>
      </div>
      <div><strong>Interactive integration (with buttons, etc.)</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ m: 1, position: 'relative' }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>

          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              variant="contained"
              sx={buttonSx}
              disabled={loading}
              onClick={handleButtonClick}
            >
              Accept terms
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Box>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Spinner Component, Spinners can be used to show the loading state in our Applications.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, for Spinner(CircularProgress): <code>import CircularProgress from '@mui/material/CircularProgress';</code></li>
          <li><strong>Step 3 :</strong> Import other components as per customisation.</li>
          <li><strong>Step 4 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatSpinnerCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';

function MatSpinner() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
        `}</code><code className='language-markup'>{`
        <div className='demo-wrapper'>
      <div><strong>Default spinners with color variants</strong></div>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="error" />
        <CircularProgress color="warning" />
      </Stack>
      <div><strong>Interactive integration (with buttons, etc.)</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ m: 1, position: 'relative' }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>

          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              variant="contained"
              sx={buttonSx}
              disabled={loading}
              onClick={handleButtonClick}
            >
              Accept terms
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Box>
      </div>
`}</code><code className='language-javascript'>{`
  );
}export default MatSpinner;`}
        </code>
      </pre>
    </div>
  );
}

export { MatSpinner, MatSpinnerCode };