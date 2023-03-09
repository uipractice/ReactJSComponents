import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Prism from "prismjs";
import '../../prism.css';
import './MatInput.scss';

function MatInput() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Input Fields: standard, filled and outlined</strong></div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      <br />
      <div><strong>Input fields with props <code>required, disabled, type, helperText</code></strong></div>
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </div>
      </Box>
      <br />
      <div><strong>Input field with validation: using the props <code>error & helperText</code></strong></div>
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
      <br />
      <div><strong>The <code>multiline</code> prop transforms the text field into a textarea</strong></div>
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </div>
      </Box>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>The Input component can be used to take user inputs in form fields. It can be configured based on the data we require, like shown in the demo fields above.</p>
        <h5>Steps</h5>
        <ul>

          <li><strong>Step 1: </strong>Install Dependency to your project root folder: <code>npm install @mui/material</code></li>
          <li><strong>Step 2: </strong>Import component in view where ever its necessary: <code>import TextField from '@mui/material/TextField'</code></li>
          <li><strong>Step 4: </strong>Refer JSX code under the 'Code' tab to understand the usage of the component.</li>
        </ul>

      </div>
    </div>
  );
}

function MatInputCode() {
  useEffect(() => Prism.highlightAll(), [])
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function MatInput() {
  
  return (`}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div><strong>Input Fields: standard, filled and outlined</strong></div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      <br />
      <div><strong>Input fields with props <code>required, disabled, type, helperText</code></strong></div>
      <br />
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
      <br />
      <div><strong>Input field with validation: using the props <code>error & helperText</code></strong></div>
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
        <div>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </div>
        <div>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
      </Box>
      <br />
      <div><strong>The <code>multiline</code> prop transforms the text field into a textarea</strong></div>
      <br />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </div>
      </Box>
    </div>
    `}
        </code>
        <code className='language-javascript'>{`
  );
}
export default MatInput;
`}
        </code>
      </pre>
    </div>
  )
}

export { MatInput, MatInputCode };