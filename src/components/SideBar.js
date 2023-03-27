import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBarToggle from './util/SideBarToggle';
// eslint-disable-next-line
import {
  setItem,
  isBasicOpen,
  isOverlayOpen,
  isUtilOpen,
  isTableOpen
} from './util/localStorage';
import '../vendor/mCustomScrollbar/jquery.mCustomScrollbar.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/highlights/default.min.css';
import '../css/styles.css';
import './SideBar.css';


function SideBar(props) {
  const onToggleSidebar = (value) => {
    props.onToggleSidebar(value);
  };
  const handleBasicCompoToggle = (e) => {
    e.persist();
    setItem('isBasicOpen', e.currentTarget.open);
  };
  const handleOverlayCompoToggle = (e) => {
    e.persist();
    setItem('isOverlayOpen', e.currentTarget.open);
  };
  const handleUtilCompoToggle = (e) => {
    e.persist();
    setItem('isUtilOpen', e.currentTarget.open);
  };
  const handleTableCompoToggle = (e) => {
    e.persist();
    setItem('isTableOpen', e.currentTarget.open);
  };

  return (
    <div className="side-bar" style={{ marginBottom: `${3.5} rem !important` }}>
      <div className="rounded-0 side-section">
        <SideBarToggle onSidebarToggle={onToggleSidebar} />
        <div className="sidebar-body card-body">
          <nav style={{ marginTop: '11px', marginLeft: '-4px' }}>
            <section>
              <details
                className="details"
                onToggle={handleBasicCompoToggle}
                open={isBasicOpen()}
              >
                <summary className="summary">Basic Components</summary>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/button' style={{ textDecoration: 'none' }}>Button</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/buttongroup' style={{ textDecoration: 'none' }}>Button Group</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/input' style={{ textDecoration: 'none' }}>Input</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/toggleButton' style={{ textDecoration: 'none' }}>Toggle Button</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/radioButton' >Radio & Checkbox</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/dropdown'>Drop Down</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/image'>Image</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/listgroup'>List Group</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/navigationbar'>Navigation Bar</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/badge' style={{ textDecoration: 'none' }}>Badge</NavLink>
                  </summary>
                </details>

              </details>
            </section>
            <section>
              <details
                className="details"
                onToggle={handleOverlayCompoToggle}
                open={isOverlayOpen()}
              >
                <summary className="summary">Overlay Components</summary>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/tooltip' style={{ textDecoration: 'none' }}>Tooltip</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/popover' style={{ textDecoration: 'none' }}>Popover</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/modal' style={{ textDecoration: 'none' }}>Modal</NavLink>
                  </summary>
                </details>
              </details>
            </section>
            <section>
              <details
                className="details"
                onToggle={handleUtilCompoToggle}
                open={isUtilOpen()}
              >
                <summary className="summary">Utility Components</summary>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/alert' style={{ textDecoration: 'none' }}>Alerts</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/spinner' style={{ textDecoration: 'none' }}>Spinners</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/toast' style={{ textDecoration: 'none' }}>Toasts</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/tabs' style={{ textDecoration: 'none' }}>Tabs</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/form' style={{ textDecoration: 'none' }}>Form</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/accordion' style={{ textDecoration: 'none' }}>Accordion</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/breadcrumbs' style={{ textDecoration: 'none' }}>Breadcrumbs</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/progress' style={{ textDecoration: 'none' }}>Progress</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/cards' style={{ textDecoration: 'none' }}>Cards</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/pagination' style={{ textDecoration: 'none' }}>Pagination</NavLink>
                  </summary>
                </details>
              </details>
            </section>
            <section>
              <details
                className="details"
                onToggle={handleTableCompoToggle}
                open={isTableOpen()}
              >
                <summary className="summary">Tables</summary>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/basictable' style={{ textDecoration: 'none' }}>Basic Table</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/apidatatable' style={{ textDecoration: 'none' }}>API Data Table</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/editabletable' style={{ textDecoration: 'none' }}>CRUD Table</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/filtertable' style={{ textDecoration: 'none' }}>Filter Table</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/paginationtable' style={{ textDecoration: 'none' }}>Pagination Table</NavLink>
                  </summary>
                </details>
                <details className="details">
                  <summary className="summary summary1">
                    <NavLink to='/sortabletable' style={{ textDecoration: 'none' }}>Sortable Table</NavLink>
                  </summary>
                </details>
              </details>
            </section>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;