import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ButtonContainer from './components/basic/Button/ButtonContainer';
import InputContainer from './components/basic/Input/InputContainer';
import ToggleButtonContainer from './components/basic/ToggleButton/ToggleButtonContainer';
import RadioButtonContainer from './components/basic/RadioAndCheckBox/RadioButtonContainer';
import DropDownContainer from './components/basic/Dropdown/DropDownContainer';
import ImageContainer from './components/basic/Image/ImageContainer';
import ListGroupContainer from './components/basic/ListGroup/ListGroupContainer';
import NavBarContainer from './components/basic/NavigationBar/NavBarContainer';
import TooltipContainer from './components/overlay/Tooltip/TooltipContainer';
import PopoverContainer from './components/overlay/Popover/PopoverContainer';
import ModalContainer from './components/overlay/Modal/ModalContainer';
import AlertContainer from './components/utility/Alert/AlertContainer';
import SpinnerContainer from './components/utility/Spinner/SpinnerContainer';
import ToastContainer from './components/utility/Toast/ToastContainer';
import BasicTableContainer from './components/tables/Table/BasicTableContainer';
import TabsContainer from './components/utility/Tabs/TabsContainer';
import FormContainer from './components/utility/Form/FormContainer';
import BreadcrumbsContainer from './components/utility/Breadcrumbs/BreadcrumbsContainer';
import ApiDataTableContainer from './components/tables/ApiDataTable/ApiDataTableContainer';
import EditableTableContainer from './components/tables/EditableTable/EditableTableContainer';
import FilterTableContainer from './components/tables/FilterTable/FilterTableContainer';
import PaginationTableContainer from './components/tables/PaginationTable/PaginationTableContainer';
import SortableTableContainer from './components/tables/SortableTable/SortableTableContainer';
import AccordionContainer from './components/utility/Accordion/AccordionContainer';
import ProgressContainer from './components/utility/Progress/ProgressContainer';
import CardsContainer from './components/utility/Cards/CardsContainer';
import PaginationContainer from './components/utility/Pagination/PagninationContainer';
import BadgeContainer from './components/basic/Badge/BadgeContainer';
import ButtonGroupContainer from './components/basic/ButtonGroup/ButtonGroupContainer';
import ExportExcelContainer from './components/tables/ExportExcelTable/ExportExcelContainer';
import ExportPdfContainer from './components/tables/ExportPdfTable/ExportPdfContainer';
import PdfViewerContainer from './components/utility/PdfViewer/PdfViewerContainer';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/button' component={ButtonContainer} />
      <Route path='/input' component={InputContainer} />
      <Route path='/toggleButton' component={ToggleButtonContainer} />
      <Route path='/radioButton' component={RadioButtonContainer} />
      <Route path='/dropdown' component={DropDownContainer} />
      <Route path='/image' component={ImageContainer} />
      <Route path='/listgroup' component={ListGroupContainer} />
      <Route path='/navigationbar' component={NavBarContainer} />
      <Route path='/tooltip' component={TooltipContainer} />
      <Route path='/popover' component={PopoverContainer} />
      <Route path='/modal' component={ModalContainer} />
      <Route path='/alert' component={AlertContainer} />
      <Route path='/spinner' component={SpinnerContainer} />
      <Route path='/toast' component={ToastContainer} />
      <Route path='/basictable' component={BasicTableContainer} />
      <Route path='/tabs' component={TabsContainer} />
      <Route path='/form' component={FormContainer} />
      <Route path='/APIDataTable' component={ApiDataTableContainer} />
      <Route path='/editabletable' component={EditableTableContainer} />
      <Route path='/filtertable' component={FilterTableContainer} />
      <Route path='/paginationtable' component={PaginationTableContainer} />
      <Route path='/sortabletable' component={SortableTableContainer} />
      <Route path='/accordion' component={AccordionContainer} />
      <Route path='/breadcrumbs' component={BreadcrumbsContainer} />
      <Route path='/progress' component={ProgressContainer} />
      <Route path='/cards' component={CardsContainer} />
      <Route path='/pagination' component={PaginationContainer} />
      <Route path='/badge' component={BadgeContainer} />
      <Route path='/buttongroup' component={ButtonGroupContainer} />
      <Route path='/exportexceltable' component={ExportExcelContainer} />
      <Route path='/exportpdftable' component={ExportPdfContainer} />
      <Route path='/pdfviewer' component={PdfViewerContainer} />
    </div>
  </Router>
)
// React 16
// ReactDOM.render(
//   routing,
//   document.getElementById('root')
// );

// React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(routing, <Router><App /></Router>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();