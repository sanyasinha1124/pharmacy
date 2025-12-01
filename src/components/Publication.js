// src/components/Publication.js
import React from 'react';

const Publication = () => {
  return (
    <div className="publication-container">
      <h2>Research Publications</h2>
      <p>
        Our faculty and students are actively involved in research, contributing to the advancement of pharmaceutical sciences through various publications in national and international journals.
      </p>
      <h3>Recent Publications:</h3>
      <ul>
        <li>[Author Name(s)], "[Publication Title]", [Journal Name], Volume(Issue), Pages, Year.</li>
        <li>[Author Name(s)], "[Publication Title]", [Journal Name], Volume(Issue), Pages, Year.</li>
        {/* Add more publication listings */}
      </ul>
      {/* Link to departmental research pages or institutional repository */}
    </div>
  );
};

export default Publication;