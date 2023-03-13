import React, { useState, useEffect } from 'react';
import TabsWrappedLabel from './WrappedLabels';
import DisabledTabs from './MatDisabledTabs';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Prism from "prismjs";
import '../../prism.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MatTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Tabs</strong></div>
      <Box sx={{ width: '80%', padding: '24px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      <div style={{ marginTop: '10px' }}><strong>Tabs Wrapped Labels(Long labels will be automatically wrapped)</strong></div>
      <div style={{ padding: '24px' }}>
        <TabsWrappedLabel />
      </div>
      <div style={{ marginTop: '10px' }}><strong>Disabled Tabs</strong></div>
      <div style={{ padding: '24px' }}>
        <DisabledTabs />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toasts are lightweight notifications, provides brief messages about app processes</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, Tabs, Tab, Typography, Box and AppBar: <code>{`import { Tabs, Tab, Typography, Box, AppBar } from '@mui/material';`}</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatTabsCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import TabsWrappedLabel from './WrappedLabels';
import DisabledTabs from './MatDisabledTabs';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={\`simple-tabpanel-\${index}\`}
      aria-labelledby={\`simple-tab-\${index}\`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: \`simple-tab-\${index}\`,
    'aria-controls': \`simple-tabpanel-\${index}\`,
  };
}

function MatTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (`}</code><code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div><strong>Simple Tabs</strong></div>
      <Box sx={{ width: '80%', padding: '24px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      <div style={{marginTop:'10px'}}><strong>Tabs Wrapped Labels(Long labels will be automatically wrapped)</strong></div>
      <div style={{padding:'24px'}}>
        <TabsWrappedLabel/>
      </div>
      <div style={{marginTop:'10px'}}><strong>Disabled Tabs</strong></div>
      <div style={{padding:'24px'}}>
        <DisabledTabs/>
      </div>
    </div>`}</code><code className='language-javascript'>{`
  );
}

export default MatTabs;

<==================WrappedLabels.js=====================>

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (`}</code><code className="language-markup">{`
  <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  
  `}</code><code className="language-javascript">{`);
}

<=================MatDisabledTabs.js=======================>

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (`}</code><code className="language-markup">{`
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Active" />
      <Tab label="Disabled" disabled />
      <Tab label="Active" />
    </Tabs>`}</code><code className="language-javascript">
          {`);
}`}</code>
      </pre>
    </div>
  );
}

export { MatTabs, MatTabsCode };