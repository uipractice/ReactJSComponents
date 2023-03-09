import { useEffect } from 'react';
import { DemoImageMedium } from './DemoImage';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './RbCards.css';
import Prism from "prismjs";
import '../../prism.css';
import '../Accordion/RbAccordion.scss';

function RbCards() {
  return (
    <div className='demo-wrapper rb-accordion-class'>
      <div>
        <div className='row'>
          <div className='col-xs-12'>
            <div><strong>Basic Card</strong></div>
            <Card style={{ width: '18rem', marginTop: '10px' }}>
              <Card.Img variant="top" src={DemoImageMedium} alt='cardImg' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12" style={{ marginTop: '20px' }}>
            <div><strong>Card with Title, text, and links</strong></div>
            <Card style={{ width: '18rem', marginTop: '10px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div> <br />
      <div className="col-xs-12">
        <div><strong>Card with List as its content(with featured card header)</strong></div>
        <Card style={{ width: '18rem', marginTop: '10px' }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Cards provide a flexible and extensible content container with multiple variants and options.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Card: <code>import Card from 'react-bootstrap/Card';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbCardsCode() {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`    
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Prism from "prismjs";

function RbCards() {
  return (`}</code><code className='language-markup'>{`
    <div className='demo-wrapper rb-accordion-class'>
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
            <div><strong>Basic Card</strong></div>
            <Card style={{ width: '18rem', marginTop: '10px' } }}>
              <Card.Img variant="top" src={DemoImageMedium} alt='cardImg' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
            <label>Card with Title, text, and links</label>
            <Card style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
        <div className="col-xs-12" style={{ marginLeft: '10px' }}>
          <div><strong>Card with List as its content(with featured card header)</strong></div>
          <Card style={{ width: '18rem', marginTop: '10px' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>`}</code><code className='language-javascript'>{`
    );
}

export default RbCards;`}
        </code>
      </pre>
    </div>
  );
}

export { RbCards, RbCardsCode };