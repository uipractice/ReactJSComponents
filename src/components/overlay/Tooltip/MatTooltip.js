import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/material';
import Prism from "prismjs";
import '../../prism.css';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function MatTooltip() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Tooltips</strong></div>
      <div className='MuiSimpleToolTip-wrapper'>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <div><strong>Positioned Tooltips</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Box sx={{ width: 500 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={6} alignItems="flex-end" direction="column">
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ marginTop: '10px' }}><strong>Customized Tooltips</strong></div>
      <div style={{ marginTop: '10px' }}>
        <LightTooltip title="Add">
          <Button>Light</Button>
        </LightTooltip>
        <BootstrapTooltip title="Add">
          <Button>Bootstrap</Button>
        </BootstrapTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Tooltip with HTML</Typography>
              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
              {"It's very engaging. Right?"}
            </React.Fragment>
          }
        >
          <Button>HTML</Button>
        </HtmlTooltip>
      </div>
      <div style={{ marginTop: '10px' }}><strong>Tooltip Triggers</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Grid container>
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Tooltips display informative text when users hover over, focus on, or tap an element.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, for Tooltip: <code>import Tooltip from '@mui/material/Tooltip';</code><br />
            For Icons and Trigger Components <code>import IconButton from '@mui/material/IconButton';</code><br /><code>
              import DeleteIcon from '@mui/icons-material/Delete';</code><br />
            <code>import AddIcon from '@mui/icons-material/Add';</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatTooltipCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/material';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: cla  ssName }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.arrow}\`]: {
    color: theme.palette.common.black,  
  },
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function MatTooltip() {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Tooltips</strong></div>
      <div>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <div><strong>Positioned Tooltips</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Box sx={{ width: 500 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={6} alignItems="flex-end" direction="column">
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ marginTop: '10px' }}><strong>Customized Tooltips</strong></div>
      <div style={{ marginTop: '10px' }}>
        <LightTooltip title="Add">
          <Button>Light</Button>
        </LightTooltip>
        <BootstrapTooltip title="Add">
          <Button>Bootstrap</Button>
        </BootstrapTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Tooltip with HTML</Typography>
              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
              {"It's very engaging. Right?"}
            </React.Fragment>
          }
        >
          <Button>HTML</Button>
        </HtmlTooltip>
      </div>
      <div style={{ marginTop: '10px' }}><strong>Tooltip Triggers</strong></div>
      <div style={{ marginTop: '10px' }}>
        <Grid container>
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
        `}</code>
        <code className='language-javascript'>{`
}
export default MatTooltip;
  `}</code>

      </pre>
    </div>
  );
}

export { MatTooltip, MatTooltipCode };