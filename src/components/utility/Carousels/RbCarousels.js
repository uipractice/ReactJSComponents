import React, { useState, useEffect } from 'react';
import { FirstSlide, SecondSlide, ThirdSlide} from './ImageSlides';
import Carousel from 'react-bootstrap/Carousel';
import Prism from "prismjs";
import '../../prism.css';

function RbCarousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom: '10px'}}><strong>Auto Sliding Carousels</strong></div>
      <Carousel style={{width: '80%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{margin: '10px 0 10px 0'}}><strong>Can be control the Carousel state via <code>activeIndex</code> prop and <code>onSelect</code></strong></div>

      <Carousel activeIndex={index} onSelect={handleSelect} style={{width: '80%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Carousel, A slideshow component for cycling through elements—images or slides of text</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Carousel: <code>import Carousel from 'react-bootstrap/Carousel';</code></li>
          <li><strong>Step 3 :</strong> Refer React Bootstrap code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbCarouselsCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Bootstrap code</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`
import React, { useState } from 'react';
import { FirstSlide, SecondSlide, ThirdSlide} from './ImageSlides';
import Carousel from 'react-bootstrap/Carousel';


function RbCarousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    `}
    </code>
    <code className='language-markup'>{`
    <div className='demo-wrapper'>
      <div style={{marginBottom: '10px'}}><strong>Auto Sliding Carousels</strong></div>
      <Carousel style={{width: '80%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{margin: '10px 0 10px 0'}}><strong>Can be control the Carousel state via <code>activeIndex</code> prop and <code>onSelect</code></strong></div>

      <Carousel activeIndex={index} onSelect={handleSelect} style={{width: '80%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sourcePath}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    `}
    </code>
    <code className='language-javascript'>{`
  );
}export default RbCarousels;       
      `}
      </code>
    </pre>
  </div>
  );
}

export { RbCarousels, RbCarouselsCode};