import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Prism from "prismjs";
import '../../prism.css';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function MatButtonGroup() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div className='demo-wrapper'>
      <div>
        <b>Basic button group</b>
        <br />
        The buttons can be grouped by wrapping them with the ButtonGroup component.
        They need to be immediate children.
        <br />
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div><br />
      <div>
        <b>Button variants</b>
        <br />
        All the standard button variants are supported.
        <br />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br /><br />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div><br />
      <div>
        <b>Sizes and colors</b>
        <br />
        The size and color props can be used to control the appearance of the button group.
        <br />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        ></Box>
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <br /><br />
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <br /><br />
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </div><br />
      <div>
        <b>Split button</b>
        <br />
        ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.
        <br />
        <React.Fragment>
          <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Button Group is a Component which can be used in various use cases, above are the custom button group for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>{`import Button from '@mui/material/Button';`}</code><br />
            And for Icon Button : <code>{`import IconButton from '@mui/material/IconButton';`}</code><br></br>
            And for Box : <code>{`import Box from '@mui/material/Box';`}</code><br></br>
            And for ArrowDropDown : <code>{`import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';`}</code><br></br>
            And for ClickAwayListener : <code>{`import ClickAwayListener from '@mui/material/ClickAwayListener';`}</code><br></br>
            And for Grow : <code>{`import Grow from '@mui/material/Grow';`}</code><br></br>
            And for Paper : <code>{`import Paper from '@mui/material/Paper';`}</code><br></br>
            And for Popper : <code>{`import Popper from '@mui/material/Popper';`}</code><br></br>
            And for MenuItem : <code>{`import MenuItem from '@mui/material/MenuItem';`}</code><br></br>
            And for MenuList : <code>{`import MenuList from '@mui/material/MenuList';`}</code>    </li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of different variations of the Button group.</li>
        </ul>

      </div>
    </div>
  );
}
function MatButtonGroupCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='demo-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function MatButtonGroup() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleClick = () => {
    //console.info(You clicked {}
    );
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  
  return (`}</code><code className='language-markup'>{`
      <div className='demo-wrapper'>
      <div>
        <b>Basic button group</b>
        <br />
        The buttons can be grouped by wrapping them with the ButtonGroup component.
        They need to be immediate children.
        <br />
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div><br />
      <div>
        <b>Button variants</b>
        <br />
        All the standard button variants are supported.
        <br />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br /><br />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div><br />
      <div>
        <b>Sizes and colors</b>
        <br />
        The size and color props can be used to control the appearance of the button group.
        <br />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        ></Box>
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <br /><br />
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <br /><br />
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </div><br />
      <div>
        <b>Split button</b>
        <br />
        ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.
        <br />
        <React.Fragment>
          <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>
      </div>`}</code><code className='language-javascript'>{`
    );
  }

export default MatButtonGroup;`}</code>
      </pre>
    </div>
  )
}
export { MatButtonGroup, MatButtonGroupCode };