import React, { useEffect, useState } from "react";
import ToggleView from "../../util/ToggleView";
import { RbSortableTable, RbSortableTableCode } from "./RbSortableTable";
import {
  MatSortableTable,
  MatSortableTableCode,
} from "./MatSortableTable";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const SortableTableComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="btnCompoWrap">
      <h3 className="btn-title">Sortable Table</h3>
      <div className="step-tabs-wrapper">
        <ToggleView
          onChange={(ev) =>
            ev === "react" ? setMatview(false) : setMatview(true)
          }
          isViewResized={props.isViewResized}
        />
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbSortableTable /> : <MatSortableTable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbSortableTableCode /> : <MatSortableTableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default SortableTableComponent;
