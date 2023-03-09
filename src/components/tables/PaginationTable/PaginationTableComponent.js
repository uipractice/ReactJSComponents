import React, { useEffect, useState } from "react";
import ToggleView from "../../util/ToggleView";
import { RbPaginationTable, RbPaginationTableCode } from "./RbPaginationTable";
import {
  MatPaginationTable,
  MatPaginationTableCode,
} from "./MatPaginationTable";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const PaginationTableComponent = (props) => {
  const [matview, setMatview] = useState(false);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="btnCompoWrap">
      <h3 className="btn-title">Pagination Table</h3>
      <ToggleView
        onChange={(ev) =>
          ev === "react" ? setMatview(false) : setMatview(true)
        }
        isViewResized={props.isViewResized}
      />
      <div className="step-tabs-wrapper">
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            {!matview ? <RbPaginationTable /> : <MatPaginationTable />}
          </Tab>
          <Tab eventKey="code" title="Code">
            {!matview ? <RbPaginationTableCode /> : <MatPaginationTableCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default PaginationTableComponent;
