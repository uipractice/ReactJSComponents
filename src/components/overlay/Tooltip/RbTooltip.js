import React, { useState, useRef, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
}

function RbTooltip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className='demo-wrapper'>
      <div style={{ marginBottom: '10px' }}>Tooltip on Hover of Trigger Control(Button)</div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>Tooltip on Click of Trigger Control(Button)</div>
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </>
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>Tooltip on various positions</div>
      <>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary" style={{ marginRight: '10px' }}>Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </>

      <div className='compo-description'>
        <h4>Description</h4>
        <p>Tooltips display informative text when users hover over, focus on, or tap an element.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Tooltip: <code>import Tooltip from 'react-bootstrap/Tooltip';</code><br /> for Overlay and OverlayTrigger <code>import Overlay from 'react-bootstrap/Overlay';</code><br /><code>
            import OverlayTrigger from 'react-bootstrap/OverlayTrigger';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbTooltipCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'> {`
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
}

function RbTooltip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (`}</code>
  <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div style={{ marginBottom: '10px' }}>Tooltip on Hover of Trigger Control(Button)</div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>Tooltip on Click of Trigger Control(Button)</div>
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </>
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>Tooltip on various positions</div>
      <>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={tooltip-{placement}}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary" style={{ marginRight: '10px' }}>Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </>
    </div>     
        `}</code>
        <code className='language-javascript'>{`
  );
}
export default renderTooltip;`}</code>
      </pre>
    </div>
  );
}

export { RbTooltip, RbTooltipCode };