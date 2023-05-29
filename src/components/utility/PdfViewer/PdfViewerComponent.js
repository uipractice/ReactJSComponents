import React, { useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import { PdfViewer, PdfViewerCode } from './PdfViewer';

function PdfViewerComponent(props) {
    useEffect(() => window.scrollTo(0, 0));

    return (
        <div className='btnCompoWrap'>
            <h3 className='btn-title'>PDF Viewer</h3>
            <div className='step-tabs-wrapper'>
                <Tabs defaultActiveKey="demo" id="code-demo-tab">
                    <Tab eventKey="demo" title="Demo">
                        <PdfViewer />
                    </Tab>
                    <Tab eventKey="code" title="Code">
                        <PdfViewerCode />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default PdfViewerComponent;