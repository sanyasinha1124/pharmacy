// src/components/Patent.js
import React from 'react';

const Patent = () => {
  return (
    <div className="patent-container">
      <h2>Patents Filed/Granted</h2>
      <p>
        The institute encourages innovation and intellectual property development among its faculty and students. This section highlights the patents filed and granted by our researchers.
      </p>
      <h3>Our Patents:</h3>
      <ul>
        <li>**Title:** [Patent Title]</li>
        <li>**Inventors:** [Inventor Name(s)]</li>
        <li>**Application/Grant No.:** [Number]</li>
        <li>**Status:** [Filed/Granted]</li>
        {/* Add more patent details */}
      </ul>
    </div>
  );
};

export default Patent;