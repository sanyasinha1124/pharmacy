// src/components/Organogram.js
import React from "react";
import "./Organogram.css";

const Organogram = () => {
  return (
    <div className="organogram-container">
      <h2 className="organogram-title">Organizational Chart (Organogram)</h2>

      <p className="organogram-subtext">
        The Organogram for Sumatidevi Tompe Institute will be displayed here soon.
      </p>

      {/* Placeholder Design */}
      <div className="organogram-coming-soon">
        <div className="node top-node">Principal</div>

        <div className="connector"></div>

        <div className="row">
          <div className="node">HOD – D.Pharm</div>
          <div className="node">HOD – B.Pharm</div>
          <div className="node">Administration</div>
        </div>

        <div className="connector"></div>

        <div className="row">
          <div className="node small-node">Faculty</div>
          <div className="node small-node">Faculty</div>
          <div className="node small-node">Office Staff</div>
        </div>

        <p className="coming-soon-text">Detailed Organogram Coming Soon...</p>
      </div>
    </div>
  );
};

export default Organogram;
