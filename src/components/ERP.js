// src/components/ERP.js
import React from 'react';

const ERP = () => {
  return (
    <div className="erp-container">
      <h2>ERP Portal</h2>
      <p>
        Our Enterprise Resource Planning (ERP) system is an integrated platform designed to streamline administrative and academic processes for students, faculty, and staff.
      </p>
      <h3>Features of the ERP Portal:</h3>
      <ul>
        <li>Student Information System (SIS)</li>
        <li>Online Attendance Management</li>
        <li>Examination Management</li>
        <li>Fee Management</li>
        <li>Result Declaration</li>
        <li>Circulars and Notifications</li>
        <li>Faculty Management</li>
      </ul>
      <p>
        <a href="[Your ERP Login URL]" target="_blank" rel="noopener noreferrer">Login to ERP Portal</a> *(Replace `[Your ERP Login URL]` with your actual ERP login link)*
      </p>
    </div>
  );
};

export default ERP;