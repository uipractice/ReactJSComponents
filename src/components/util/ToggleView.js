import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ToggleView.css';

function ToggleView(props) {
  const [viewResize, setViewResize] = useState(props.isViewResized);
  const matDisabled = props.materialDisabled ? props.materialDisabled : false;
  const rbDisabled = props.rbDisabled ? props.rbDisabled : false;
  const [clssRToggleBtn, setClssRToggleBtn]=useState("active toggleView-btn");
  const [clssMToggleBtn, setClssMToggleBtn]=useState("toggleView-btn");
  useEffect(() => {
    setViewResize(props.isViewResized);
  }, [props.isViewResized]);
  const defaultValue = props.rbDisabled ? 'material' : 'react';
  const classes = classNames('toggle-demo-sec', { toggleAdjust: viewResize })
  const handleToggleView = (ev) => {
    props.onChange(ev);
    if(ev==='react'){
      setClssRToggleBtn("toggleView-btn active")
      setClssMToggleBtn("toggleView-btn")
    }else{
      setClssRToggleBtn("toggleView-btn")
      setClssMToggleBtn("toggleView-btn active")
    }
  }; 
  return (
    <div className={classes}>
      <ToggleButtonGroup 
        type="radio" 
        name="options" 
        defaultValue={defaultValue} 
        className="mb-2" 
        onChange={handleToggleView}
      >
        <ToggleButton id="toggle1" className={clssRToggleBtn} value='react' size="sm" disabled={rbDisabled}>React</ToggleButton>
        <ToggleButton id="toggle2" className={clssMToggleBtn} value='material' size="sm" disabled={matDisabled}>Material</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleView;