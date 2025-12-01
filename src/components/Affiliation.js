import React from 'react';
import './Affiliation.css';

const Affiliation = () => {
  return (
    <div className="affiliation-page page-content-container">
      <h2>Affiliation & Approvals</h2>
      <p>Our institute is proud to be affiliated with and approved by the following prestigious bodies, ensuring the highest standards of education and recognition for our programs:</p>
      
      <div className="affiliation-list">
        <div className="affiliation-item">
          <strong>All India Council for Technical Education (AICTE)</strong>
          <p>Recognized by AICTE for all technical programs, ensuring quality and standards in technical education across India. Our courses meet the national guidelines set by AICTE for technical institutions.</p>
        </div>
        <div className="affiliation-item">
          <strong>Pharmacy Council of India (PCI)</strong>
          <p>Approved by PCI, the statutory body governing pharmacy education and practice in India, guaranteeing adherence to professional standards and enabling our graduates to register as pharmacists.</p>
        </div>
        <div className="affiliation-item">
          <strong>Directorate of Technical Education (DTE), Maharashtra State Government</strong>
          <p>Recognized by the DTE, Government of Maharashtra, for all our professional courses, ensuring our programs align with state educational policies and requirements.</p>
        </div>
        <div className="affiliation-item">
          <strong>Savitribai Phule Pune University</strong>
          <p>Our academic programs are affiliated with the esteemed Savitribai Phule Pune University, providing a strong academic foundation and widely recognized degrees that are valued nationally and internationally.</p>
        </div>
        {/* You can add logos or links to the respective bodies here */}
      </div>

      <section className="accreditation-details">
        <h3>Quality Assurance and Accreditation</h3>
        <p>We are committed to continuous improvement and regularly undergo stringent quality assessments to ensure our educational delivery and infrastructure are of the highest caliber. This commitment reflects in our various approvals and affiliations.</p>
      </section>
    </div>
  );
};

export default Affiliation;