import React, { useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Prism from "prismjs";
import '../../prism.css';

function RbProgress() {
  const dummyProgress = 60;

  return (
    <div className='demo-wrapper'>
      <div><strong>Default Progress Bar</strong></div>
      <ProgressBar now={60} style={{width: '80%', marginTop:'10px'}}/>
      <div><strong>Progress Bar with Label, using <code>label</code> prop</strong></div>
      <ProgressBar now={dummyProgress} label={`${dummyProgress}%`} style={{width: '80%', marginTop:'10px'}} />
      <div><strong>ProgressBars with different variants, using <code>variant</code> prop</strong></div>
      <div>
        <ProgressBar variant="success" now={40} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar variant="info" now={20} style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar variant="warning" now={60} label={`${60}%`} style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar variant="danger" now={80} label={`${80}%`} style={{width: '80%', marginTop:'10px'}}/>
      </div>
      <div><strong>Striped Styled ProgressBars, using <code>striped</code> prop</strong></div>
      <div>
        <ProgressBar striped variant="success" now={40}  style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar striped variant="info" now={20} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar striped variant="warning" now={60} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar striped variant="danger" now={80} style={{width: '80%', marginTop:'10px'}} />
      </div>
      <div><strong>Animated ProgressBars, using <code>animated</code> prop</strong></div>
      <ProgressBar animated now={45} style={{width: '80%', marginTop:'10px'}} />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Progress bars, Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, ProgressBar: <code>import ProgressBar from 'react-bootstrap/ProgressBar';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbProgressCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function RbProgress() {
  const dummyProgress = 60;

  return (
    `}
    </code>
    <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div><strong>Default Progress Bar</strong></div>
      <ProgressBar now={60} style={{width: '80%', marginTop:'10px'}}/>
      <div><strong>Progress Bar with Label, using <code>label</code> prop</strong></div>
      <ProgressBar now={dummyProgress} label={dummyProgress}%} style={{width: '80%', marginTop:'10px'}} />
      <div><strong>ProgressBars with different variants, using <code>variant</code> prop</strong></div>
      <div>
        <ProgressBar variant="success" now={40} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar variant="info" now={20} style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar variant="warning" now={60} label={{60}%} style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar variant="danger" now={80} label={{80}%} style={{width: '80%', marginTop:'10px'}}/>
      </div>
      <div><strong>Striped Styled ProgressBars, using <code>striped</code> prop</strong></div>
      <div>
        <ProgressBar striped variant="success" now={40}  style={{width: '80%', marginTop:'10px'}}/>
        <ProgressBar striped variant="info" now={20} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar striped variant="warning" now={60} style={{width: '80%', marginTop:'10px'}} />
        <ProgressBar striped variant="danger" now={80} style={{width: '80%', marginTop:'10px'}} />
      </div>
      <div><strong>Animated ProgressBars, using <code>animated</code> prop</strong></div>
      <ProgressBar animated now={45} style={{width: '80%', marginTop:'10px'}} />
      
    </div>
    `}
    </code>
    <code className='language-javascript'>{`
  );
}
export default RbProgress;
`}
          </code>
      </pre>
    </div>
  );
}

export { RbProgress, RbProgressCode };