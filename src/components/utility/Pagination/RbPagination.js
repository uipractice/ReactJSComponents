import React, { useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Prism from "prismjs";
import '../../prism.css';


function RbPagination() {
  const getItems = () => {
    const active = 2;
    const items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  }
  return (
    <div className='demo-wrapper'>
      <div><strong>Pagination controls with different sizes</strong></div>
      <div style={{marginTop:'10px'}}>
        <Pagination>{getItems()}</Pagination>
        <br />
        <Pagination size="lg">{getItems()}</Pagination>
        <br />
        <Pagination size="sm">{getItems()}</Pagination>
      </div>
      <div><strong>Pagination controls with more options using <code>Pagination.Ellipsis</code></strong></div>
      <Pagination style={{marginTop: '10px'}}>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>A set of presentational components for building pagination UI,enables the user to select a specific page from a range of pages.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Pagination: <code>import Pagination from 'react-bootstrap/Pagination';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbPaginationCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`
    import Pagination from 'react-bootstrap/Pagination';
    import Prism from "prismjs";
    function PaginationControls() {
    const getItems = () => {
      const active = 2;
      const items = [];
      for (let number = 1; number <= 5; number++) {
        const isActive = number === active;
        items.push(`}</code><code className='language-markup'>{`
          <Pagination.Item key={number} active={isActive}>
            {number}
          </Pagination.Item>`}</code><code className='language-javascript'>{`
          );
        }
      return items;
    }
  return(`}</code><code className='language-markup'>{`
      <>
        <label>Pagination Controls with Diffrent Sizes</label>
        <Pagination>{getItems()}</Pagination>
        <Pagination size="lg">{getItems()}</Pagination>
        <Pagination size="sm">{getItems()}</Pagination>

        <label>Pagination controls with Pagination.Ellipsis control</label>
        <Pagination style={{marginTop: '10px'}}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        <Pagination.Last />
      </Pagination>`}</code><code className='language-javascript'>{`
    );
  }
  export default PaginationControls; `}
  </code>
</pre>
</div>
  );
}

export { RbPagination, RbPaginationCode };