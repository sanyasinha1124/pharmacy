// src/components/Admission.js
import React from 'react';

const Admission = () => {
  return (
    <div className="admission-container">
      <h2>Admission Process</h2>
      <p>
        Welcome to the Admission section of Sumatidevi Tompe Institute. We are delighted that you are considering us for your pharmaceutical education.
      </p>
      <h3>Courses Offered:</h3>
      <ul>
        <li>Diploma in Pharmacy (D.Pharm)</li>
        {/* Add more courses if applicable */}
      </ul>
      <h3>Eligibility Criteria:</h3>
      <p>
        For D.Pharm: 10+2 (HSC) with Physics, Chemistry, and either Biology or Mathematics.
      </p>
      <h3>How to Apply:</h3>
      <ol>
        <li>Fill out the online application form.</li>
        <li>Upload required documents (mark sheets, certificates, photographs).</li>
        <li>Pay the application fee.</li>
        <li>Attend counseling/interview (if applicable).</li>
      </ol>
      <p>For detailed admission guidelines and important dates, please download our prospectus or contact the admissions office.</p>
      <a href="/path/to/prospectus.pdf" download>Download Prospectus</a>
    </div>
  );
};

export default Admission;