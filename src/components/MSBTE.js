import React, { useState } from 'react';
import './MSBTE.css'; // Link the CSS file for styling

const MSBTE = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // URL for the MSBTE approval document.
    // NOTE: Update this path to your actual PDF file location.
    const msbteApprovalPdfUrl = "/msbte-affilition_page-0001 (1).pdf";

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    return (
        <div className="msbte-page-container">
            <h2>Maharashtra State Board of Technical Education (MSBTE)</h2>
            <p className="msbte-intro-text">
                Click the button below to view the official approval document.
            </p>
            
            <div className="msbte-document-section">
                <button
                    className="view-document-btn"
                    onClick={() => openPdfViewer(msbteApprovalPdfUrl)}
                >
                    Click to View Document
                </button>
            </div>

            {/* Full-screen Modal for PDF Viewer, shown conditionally */}
            {selectedPdfUrl && (
                <div className="fullscreen-overlay" onClick={closePdfViewer}>
                    <button className="close-button" onClick={closePdfViewer}>&times;</button>
                    <iframe
                        className="pdf-viewer-iframe"
                        src={`${selectedPdfUrl}#toolbar=0`}
                        title="MSBTE Approval Document"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default MSBTE;