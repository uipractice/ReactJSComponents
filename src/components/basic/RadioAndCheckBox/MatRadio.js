import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Prism from "prismjs";
import '../../prism.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MatRadio() {
  const [selectedValue, setSelectedValue] = useState('a');
  const [checked, setChecked] = useState([true, false]);

  const handleChangeTwo = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div className='demo-wrapper'>
      <div><strong>Radio Buttons wrapped with in the RadioGroup</strong></div><br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <div><strong>Standalone Radio Buttons</strong></div><br />
      <>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChangeTwo}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChangeTwo}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
      </>
      <div><strong>Radio Buttons with label placement</strong></div><br />
      <FormControl>
        <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="top"
            control={<Radio />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel value="end" control={<Radio />} label="End" />
        </RadioGroup>
      </FormControl>
      <div><strong>Basic Checkboxes</strong></div>
      <>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </><br /><br />
      <div><strong>Checkbox with FormControlLabel</strong></div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <br />
      <div><strong>Checkbox with different sizes</strong></div>
      <>
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </>
      <br />
      <div><strong>Checkbox with different colors</strong></div>
      <>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </>
      <br />
      <div><strong>Checkbox with icons</strong></div>
      <>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </>
      <br />
      <div><strong>Indeterminate checkbox</strong></div>
      <>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </>
      <br />
      <div><strong>Checkbox with label placements</strong></div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label placement</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Radio button is component used to select a option from a group, Only one radio button in a group can be selected at the same time.
          Checkboxes are used to let a user select one or more options among the limited number of choices.
        </p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import component, For radio button: <code>import Radio from '@mui/material/Radio';</code> <br />
            for Checkbox: <code>import Checkbox from '@mui/material/Checkbox';</code><br />
            for RadioGroup: <code>import RadioGroup from '@mui/material/RadioGroup';</code><br />
            for FormControlLabel: <code>import FormControlLabel from '@mui/material/FormControlLabel';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatRadioCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MatRadio() {
  const [selectedValue, setSelectedValue] = useState('a');
  const [checked, setChecked] = useState([true, false]);

  const handleChangeTwo = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return(
    <div className='demo-wrapper'>
      <div><strong>Radio Buttons wrapped with in the RadioGroup</strong></div><br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <div><strong>Standalone Radio Buttons</strong></div><br />
      <>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChangeTwo}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChangeTwo}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
      </>
      <div><strong>Radio Buttons with label placement</strong></div><br />
      <FormControl>
        <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="top"
            control={<Radio />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel value="end" control={<Radio />} label="End" />
        </RadioGroup>
      </FormControl>
      <div><strong>Basic Checkboxes</strong></div>
      <>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </><br /><br />
      <div><strong>Checkbox with FormControlLabel</strong></div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <br />
      <div><strong>Checkbox with different sizes</strong></div>
      <>
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </>
      <br />
      <div><strong>Checkbox with different colors</strong></div>
      <>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </>
      <br />
      <div><strong>Checkbox with icons</strong></div>
      <>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </>
      <br />
      <div><strong>Indeterminate checkbox</strong></div>
      <>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </>
      <br />
      <div><strong>Checkbox with label placements</strong></div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label placement</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default MatRadio;
        `}</code>
      </pre>
    </div>
  );
}

export { MatRadio, MatRadioCode };