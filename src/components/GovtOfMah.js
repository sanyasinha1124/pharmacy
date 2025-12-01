import React, { useState } from 'react';
import './GovtOfMah.css'; // Link the CSS file for styling

const GovtOfMah = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // URL for the single government document PDF.
    // NOTE: Update this path to your actual PDF file location.
    const govtDocumentPdfUrl = "/MS Govt GR-affilition_page-0001.pdf";

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    return (
        <div className="govt-of-mah-page-container">
            <h2>Official Government Document</h2>
            <p className="govt-of-mah-intro-text">
                Click the button below to view the official government document.
            </p>

            <div className="govt-document-section">
                <button
                    className="view-document-btn"
                    onClick={() => openPdfViewer(govtDocumentPdfUrl)}
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
                        title="Official Government Document"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default GovtOfMah;