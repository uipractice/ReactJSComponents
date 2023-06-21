import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import PdfViewerComponent from './PdfViewerComponent';
import '../../../App.css';

function PdfViewerContainer() {
    const [expandView, setExpandView] = useState(false);
    const handleToggleSidebar = (value) => setExpandView(!value);
    const classes = classNames('App', { appExpand: expandView });

    return (
        <>
            <Header />
            <AppBreadcrumbs compoName='PDF Viewer' />
            <div className={classes}>
                <div className='side-bar'>
                    <SideBar onToggleSidebar={handleToggleSidebar} />
                </div>
                <PdfViewerComponent isViewResized={expandView} />
            </div>
            <Footer />
        </>
    );
}

export default PdfViewerContainer;