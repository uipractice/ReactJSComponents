import React from 'react';
import { NavLink } from 'react-router-dom';
import ComponentCard from './ComponentCard';
import toggleButton from '../images/toggleButton.svg';
import hovToggleButton from '../images/hovToggleButton.svg';
import dropdown from '../images/dropdown.svg';
import hovDropdown from '../images/hovDropdown.svg';
import imageicon from '../images/imageicon.svg';
import ListGroup from '../images/ListGroup.svg'
import ListGroup_Hover from '../images/ListGroup_Hovered.svg'
import navbar from '../images/navbar.svg';
import NavBarHovered from '../images/NavBarHovered.svg';
import hovImageIcon from '../images/hovImageIcon.svg';
import tabsicon from '../images/tabsicon.svg';
import hovTabsIcon from '../images/hovTabsIcon.svg';
import spinnericon from '../images/spinnericon.svg';
import hovSpinnerIcon from '../images/hovSpinnerIcon.svg';
import tooltipicon from '../images/tooltipicon.svg';
import hovTooltipIcon from '../images/hovTooltipIcon.svg';
import modalicon from '../images/modalicon.svg';
import hovModalIcon from '../images/hovModalIcon.svg';
import toasticon from '../images/toasticon.svg';
import hovToastIcon from '../images/hovToastIcon.svg';
import formicon from '../images/formicon.svg';
import hovFormIcon from '../images/hovFormIcon.svg';
import tableicon from '../images/tableicon.svg';
import hovTableIcon from '../images/hovTableIcon.svg';
import editabletable from '../images/editabletable.svg';
import hovEditableTable from '../images/hovEditableTable.svg';
import accordionicon from '../images/accordionicon.svg';
import hovAccordionIcon from '../images/hovAccordionIcon.svg';
import apidatatable from '../images/apidatatable.svg';
import hovApiDataTable from '../images/hovApiDataTable.svg';
import sortabletable from '../images/sortabletable.svg';
import hovSortableTable from '../images/hovSortableTable.svg';
import pagination from '../images/pagination.svg';
import hovPagination from '../images/hovPagination.svg';
import alerticon from '../images/alerticon.svg';
import hovAlertIcon from '../images/hovAlertIcon.svg';
import buttonicon from '../images/buttonicon.svg';
import hovButtonIcon from '../images/hovButtonIcon.svg';
import buttonGroupIcon from '../images/ButtonGroup.svg'
import hovButtonGroupIcon from '../images/ButtonGroup_Hovered.svg';
import hovInputIcon from '../images/hovInputIcon.svg';
import hovRadioCheckIcon from '../images/hovRadioCheckIcon.svg';
import inputicon from '../images/inputicon.svg';
import radiocheckicon from '../images/radiocheckicon.svg';
import breadcrumbIcon from '../images/breadcrumbIcon.svg';
import hovBreadcrumbIcon from '../images/hovBreadcrumbIcon.svg';
import progressIcon from '../images/progressIcon.svg';
import hovProgressIcon from '../images/hovProgressIcon.svg';
import hovCard from '../images/hovCard.svg';
import filterIcon from '../images/filterIcon.svg';
import hovFilterIcon from '../images/hovFilterIcon.svg';
import card from '../images/card.svg';
import badgeIcon from '../images/badge.svg';
import hovBadgeIcon from '../images/Badge_Hovered.svg';
import './ComponentsGrid.css';

