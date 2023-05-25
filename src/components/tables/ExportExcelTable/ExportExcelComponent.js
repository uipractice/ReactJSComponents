import React, { useEffect, useState } from "react";
import ToggleView from "../../util/ToggleView";
// import { RbSortableTable, RbSortableTableCode } from "./RbSortableTable";
// import {
//   MatSortableTable,
//   MatSortableTableCode,
// } from "./MatSortableTable";
import { MatExportExcel, MatExportExcelCode } from './MatExportExcel';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { RbExportExcel, RbExportExcelCode } from './RbExportExcel';

const ExportExcelComponent = (props) => {
    const [matview, setMatview] = useState(false);
    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className="btnCompoWrap">
            <h3 className="btn-title">Sortable Table</h3>
            <ToggleView
                onChange={(ev) =>
                    ev === "react" ? setMatview(false) : setMatview(true)
                }
                isViewResized={props.isViewResized}
            />
            <div className="step-tabs-wrapper">
                <Tabs defaultActiveKey="demo" id="code-demo-tab">
                    <Tab eventKey="demo" title="Demo">
                        {!matview ? <RbExportExcel /> : <MatExportExcel />}
                    </Tab>
                    <Tab eventKey="code" title="Code">
                        {!matview ? <RbExportExcelCode /> : <MatExportExcelCode />}
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};
export default ExportExcelComponent;
