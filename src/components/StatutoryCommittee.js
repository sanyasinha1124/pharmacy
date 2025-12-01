// import React, { useState } from 'react';

// /**
//  * The StatutoryCommittee component displays various statutory committees
//  * with links to their respective policy documents. This version uses
//  * a PDF viewer with no toolbar for document viewing.
//  */
// const StatutoryCommittee = () => {
//     // State to hold the URL of the PDF to be displayed in full screen.
//     const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

//     // Define the data for all committees with their titles, descriptions, and PDF URLs.
//     const statutoryCommittees = [
//         {
//             title: "Anti-Sexual Harassment Committee",
//             description: "Ensuring a safe and respectful environment for all.",
//             documentUrl: "/Anti sexual harrasment committee (Vishakha Samiti).pdf"
//         },
//         {
//             title: "Grievance Redressal Committee",
//             description: "Addressing concerns and maintaining harmony.",
//             documentUrl: "/Grievances redressal committee for faculty.pdf"
//         },
//         {
//             title: "Anti-Ragging Cell",
//             description: "Committed to a ragging-free campus life.",
//             documentUrl: "/Anti-Ragging Cell.pdf"
//         },
//     ];

//     // Function to open the PDF viewer with a specific URL.
//     const openPdfViewer = (pdfUrl) => {
//         setSelectedPdfUrl(pdfUrl);
//     };

//     // Function to close the PDF viewer.
//     const closePdfViewer = () => {
//         setSelectedPdfUrl(null);
//     };

//     return (
//         <div className="statutory-committee-container">
//             <style>
//                 {`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                
//                 .statutory-committee-container {
//                     font-family: 'Poppins', sans-serif;
//                     color: #333;
//                     max-width: 1200px;
//                     margin: 2rem auto;
//                     padding: 2rem;
//                     background-color: #fff;
//                     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//                     border-radius: 12px;
//                 }

//                 .main-heading {
//                     color: #004d40;
//                     font-size: clamp(2rem, 5vw, 2.5rem);
//                     margin-bottom: 30px;
//                     text-align: center;
//                     position: relative;
//                 }

//                 .main-heading::after {
//                     content: '';
//                     width: 100%;
//                     height: 4px;
//                     background-color: #ba965a;
//                     position: absolute;
//                     bottom: -15px;
//                     left: 0;
//                     border-radius: 2px;
//                 }

//                 .committees-grid {
//                     display: grid;
//                     gap: 30px;
//                     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//                     margin-top: 50px;
//                 }

//                 .committee-card {
//                     background-color: #f8f9fa;
//                     border-radius: 12px;
//                     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//                     padding: 2rem;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-between;
//                     transition: transform 0.3s ease, box-shadow 0.3s ease;
//                 }

//                 .committee-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
//                 }

//                 .committee-card h3 {
//                     color: #b89856;
//                     font-size: 1.5rem;
//                     margin-top: 0;
//                     border-bottom: 2px solid #a08c5c;
//                     padding-bottom: 10px;
//                     margin-bottom: 1rem;
//                 }

//                 .committee-card p {
//                     font-size: 1rem;
//                     line-height: 1.6;
//                     color: #555;
//                     flex-grow: 1;
//                 }

//                 .view-document-btn {
//                     background-color: #004d40;
//                     color: #fff;
//                     border: none;
//                     padding: 0.75rem 1.5rem;
//                     border-radius: 25px;
//                     cursor: pointer;
//                     font-size: 0.9rem;
//                     font-weight: 500;
//                     transition: background-color 0.2s ease;
//                     margin-top: 1rem;
//                     width: 100%;
//                 }

//                 .view-document-btn:hover {
//                     background-color: #ba965a;
//                 }

//                 /* Full-screen Modal for PDF */
//                 .fullscreen-overlay {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100vw;
//                     height: 100vh;
//                     background-color: rgba(0, 0, 0, 0.9);
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     z-index: 1000;
//                     backdrop-filter: blur(5px);
//                 }

//                 .close-button {
//                     position: absolute;
//                     top: 20px;
//                     right: 30px;
//                     background: none;
//                     border: none;
//                     color: white;
//                     font-size: 3rem;
//                     cursor: pointer;
//                     z-index: 1001;
//                     transition: transform 0.2s ease-in-out;
//                 }
                
//                 .close-button:hover {
//                     transform: scale(1.1);
//                     color: #a08c5c;
//                 }

//                 .pdf-viewer-iframe {
//                     width: 90%;
//                     height: 90%;
//                     border: none;
//                     background-color: #fff;
//                 }

//                 @media (max-width: 768px) {
//                     .statutory-committee-container {
//                         padding: 1rem;
//                     }
//                     .main-heading {
//                         font-size: 2rem;
//                     }
//                     .committee-card h3 {
//                         font-size: 1.3rem;
//                     }
//                 }
//                 `}
//             </style>
            
//             <h2 className="main-heading">
//                 Statutory Committee
//             </h2>

//             <div className="committees-grid">
//                 {statutoryCommittees.map((committee, index) => (
//                     <div key={index} className="committee-card">
//                         <h3>{committee.title}</h3>
//                         <p>{committee.description}</p>
//                         <button
//                             className="view-document-btn"
//                             onClick={() => openPdfViewer(committee.documentUrl)}
//                         >
//                             Click to View Document
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Full-screen Modal - This is only rendered when a document is selected */}
//             {selectedPdfUrl && (
//                 <div className="fullscreen-overlay" onClick={closePdfViewer}>
//                     <button className="close-button" onClick={closePdfViewer}>&times;</button>
//                     <iframe
//                         className="pdf-viewer-iframe"
//                         src={`${selectedPdfUrl}#toolbar=0`}
//                         title="Document Viewer"
//                         frameBorder="0"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default StatutoryCommittee;

import React, { useState } from "react";
import "./StatutoryCommittee.css";

const StatutoryCommittee = () => {
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

  const statutoryCommittees = [
    {
      title: "Anti-Sexual Harassment Committee",
      description: "Ensuring a safe, respectful, and inclusive campus environment for all.",
      documentUrl: "/Anti sexual harrasment committee (Vishakha Samiti).pdf",
    },
    {
      title: "Grievance Redressal Committee",
      description: "Dedicated to resolving concerns and fostering harmony within the institute.",
      documentUrl: "/Grievances redressal committee for faculty.pdf",
    },
    {
      title: "Anti-Ragging Cell",
      description: "Committed to ensuring a ragging-free, student-friendly campus atmosphere.",
      documentUrl: "/Anti-Ragging Cell.pdf",
    },
  ];

  return (
    <div className="sc-container">
      <h2 className="sc-title">Statutory Committee</h2>

      <div className="sc-grid">
        {statutoryCommittees.map((committee, index) => (
          <div className="sc-card" key={index}>
            <h3>{committee.title}</h3>
            <p>{committee.description}</p>

            <button
              className="sc-btn"
              onClick={() => setSelectedPdfUrl(committee.documentUrl)}
            >
              View Document
            </button>
          </div>
        ))}
      </div>

      {/* PDF FULLSCREEN VIEWER */}
      {selectedPdfUrl && (
        <div className="sc-overlay" onClick={() => setSelectedPdfUrl(null)}>
          <button
            className="sc-close-btn"
            onClick={() => setSelectedPdfUrl(null)}
          >
            &times;
          </button>

          <iframe
            className="sc-pdf-frame"
            src={`${selectedPdfUrl}#toolbar=0`}
            title="PDF Viewer"
          />
        </div>
      )}
    </div>
  );
};

export default StatutoryCommittee;
