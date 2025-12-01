// src/components/Alumni.js
import React from 'react';

const Alumni = () => {
  return (
    <div className="alumni-container">
      <h2>Alumni Association</h2>
      <p>
        Our alumni are our greatest asset and ambassadors. The Sumatidevi Tompe Institute Alumni Association serves as a vibrant network connecting past graduates with the institute and with each other.
      </p>
      <h3>Alumni Benefits:</h3>
      <ul>
        <li>Networking opportunities</li>
        <li>Mentorship programs</li>
        <li>Career guidance</li>
        <li>Participation in institute events</li>
      </ul>
      <p>We encourage all our former students to register with the association and stay connected!</p>
      {/* Add alumni registration form link, success stories, events etc. */}
    </div>
  );
};

export default Alumni;