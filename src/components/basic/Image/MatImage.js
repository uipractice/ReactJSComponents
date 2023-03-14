import React, { useEffect } from 'react';
import './ImageContainer.css';
import Prism from "prismjs";
import '../../prism.css';
function MatImage() {
  return (
    <div className='demo-wrapper'>
      <div> Image with props <code>rounded</code>, </div>
      <img className='mat-rounded' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>Image with props <code>roundedCircle</code></div>
      <img className='roundedCircle' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>Image with props <code>thumbnail</code></div>
      <img className='thumbnail' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>Image with props <code>fluid</code></div>
      <img className='fluid' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>
        <h4>Description</h4>
        <p>Image component with various shape representations.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import the component: <code>import React from 'react';</code></li>
          <li><strong>Step 3 :</strong> Import the style component: <code>'./ImageContainer.css</code></li>
          <li><strong>Step 4 :</strong> Refer React Material UI code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}
function MatImageCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>React Material UI code</h4>
      <pre style={{ marginRight: '20px', background: '#fff' }}>
        <code className='language-javascript'>{`
import React, { useEffect } from 'react';
import './ImageContainer.css'

function MatImage (){
return(`}</code><code className='language-markup'>{`
   <div className='demo-wrapper'>
      <div> Image with props <code>rounded</code>, </div>
      <img className='rounded' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>Image with props <code>roundedCircle</code></div>
      <img className='roundedCircle' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>  
      <div>Image with props <code>thumbnail</code></div> 
      <img className='thumbnail' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
      <div>Image with props <code>fluid</code></div> 
      <img className='fluid' alt='' src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>    
   <div>`}</code><code className='language-javascript'>{`
    );
}

function default MatImage;
      
<==================ImageContainer.css===============>`}</code><code className="language-css">{`
  .mat-rounded {
    display: inline-block;
    border-radius: 8px;
    width: 100px;
    height: 100px;
    border: solid 3px #191919;
}

.roundedCircle {
    width: 100px;
    height: 100px;
    border: solid 3px #131212;
    display: inline-block;
    border-radius: 50%;
}

.thumbnail {
    border: 1px solid #0b0b0b;
    padding: 5px;
    width: 150px;
}

.fluid {
    width: 450px;
    height: 200px;
    border: solid 3px #191919;
}
        `}</code>
      </pre>
    </div>

  );
}
export { MatImage, MatImageCode };
