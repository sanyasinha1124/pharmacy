import React, { useState } from 'react';
import './DTE.css'; // Link the CSS file for styling

const DTE = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // URL for the single DTE document PDF.
    // NOTE: Update this path to your actual PDF file location.
    const dteDocumentPdfUrl = "/DTE letter-affilition_page-0001.pdf";

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    return (
        <div className="dte-page-container">
            <h2>Directorate of Technical Education (DTE) Documents</h2>
            <p className="dte-intro-text">
                Click the button below to view the official DTE document.
            </p>

            <div className="dte-document-section">
                <button
                    className="view-document-btn"
                    onClick={() => openPdfViewer(dteDocumentPdfUrl)}
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
                        title="DTE Documents"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default DTE;