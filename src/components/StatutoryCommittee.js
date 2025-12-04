

// import React, { useState } from "react";
// import "./StatutoryCommittee.css";

// const StatutoryCommittee = () => {
//   const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

//   const statutoryCommittees = [
//     {
//       title: "Anti-Sexual Harassment Committee",
//       description: "Ensuring a safe, respectful, and inclusive campus environment for all.",
//       documentUrl: "/Anti sexual harrasment committee (Vishakha Samiti).pdf",
//     },
//     {
//       title: "Grievance Redressal Committee",
//       description: "Dedicated to resolving concerns and fostering harmony within the institute.",
//       documentUrl: "/Grievances redressal committee for faculty.pdf",
//     },
//     {
//       title: "Anti-Ragging Cell",
//       description: "Committed to ensuring a ragging-free, student-friendly campus atmosphere.",
//       documentUrl: "/Anti-Ragging Cell.pdf",
//     },
//   ];

//   return (
//     <div className="sc-container">
//       <h2 className="sc-title">Statutory Committee</h2>

//       <div className="sc-grid">
//         {statutoryCommittees.map((committee, index) => (
//           <div className="sc-card" key={index}>
//             <h3>{committee.title}</h3>
//             <p>{committee.description}</p>

//             <button
//               className="sc-btn"
//               onClick={() => setSelectedPdfUrl(committee.documentUrl)}
//             >
//               View Document
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* PDF FULLSCREEN VIEWER */}
//       {selectedPdfUrl && (
//         <div className="sc-overlay" onClick={() => setSelectedPdfUrl(null)}>
//           <button
//             className="sc-close-btn"
//             onClick={() => setSelectedPdfUrl(null)}
//           >
//             &times;
//           </button>

//           <iframe
//             className="sc-pdf-frame"
//             src={`${selectedPdfUrl}#toolbar=0`}
//             title="PDF Viewer"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default StatutoryCommittee;

import React, { useState } from "react";
import "./StatutoryCommittee.css";

const StatutoryCommittee = () => {
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

  const statutoryCommittees = [
    {
      title: "Anti-Sexual Harassment Committee",
      description:
        "Ensuring a safe, respectful, and inclusive campus environment for all.",
      documentUrl: "/Anti sexual harrasment committee (Vishakha Samiti).pdf",
    },
    {
      title: "Grievance Redressal Committee",
      description:
        "Dedicated to resolving concerns and fostering harmony within the institute.",
      documentUrl: "/Grievances redressal committee for faculty.pdf",
    },
    {
      title: "Anti-Ragging Cell",
      description:
        "Committed to ensuring a ragging-free, student-friendly campus atmosphere.",
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

      {/* PDF OVERLAY */}
      {selectedPdfUrl && (
        <div className="sc-overlay">
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
