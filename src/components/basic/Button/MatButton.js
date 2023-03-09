import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Icon from '@mui/material/Icon';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Prism from "prismjs";
import '../../prism.css';

function MatButton() {
  return (
    <div className='demo-wrapper'>
      <div>Styled Buttons with different values for variant prop.  i.e., <code>variant="primary"</code></div>
      <br />
      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>{' '}
        <Button variant="contained" color="secondary">
          Secondary
        </Button>{' '}
        <Button variant="contained" disabled>
          Disabled
        </Button>{' '}
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>{' '}
        <Button variant="contained" color="warning">
          Warning
        </Button>{' '}
        <Button variant="contained" color="error">
          Error
        </Button>{' '}
      </div>
      <br />
      <div>Outline Buttons with no background color, with different values for variant prop. i.e., <code>variant="outlined" color="primary"</code></div>
      <br />
      <Button variant="outlined" color="primary">
        Primary
      </Button>{' '}
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>{' '}
      <Button variant="outlined" disabled>
        Disabled
      </Button>{' '}
      <Button variant="outlined" color="primary">
        Link
      </Button>{' '}
      <Button variant="outlined" color="warning">
        Warning
      </Button>{' '}
      <Button variant="outlined" color="error">
        Error
      </Button>
      <br />
      <br />
      <div>Text Buttons, typically used for less-pronounced actions, such as in dialogs, cards</div>
      <br />
      <Button color="primary">Primary</Button>{' '}
      <Button color="secondary">Secondary</Button>{' '}
      <Button disabled>Disabled</Button>{' '}
      <Button color='warning'>Warning</Button>{' '}
      <Button color='error'>Error</Button>{' '}
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
      <br />
      <br />
      <div>Buttons with Icon and Label</div>
      <br />
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>{' '}
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>{' '}
      <Button
        variant="contained"
        color='action'
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>{' '}
      <Button
        disabled
        variant="contained"
        color="secondary"
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>{' '}
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>{' '}
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <br />
      <br />
      <div>Icon Buttons</div>
      <br />
      <div>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Button is a Component which can be used in various use cases, above are the custom buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h5>Steps</h5>
        <ul>

          <li><strong>Step 1: </strong>Install Dependency in your project root folder: <code>npm install @mui/material</code></li>
          <li><strong>Step 2: </strong>Import component in view where ever its necessary: <code>{`import Button from '@mui/material/Button'`}</code><br />
            And for Icons: <code>{`import Icon from '@mui/material/Icon'`}</code> <br />
            And for Icon Button: <code>{`import IconButton from '@mui/material/IconButton'`}</code>
          </li>
          <li><strong>Step 3: </strong>Refer JSX code under the 'Code' tab, to understand the usage of different variations of the Button.</li>
        </ul>

      </div>
    </div>
  )
}

function MatButtonCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Icon from '@mui/material/Icon';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Prism from "prismjs";
import '../../prism.css';

function MatButton() {
  return (
      <div className='demo-wrapper'>
        <div>Styled Buttons with different values for variant prop.  i.e., <code>variant="primary"</code></div>
        <br />
        <div>
          <Button variant="contained" color="primary">
            Primary
          </Button>{' '}
          <Button variant="contained" color="secondary">
            Secondary
          </Button>{' '}
          <Button variant="contained" disabled>
            Disabled
          </Button>{' '}
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>{' '}
          <Button variant="contained" color="warning">
            Warning
          </Button>{' '}
          <Button variant="contained" color="error">
            Error
          </Button>{' '}
        </div>
        <br />
        <div>Outline Buttons with no background color, with different values for variant prop. i.e., <code>variant="outlined" color="primary"</code></div>
        <br />
        <Button variant="outlined" color="primary">
          Primary
        </Button>{' '}
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>{' '}
        <Button variant="outlined" disabled>
          Disabled
        </Button>{' '}
        <Button variant="outlined" color="primary">
          Link
        </Button>{' '}
        <Button variant="outlined" color="warning">
          Warning
        </Button>{' '}
        <Button variant="outlined" color="error">
          Error
        </Button>
        <br />
        <br />
        <div>Text Buttons, typically used for less-pronounced actions, such as in dialogs, cards</div>
        <br />
        <Button color="primary">Primary</Button>{' '}
        <Button color="secondary">Secondary</Button>{' '}
        <Button disabled>Disabled</Button>{' '}
        <Button color='warning'>Warning</Button>{' '}
        <Button color='error'>Error</Button>{' '}
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
        <br />
        <br />
        <div>Buttons with Icon and Label</div>
        <br />
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>{' '}
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>{' '}
        <Button
          variant="contained"
          color='action'
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>{' '}
        <Button
          disabled
          variant="contained"
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>{' '}
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>{' '}
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <br />
        <br />
        <div>Icon Buttons</div>
        <br />
        <div>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
}

export default MatButton;
          `}
        </code>
      </pre>
    </div>
  );
}
export { MatButton, MatButtonCode };