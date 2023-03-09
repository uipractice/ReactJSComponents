import React, { useEffect } from 'react';
import CustomSeparator from './CustomSeparatorBreadcrumb';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Prism from "prismjs";
import '../../prism.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function MatBreadcrumbs() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Breadcrumbs</strong></div>
      <>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#" onClick={handleClick}>
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="#"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </>
      <div style={{ marginTop: '10px' }}><strong>Active last breadcrumb</strong></div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#" onClick={handleClick}>
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="#"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
      <div style={{ marginTop: '10px' }}><strong>Custom separator</strong></div>
      <div style={{ marginTop: '10px' }} >
        <CustomSeparator />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @mui/material</code></li>
          <li><strong>Step 2 :</strong> Import components, Breadcrumbs: <code>import Breadcrumbs from '@mui/material/Breadcrumbs';</code><br />
            For Typography: <code>import Typography from '@mui/material/Typography';</code><br />
            For Link: <code>import Link from '@mui/material/Link';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul >
      </div >

    </div >
  );
}

function MatBreadcrumbsCode() {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import CustomSeparator from './CustomSeparatorBreadcrumb';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function MatBreadcrumbs() {
  return (
        `}</code>
        <code className='language-markup'>{`
    <<div className='demo-wrapper'>
    <div><strong>Simple Breadcrumbs</strong></div>
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'10px'}}>
        <Link color="inherit" href="#" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </>
    <div style={{marginTop:'10px'}}><strong>Active last breadcrumb</strong></div>
    <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'10px'}}>
      <Link color="inherit" href="#" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="#" onClick={handleClick}>
        Core
      </Link>
      <Link
        color="textPrimary"
        href="#"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </Link>
    </Breadcrumbs>
    <div style={{marginTop:'10px'}}><strong>Custom separator</strong></div>
    <div style={{marginTop:'10px'}} >
      <CustomSeparator />
    </div>    
  </div>`}</code>
        <code className='language-javascript'>{`
  );
}export default MatBreadcrumbs;`}</code>

      </pre>
    </div>
  );
}

export { MatBreadcrumbs, MatBreadcrumbsCode };