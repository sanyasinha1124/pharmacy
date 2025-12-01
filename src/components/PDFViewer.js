import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// FIX: Hardcoded a known stable version of the worker file to avoid dynamic fetching issues.
// The previous error was likely due to the specific version not being available or a mismatch.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setError(null); // Clear any previous errors
    }

    function onDocumentLoadError(error) {
        console.error('Failed to load PDF:', error);
        setError('Failed to load PDF. Please check the file path and network connection.');
    }

    const pageNumbers = Array.from({ length: numPages || 0 }, (_, i) => i + 1);

    return (
        <div style={{ height: '300px', overflowY: 'auto', width: '100%', padding: '10px' }}>
            {error ? (
                <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
                    {error}
                </div>
            ) : (
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError} // Handle loading errors
                    className="pdf-document"
                    options={{
                        disableWorker: false,
                        cMapUrl: `https://unpkg.com/pdfjs-dist@2.16.105/cmaps/`,
                        cMapPacked: true,
                    }}
                >
                    {pageNumbers.map(pageNumber => (
                        <Page
                            key={`page_${pageNumber}`}
                            pageNumber={pageNumber}
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    ))}
                </Document>
            )}
        </div>
    );
};

export default PDFViewer;
