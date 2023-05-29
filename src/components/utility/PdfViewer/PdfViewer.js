import React, { useEffect, useState } from "react"
import { pdfjs, Document, Page } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import Prism from "prismjs";
import "../../prism.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString()

const options = {
    cMapUrl: "cmaps/",
    standardFontDataUrl: "standard_fonts/"
}

function PdfViewer() {
    const [file, setFile] = useState("./sample.pdf")
    const [numPages, setNumPages] = useState()

    function onFileChange(event) {
        const { files } = event.target

        if (files && files[0]) {
            setFile(files[0] || null)
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages)
    }

    return (
        <div className="demo-wrapper">
            <div className='mb-2'>
                The PDF Viewer component enables the user to view PDF files in the browser itself.
            </div>
            <div className="Example">
                <header>
                    <h4>PDF Viewer</h4>
                </header>
                <div className="Example__container">
                    <div className="Example__container__load">
                        <label htmlFor="file">Load from file:</label>{" "}
                        <input onChange={onFileChange} type="file" />
                    </div>
                    <div className="Example__container__document">
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))}
                        </Document>
                    </div>
                </div>
            </div>
            <div className="compo-description">
                <h4>Description</h4>
                <p>
                    The PDF Viewer component enables the user to view PDF files in the browser itself.
                </p>
                <h5>Steps</h5>
                <ul>
                    <li>
                        <strong>Step 1 :</strong> Install Dependency to your project root
                        folder :<code>npm install react-pdf</code>
                        <br />
                    </li>
                    <li>
                        <strong>Step 2 :</strong> Import component in view where ever its
                        necessary: <code>{`import { pdfjs, Document, Page } from "react-pdf"`}</code>, <code>{`import "react-pdf/dist/esm/Page/AnnotationLayer.css"`}</code>, <code>{`import "react-pdf/dist/esm/Page/TextLayer.css"`}</code>
                        <br />
                    </li>
                    <li>
                        <strong>Step 3 :</strong> Refer React code under the 'Code'
                        tab, to understand the usage of component.
                    </li>
                </ul>
            </div>
        </div>
    )
}

function PdfViewerCode() {
    useEffect(() => Prism.highlightAll(), [])
    return (
        <div className="jsx-code-wrapper">
            <h4>React code</h4>
            <pre className="pre-code">
                <code className="language-javascript">
                    {`
import React, { useEffect, useState } from "react"
import { pdfjs, Document, Page } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import Prism from "prismjs";
import "../../prism.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString()

const options = {
    cMapUrl: "cmaps/",
    standardFontDataUrl: "standard_fonts/"
}

export default function PdfViewer() {
    const [file, setFile] = useState("./sample.pdf")
    const [numPages, setNumPages] = useState()

    function onFileChange(event) {
        const { files } = event.target

        if (files && files[0]) {
            setFile(files[0] || null)
        }
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages)
    }

    return (
        `}</code><code className="language-markup">{`
        <div className="demo-wrapper">
            <div className='mb-2'>
                The PDF Viewer component enables the user to view PDF files in the browser itself.
            </div>
            <div className="Example">
                <header>
                    <h4>PDF Viewer</h4>
                </header>
                <div className="Example__container">
                    <div className="Example__container__load">
                        <label htmlFor="file">Load from file:</label>{" "}
                        <input onChange={onFileChange} type="file" />
                    </div>
                    <div className="Example__container__document">
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={options}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={\`page_\${index + 1}\`} pageNumber={index + 1} />
                            ))}
                        </Document>
                    </div>
                </div>
            </div>
        </div>`}</code><code className="language-javascript">{`
        
    )
}

export default PdfViewer;
                    `}
                </code>
            </pre>
        </div>
    )
}

export { PdfViewer, PdfViewerCode }
