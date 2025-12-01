// src/components/PCI.js
import React, { useState, useEffect } from 'react'; // Keep useEffect if you're using it for Escape key
import './PCI.css';

const PCI = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // Define the URL for the PCI certificate PDF.
    const pciCertificatePdfUrl = '/pci-image.pdf';

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    // Keep useEffect for Escape key if you have it (no change to document view structure)
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && selectedPdfUrl) {
                closePdfViewer();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [selectedPdfUrl]);

    return (
        <div className="container pci-container"> 
            
            <h2 className="page-title">PCI Affiliation</h2>
            {/* ADDED THIS LINE: The full-length horizontal line */}
            <hr className="pci-heading-separator" /> 
            
            <div className="pci-document-section">
                <p>Click the button below to view our PCI certificate.</p>
                <button
                    className="view-document-btn"
                    onClick={() => openPdfViewer(pciCertificatePdfUrl)}
                >
                    Click to View Document
                </button>
            </div>

            {/* !!! NO CHANGES HERE - THIS IS YOUR ORIGINAL DOCUMENT VIEW STRUCTURE !!! */}
            {selectedPdfUrl && (
                <div className="fullscreen-overlay" onClick={closePdfViewer}>
                    <button className="close-button" onClick={closePdfViewer}>&times;</button>
                    <iframe
                        className="pdf-viewer-iframe"
                        src={`${selectedPdfUrl}#toolbar=0`}
                        title="PCI Certificate"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default PCI;