function ComponenetsGrid() {
  return (
    <div className='components-grid'>
      <h3 className='component-type-desc'>Basic Components</h3>
      <div className='component-grid-container3'>
        <NavLink to='/button' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={buttonicon}
            hovLogo={hovButtonIcon}
            title='Button'
            desc='This is button component, this can be used in varity of usecases, as in form controls, in alerts & action triggers etc.,'
          />
        </NavLink>

        <NavLink to='/buttonGroup' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={buttonGroupIcon}
            hovLogo={hovButtonGroupIcon}
            title='ButtonGroup'
            desc='This is button Group component, this can be used in varity of usecases, as in form controls, in alerts & action triggers etc.,'
          />
        </NavLink>
        <NavLink to='/input' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={inputicon}
            hovLogo={hovInputIcon}
            title='Input'
            desc='This is Input component, this can be used in varity of usecases, as in form controls, login & user inputs etc.,'
          />
        </NavLink>
      </div>
      <div className='component-grid-container3'>
        <NavLink to='/toggleButton' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={toggleButton}
            hovLogo={hovToggleButton}
            title='Toggle Button'
            desc='This is Toggle Button component, this can be used in varity of usecases, as decision making b/w yes/no, turn the actions to on/off'
          />
        </NavLink>
        <NavLink to='/radioButton' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={radiocheckicon}
            hovLogo={hovRadioCheckIcon}
            title='Radio & Checkbox'
            desc='This is Radio Button component, this can be used to select a option, as in form controls, in user query inputs & action triggers etc.,'
          />
        </NavLink>
        <NavLink to='/dropdown' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={dropdown}
            hovLogo={hovDropdown}
            title='Dropdown'
            desc='This is DropDown menu component, this can be used select an option from multiple options present in the menu list.'
          />
        </NavLink>

      </div>
      <div className='component-grid-container3'>
        <NavLink to='/image' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={imageicon}
            hovLogo={hovImageIcon}
            title='Image'
            desc='Image component, which can be shown in various shapes like rounded edges, rounded, as a thumbnail and in fluid to its parent.'
          />
        </NavLink>
        <NavLink to='/listgroup' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={ListGroup}
            hovLogo={ListGroup_Hover}
            title='List Group'
            desc='List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.'
          />
        </NavLink>
        <NavLink to='/navigationbar' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={navbar}
            hovLogo={NavBarHovered}
            title='Navigation Bar'
            desc='A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.'
          />
        </NavLink>
      </div>
      <div className='component-grid-container3'>
        <NavLink to='/badge' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={badgeIcon}
            hovLogo={hovBadgeIcon}
            title='Badge'
            desc='This is badge component, this can be used in varity of usecases, as in forms etc.,'
          />
        </NavLink>
      </div>
      <h3 style={{ marginTop: '92px' }} className='component-type-desc'>Overlay Components</h3>
      <div className='component-grid-container3'>
        <NavLink to='/tooltip' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={tooltipicon}
            hovLogo={hovTooltipIcon}
            title='Tooltip'
            desc='Tooltips display informative text when users hover over, focus on, or tap an element.'
          />
        </NavLink>
        <NavLink to='/popover' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={toasticon}
            hovLogo={hovToastIcon}
            title='Popover'
            desc='Popover Component, which can be associated with any control to show info'
          />
        </NavLink>
        <NavLink to='/modal' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={modalicon}
            hovLogo={hovModalIcon}
            title='Modal'
            desc='Modal Component, Data can be shown as in a Modal with header, body, and set of actions in the footer.'
          />
        </NavLink>
      </div>
      <h3 style={{ marginTop: '63px' }} className='component-type-desc'>Utility Components</h3>
      <div className='component-grid-container3'>
        <NavLink to='/alert' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={alerticon}
            hovLogo={hovAlertIcon}
            title='Alerts'
            desc='Alert Component, which can be used to show some short information to user as alerts.'
          />
        </NavLink>
        <NavLink to='/spinner' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={spinnericon}
            hovLogo={hovSpinnerIcon}
            title='Spinners'
            desc='Spinner Component, which can be used to shown in the view while the data from backend is getting loaded'
          />
        </NavLink>
        <NavLink to='/toast' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={toasticon}
            hovLogo={hovToastIcon}
            title='Toasts'
            desc='Toast Component,which is a lightweight notifications designed to mimic the push notifications.'
          />
        </NavLink>
      </div>
      <div className='component-grid-container3'>
        <NavLink to='/tabs' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={tabsicon}
            hovLogo={hovTabsIcon}
            title='Tabs'
            desc='Tabs Component, which can be used to show data/components under separtate tabs, on clicking on each tab will navigate to the specific tab data'
          />
        </NavLink>
        <NavLink to='/form' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={formicon}
            hovLogo={hovFormIcon}
            title='Form'
            desc='Form, renders a form control with React-Bootstrap styling. The FormGroup component wraps a form control with proper alignment'
          />
        </NavLink>
        <NavLink to='/accordion' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={accordionicon}
            hovLogo={hovAccordionIcon}
            title='Accordion'
            desc='Form, renders a form control with React-Bootstrap styling. The FormGroup component wraps a form control with proper alignment'
          />
        </NavLink>
      </div>
      <div className='component-grid-container3'>
        <NavLink to='/breadcrumbs' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={breadcrumbIcon}
            hovLogo={hovBreadcrumbIcon}
            title='Breadcrumbs'
            desc='Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS'
          />
        </NavLink>
        <NavLink to='/progress' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={progressIcon}
            hovLogo={hovProgressIcon}
            title='Progress'
            desc='Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.'
          />
        </NavLink>
        <NavLink to='/cards' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={card}
            hovLogo={hovCard}
            title='Cards'
            desc='Cards provide a flexible and extensible content container with multiple variants and options.'
          />
        </NavLink>
      </div>
      <div className='component-grid-container'>
        <NavLink to='/pagination' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={pagination}
            hovLogo={hovPagination}
            title='Pagination'
            desc='A set of presentational components for building pagination UI,enables the user to select a specific page from a range of pages.'
          />
        </NavLink>
      </div>
      <h3 style={{ marginTop: '63px' }} className='component-type-desc'>Tables</h3>
      <div className='component-grid-container3'>
        <NavLink to='/basictable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={tableicon}
            hovLogo={hovTableIcon}
            title='Basic Table'
            desc='Table Component, which can be used to show data in organized rows and columns manner.'
          />
        </NavLink>
        <NavLink to='/apidatatable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={apidatatable}
            hovLogo={hovApiDataTable}
            title='API Data Table'
            desc=' API Data Table, Data which is rendered in the table is fetched from 3rd party API'
          />
        </NavLink>
        <NavLink to='/editabletable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={editabletable}
            hovLogo={hovEditableTable}
            title='CRUD Table'
            desc='Editable Table Component, in which we can perform CRUD, Sort, Search & Filter, also provides pagination.'
          />
        </NavLink>
      </div>
      <div className='component-grid-container3' style={{ marginBottom: '115px' }}>
        <NavLink to='/filtertable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={filterIcon}
            hovLogo={hovFilterIcon}
            title='Filter Table'
            desc='Filter Table Component, in which data can be filtered based on the user inputs'
          />
        </NavLink>
        <NavLink to='/paginationtable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={pagination}
            hovLogo={hovPagination}
            title='Pagination Table'
            desc='Pagination Table Component, in which data can be paginated automatically based on the amount it receives.'
          />
        </NavLink>
        <NavLink to='/sortabletable' className='navLink' activeClassName='navLinkActive' style={{ textDecoration: 'none' }}>
          <ComponentCard
            logoSrc={sortabletable}
            hovLogo={hovSortableTable}
            title='Sortable Table'
            desc='Sortable Table Component, in which we can sort the column data on click of its column header.'
          />
        </NavLink>
      </div>
    </div>
  )
}

export default ComponenetsGrid;