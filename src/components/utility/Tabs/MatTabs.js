import React, { useState, useEffect } from 'react';
import TabsWrappedLabel from './WrappedLabels';
import DisabledTabs from './MatDisabledTabs';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MatTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Tabs</strong></div>
      <div style={{ padding: '24px', background: '#f5f5f5', textAlign: 'center' }}>
        <div className={classes.root} style={{ marginTop: '10px' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}><strong>Tabs Wrapped Labels(Long labels will be automatically wrapped)</strong></div>
      <div style={{ padding: '24px', background: '#f5f5f5', textAlign: 'center' }}>
        <TabsWrappedLabel />
      </div>
      <div style={{ marginTop: '10px' }}><strong>Disabled Tabs</strong></div>
      <div style={{ padding: '24px', background: '#f5f5f5', textAlign: 'center' }}>
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
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={simple-tabpanel-{index}}
      aria-labelledby={simple-tab-{index}}
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
    id: simple-tab-{index},
    'aria-controls': simple-tabpanel-{index},
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MatTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (`}</code><code className='language-markup'>{`
          <div className='demo-wrapper'>
          <div><strong>Simple Tabs</strong></div>
          <div style={{padding:'24px', background:'#f5f5f5', textAlign: 'center'}}>
            <div className={classes.root} style={{marginTop:'10px'}}>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </div>
          </div>
          <div style={{marginTop:'10px'}}><strong>Tabs Wrapped Labels(Long labels will be automatically wrapped)</strong></div>
          <div style={{padding:'24px', background:'#f5f5f5', textAlign: 'center'}}>
            <TabsWrappedLabel/>
          </div>
          <div style={{marginTop:'10px'}}><strong>Disabled Tabs</strong></div>
          <div style={{padding:'24px', background:'#f5f5f5', textAlign: 'center'}}>
            <DisabledTabs/>
          </div>
        </div>`}</code><code className='language-javascript'>{`
  );
}export default MatTabs;`}
        </code>
      </pre>
    </div>
  );
}

export { MatTabs, MatTabsCode };