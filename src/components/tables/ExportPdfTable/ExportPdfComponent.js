import React, { useEffect, useState } from "react";
import ToggleView from "../../util/ToggleView";
import { RbExportPdf, RbExportPdfCode } from './RbExportPdf'
import { MatExportPdf, MatExportPdfCode } from './MatExportPdf'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ExportPdfComponent = (props) => {
    const [matview, setMatview] = useState(false);
    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className="btnCompoWrap">
            <h3 className="btn-title">Export PDF Table</h3>
            <div className="step-tabs-wrapper">
                <ToggleView
                    onChange={(ev) =>
                        ev === "react" ? setMatview(false) : setMatview(true)
                    }
                    isViewResized={props.isViewResized}
                />
                <Tabs defaultActiveKey="demo" id="code-demo-tab">
                    <Tab eventKey="demo" title="Demo">
                        {!matview ? <RbExportPdf /> : <MatExportPdf />}
                    </Tab>
                    <Tab eventKey="code" title="Code">
                        {!matview ? <RbExportPdfCode /> : <MatExportPdfCode />}
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default ExportPdfComponent;
