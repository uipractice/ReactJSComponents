import React, { useState, useEffect } from 'react';
import MatCircularProgressWithLabel from './MatCircularProgressWithLabel';
import LinearDeterminate from './MatLinearDeterminateProgress';
import MatLinearWithValueLabel from './MatLinearProgressWithLabel';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Prism from "prismjs";
import '../../prism.css';

function MatProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='demo-wrapper'>
      <div><strong>Circular Progresses</strong></div>
      <Stack spacing={2} marginTop={2} marginBottom={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
      <div style={{ marginBottom: '20px' }}><strong>Circular Progress with Label</strong></div>
      <MatCircularProgressWithLabel />
      <div><strong>Linear indeterminate Progress</strong></div>
      <Stack sx={{ width: '75%' }} spacing={2} marginTop={2} marginBottom={2} direction="column">
        <LinearProgress />
        <LinearProgress color='secondary' />
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Linear determinate Progress</strong></div>
      <LinearDeterminate />
      <div style={{ marginTop: '10px' }}><strong>Linear Progress with Label</strong></div>
      <MatLinearWithValueLabel />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Progress bars, Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, CircularProgress: <code>import CircularProgress from '@mui/material/CircularProgress';</code><br />
            For LinearProgress: <code>import LinearProgress from '@mui/material/LinearProgress';</code></li>
          <li><strong>Step 3 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatProgressCode() {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import MatCircularProgressWithLabel from './MatCircularProgressWithLabel';
import LinearDeterminate from './MatLinearDeterminateProgress';
import MatLinearWithValueLabel from './MatLinearProgressWithLabel';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

function MatProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (`}
        </code>
        <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div><strong>Circular Progresses</strong></div>
      <Stack spacing={2} marginTop={2} marginBottom={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
      <div style={{ marginBottom: '20px' }}><strong>Circular Progress with Label</strong></div>
      <MatCircularProgressWithLabel />
      <div><strong>Linear Intermediate Progress</strong></div>
      <Stack sx={{ width: '75%' }} spacing={2} marginTop={2} marginBottom={2} direction="column">
        <LinearProgress />
        <LinearProgress color="secondary" />
      </Stack>
      <div style={{ marginTop: '10px' }}><strong>Linear determinate Progress</strong></div>
      <LinearDeterminate />
      <div style={{ marginTop: '10px' }}><strong>Linear Progress with Label</strong></div>
      <MatLinearWithValueLabel />
    </div>`}
        </code>
        <code className='language-javascript'>{`
    );
  }
  
export default MatProgress;

<==============MatCircularProgressWithLabel.js===============>

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (`}</code><code className="language-markup">{`
    <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{\`\${Math.round(
          props.value,
        )}%\`}</Typography>
      </Box>
    </Box>`}</code><code className="language-javascript">{`
        );
      }
      
    CircularProgressWithLabel.propTypes = {
      value: PropTypes.number.isRequired,
    };
      
    export default function MatCircularProgressWithLabel() {
      const [progress, setProgress] = useState(10);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
      }, []);
      
      return `}</code><code className="language-markup">{`<CircularProgressWithLabel value={progress} />;`}</code>
        <code className="language-javascript">
          {`
  }

<=============MatLinearDeterminateProgress.js===============>

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (`}</code><code className="language-markup">{`
    <Box sx={{ width: '75%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>`}</code><code className="language-javascript">{`
  );
}

<==============MatLinearProgressWithLabel.js==================>

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (`}</code><code className="language-markup">{`
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{\`\${Math.round(
          props.value,
        )}%\`}</Typography>
      </Box>
    </Box>`}</code><code className="language-javascript">
          {`
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function MatLinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (`}</code><code className="language-markup">{`
    <Box sx={{ width: '80%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>`}</code><code className="language-javascript">{`
  );
}`}
        </code>
      </pre>
    </div>
  );
}

export { MatProgress, MatProgressCode }; 