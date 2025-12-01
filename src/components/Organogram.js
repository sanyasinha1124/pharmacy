// src/components/Organogram.js
import React from 'react';

const Organogram = () => {
  return (
    <div className="organogram-container">
      <h2>Organizational Chart (Organogram)</h2>
      <p>
        Below is the organizational structure of Sumatidevi Tompe Institute, illustrating the hierarchy and reporting relationships within the institution.
      </p>
      {/* You can embed an image of your organogram or describe it textually */}
      <img src="/path/to/your/organogram.jpg" alt="Institute Organogram" style={{ maxWidth: '100%', height: 'auto' }} />
      <p>*(Please replace `/path/to/your/organogram.jpg` with the actual path to your organogram image)*</p>
    </div>
  );
};

export default Organogram;