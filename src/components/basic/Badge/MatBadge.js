import React, { useEffect } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Prism from "prismjs";
import '../../prism.css';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function MatBadge() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <>
      <div className='demo-wrapper'>
        <b>Basic badge with Color</b>
        <br></br>
        <h6>badges containing text, using primary and secondary colors. The badge is applied to its children,and Use color prop to apply theme palette to component.</h6>
        <br></br>
        <Stack spacing={4} direction="row">
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>

          <Badge badgeContent={4} color="warning">
            <MailIcon color="action" />
          </Badge>
        </Stack>
        <b>CustomizationBadge</b>
        <br></br>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <br></br>
        Material UI provides several different ways to customize a component's styles.
        Your specific context will determine which one is ideal. From narrowest to broadest use case, here are the options:
        <br></br>
        <b>One-off customization</b>
        <br></br>
        To change the styles of one single instance of a component, you can use one of the following options:
        <br></br>
        <b>The sx prop</b>
        <br></br>
        The sx prop is the best option for adding style overrides to a single instance of a component in most cases. It can be used with all Material UI components.
        <br></br>
        <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: 'success.main',
          }}
        />
        <br></br>
        <b>Badge visibility</b>
        <br></br>
        The visibility of badges can be controlled using the invisible prop.
        <br></br>
        <Box
          sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
              marginBottom: 2,
            },
            '& .MuiBadge-root': {
              marginRight: 4,
            },
          }}
        >
          <div>
            <Badge color="secondary" badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: 'text.primary' }}
              control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
              label="Show Badge"
            />
          </div>
        </Box>
        <br></br>
        <div className='compo-description'>
          <h4>Description</h4>
          <p>Badge is a Component which can be used in various use cases, above are the custom badges for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
          <h5>Steps</h5>
          <ul>
            <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install @mui/material</code></li>
            <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>{`import Badge from '@mui/material/Badge';`}</code><br />
              And for Mail:<code>{`import Icon from '@mui/icons-material/Mail';`}</code> <br />
              And for Icon Button : <code>{`import IconButton from '@mui/material/IconButton';`}</code> <br />
              And for Box:<code>{` import Box from '@mui/material/Box';`}</code><br />
              And for ButtonGroup:<code>{`import ButtonGroup from '@mui/material/ButtonGroup';`}</code><br />
              And for Add Icon: <code>{`import AddIcon from '@mui/icons-material/Add';`}</code><br />
              And for Remove Icon: <code>{`import RemoveIcon from '@mui/icons-material/Remove';`}</code><br />
              And for Swith: <code>{`import Switch from '@mui/material/Switch';`}</code><br />
              And for FormControlLabel: <code>{`import FormControlLabel from '@mui/material/FormControlLabel';`}</code><br />
              And for Slider: <code>{`import Slider from '@mui/material/Slider';`}</code><br />
              And for Stack:<code>{`import Stack from '@mui/material/Stack';`}</code><br />
              And for Styles: <code>{`import { styled } from '@mui/material/styles';`}</code><br />
              And for ShoppingCartIcon: <code>{`import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';`}</code>
            </li>
            <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of different variations of the Badge.</li>
          </ul>

        </div>
      </div>
    </>
  );
}

function MatBadgeCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>
          {`
import React, { useEffect } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Prism from "prismjs";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: 2px solid {theme.palette.background.paper},
      padding: '0 4px',
    },
  }));
function MatBadge() {
  const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
  
    const handleBadgeVisibility = () => {
      setInvisible(!invisible);
    };
    return (`}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>        
    <b>Basic badge with Color</b>
    <br></br>
    <h6>badges containing text, using primary and secondary colors. The badge is applied to its children,and Use color prop to apply theme palette to component.</h6>
    <br></br>
    <Stack spacing={4} direction="row">
        <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
           </Badge>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
          </Badge>
           <Badge badgeContent={4} color="success">
             <MailIcon color="action" />
           </Badge>
        
           <Badge badgeContent={4} color="warning">
            <MailIcon color="action" />
            </Badge>
    </Stack>
    <b>CustomizationBadge</b>
    <br></br>
    <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
            </StyledBadge>
    </IconButton>
    <br></br>
    Material UI provides several different ways to customize a component's styles.
    Your specific context will determine which one is ideal. From narrowest to broadest use case, here are the options:
    <br></br>
    <b>One-off customization</b>
    <br></br>
    To change the styles of one single instance of a component, you can use one of the following options:
    <br></br>
        <b>The sx prop</b>
    <br></br>
    The sx prop is the best option for adding style overrides to a single instance of a component in most cases. It can be used with all Material UI components.
    <br></br>
    <Slider
    defaultValue={30}
   sx={{
    width: 300,
    color: 'success.main',
    }}
   />
   <br></br>
    <b>Badge visibility</b>
    <br></br>
    The visibility of badges can be controlled using the invisible prop.
    <br></br>
    <Box
    sx={{
    color: 'action.active',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: 2,
    },
    '& .MuiBadge-root': {
      marginRight: 4,
    },
   }}
   >
   <div>
    <Badge color="secondary" badgeContent={count}>
      <MailIcon />
     </Badge>
     <ButtonGroup>
      <Button
        aria-label="reduce"
        onClick={() => {
          setCount(Math.max(count - 1, 0));
        }}
       >
        <RemoveIcon fontSize="small" />
      </Button>
      <Button
        aria-label="increase"
        onClick={() => {
          setCount(count + 1);
        }}
       >
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <Badge color="secondary" variant="dot" invisible={invisible}>
      <MailIcon />
     </Badge>
     <FormControlLabel
      sx={{ color: 'text.primary' }}
      control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
      label="Show Badge"
    />
  </div>
  </Box>
`}</code><code className='language-javascript'>
          {`
  );
}
export default MatBadge;
`}
        </code>
      </pre>
    </div>
  );
}

export { MatBadge, MatBadgeCode };