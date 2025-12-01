import React, { useState } from 'react';
import './AisheCertificate.css'; // Link the CSS file for styling

const AisheCertificate = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // URL for the AISHE certificate PDF.
    // NOTE: Update this path to your actual PDF file location.
    const aisheCertificatePdfUrl = "/aische-certificate_page-0001.pdf";

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    return (
        <div className="aishe-certificate-container">
            <h2>AISHE Certificate</h2>
            <p className="aishe-certificate-intro-text">
                Click the button below to view the official AISHE certificate.
            </p>

            <div className="aishe-document-section">
                <button
                    className="view-document-btn"
                    onClick={() => openPdfViewer(aisheCertificatePdfUrl)}
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
                        title="AISHE Certificate"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default AisheCertificate;