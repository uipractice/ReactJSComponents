import React, { useEffect, useState } from "react";
import ToggleView from "../../util/ToggleView";
import { RbAPITable, RbAPITableCode } from "./RbAPITable";
import { MatAPITable, MatAPITableCode } from "./MatAPITable";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ApiDataTableComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <div className="btnCompoWrap">
      <h3 className="btn-title">Dynamic Data Table ( API Data )</h3>
      <div className="step-tabs-wrapper">
        <ToggleView
          onChange={(ev) =>
            ev === "react" ? setMatview(false) : setMatview(true)
          }
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbAPITable /> : <MatAPITable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbAPITableCode /> : <MatAPITableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default ApiDataTableComponent;
