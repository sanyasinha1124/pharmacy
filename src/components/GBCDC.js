import React, { useState } from 'react';
import './GBCDC.css'; // This will now use the corrected CSS

/**
 * The GBCDC component displays information about the Governing Body (GB)
 * and the College Development Committee (CDC).
 * This version displays all documents as PDF files in a modal viewer.
 */
const GBCDC = () => {
    // State to hold the URL of the PDF to be displayed in full screen.
    const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

    // Define the documents with their titles and PDF URLs.
    // NOTE: You must place your actual PDF files in the correct public directory
    // and update these URLs accordingly.
    const gbDocuments = [
        { title: "Governing Body Guidelines - Part 1", url: "/GB-DOC.pdf" },
    ];
    
    const cdcDocuments = [
        { title: "College Development Committee Guidelines", url: "/CDC-DOC.pdf" }
    ];

    // Function to open the PDF viewer with a specific URL.
    const openPdfViewer = (pdfUrl) => {
        setSelectedPdfUrl(pdfUrl);
    };

    // Function to close the PDF viewer.
    const closePdfViewer = () => {
        setSelectedPdfUrl(null);
    };

    return (
        <div className="gbcdc-container">
            <div className="gbcdc-header-banner">
                <h2>Empowering Academic & Institutional Growth</h2>
                <p>Guiding the future of pharmacy education through strategic vision.</p>
            </div>
            
            <section className="gb-section">
                <h3>Governing Body (GB)</h3>
                <p>
                    The Governing Body is the apex statutory body responsible for the overall governance and strategic direction
                    of the institute. It oversees financial planning, policy-making, and long-term development plans to
                    ensure institutional excellence.
                </p>
                <section className="gb-policy-section">
                    <h3>GB Guidelines</h3>
                    <p></p>
                    <div className="document-list">
                        {gbDocuments.map((doc, index) => (
                            <div key={index} className="document-item">
                                <span className="document-title">{doc.title}</span>
                                <button
                                    className="view-document-btn"
                                    onClick={() => openPdfViewer(doc.url)}
                                >
                                     Click to View Document
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            <section className="cdc-section">
                <h3>College Development Committee (CDC)</h3>
                <p>
                    The College Development Committee (CDC) formulates institutional policies and guides academic planning,
                    infrastructure development, and quality improvement measures, ensuring adherence to regulatory guidelines.
                </p>
                <section className="cdc-policy-section">
                    <h3>CDC Guidelines</h3>
                    <p></p>
                    <div className="document-list">
                        {cdcDocuments.map((doc, index) => (
                            <div key={index} className="document-item">
                                <span className="document-title">{doc.title}</span>
                                <button
                                    className="view-document-btn"
                                    onClick={() => openPdfViewer(doc.url)}
                                >
                                    Click to View Document
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            {/* Full-screen Modal for PDF Viewer */}
            {selectedPdfUrl && (
                <div className="fullscreen-overlay" onClick={closePdfViewer}>
                    <button className="close-button" onClick={closePdfViewer}>&times;</button>
                    <iframe
                        className="pdf-viewer-iframe"
                        src={`${selectedPdfUrl}#toolbar=0`}
                        title="Document Viewer"
                        frameBorder="0"
                    />
                </div>
            )}
        </div>
    );
};

export default GBCDC;