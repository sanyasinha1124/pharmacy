import React, { useState } from 'react';
import './Courses.css';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('bpharm'); // State to manage active sub-tab

  const renderContent = () => {
    switch (activeTab) {
      case 'bpharm':
        return (
          <div className="course-details">
            <h3>Bachelor of Pharmacy (B.Pharm)</h3>
            <p>The B.Pharm program is a four-year undergraduate degree designed to equip students with comprehensive knowledge and practical skills in all aspects of pharmacy. It covers subjects like Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmaceutics, and Pharmacy Practice.</p>
            <h4>Key Highlights:</h4>
            <ul>
              <li>Duration: 4 Years (8 Semesters)</li>
              <li>Eligibility: 10+2 with PCB/PCM, valid entrance exam score</li>
              <li>Career Prospects: Retail Pharmacist, Hospital Pharmacist, Drug Inspector, Production, Quality Control, Research & Development, Marketing in Pharmaceutical Industry.</li>
            </ul>
            <h4>Syllabus Overview:</h4>
            <p>Human Anatomy and Physiology, Pharmaceutical Analysis, Organic Chemistry, Biochemistry, Pathophysiology, Pharmacology, Pharmaceutical Microbiology, Biopharmaceutics and Pharmacokinetics, Medicinal Chemistry, and more.</p>
            <a href="/path/to/bpharm_syllabus.pdf" className="download-syllabus-button" download>Download B.Pharm Syllabus</a>
          </div>
        );
      case 'mpharm':
        return (
          <div className="course-details">
            <h3>Master of Pharmacy (M.Pharm)</h3>
            <p>The M.Pharm program is a two-year postgraduate degree offering specialization in various branches of pharmaceutical sciences. It focuses on advanced research, critical analysis, and specialized knowledge required for leadership roles in industry and academia.</p>
            <h4>Specializations Offered:</h4>
            <ul>
              <li>Pharmaceutics</li>
              <li>Pharmacology</li>
              <li>Pharmaceutical Chemistry</li>
              <li>Pharmacognosy</li>
              <li>Pharmaceutical Quality Assurance</li>
            </ul>
            <h4>Key Highlights:</h4>
            <ul>
              <li>Duration: 2 Years (4 Semesters)</li>
              <li>Eligibility: B.Pharm degree, valid GPAT score (preferred)</li>
              <li>Career Prospects: Research Scientist, Academia, Clinical Research, Regulatory Affairs, Advanced Production & QA roles.</li>
            </ul>
            <a href="/path/to/mpharm_syllabus.pdf" className="download-syllabus-button" download>Download M.Pharm Syllabus</a>
          </div>
        );
      case 'dpharm':
        return (
          <div className="course-details">
            <h3>Diploma in Pharmacy (D.Pharm)</h3>
            <p>The D.Pharm program is a two-year diploma course aimed at preparing students for entry-level positions as pharmacists. It provides foundational knowledge and practical training essential for dispensing medicines and operating pharmacies.</p>
            <h4>Key Highlights:</h4>
            <ul>
              <li>Duration: 2 Years</li>
              <li>Eligibility: 10+2 with PCB/PCM</li>
              <li>Career Prospects: Dispensing Pharmacist, Community Pharmacist, Pharmaceutical Representative, Entry-level roles in drug stores and hospitals.</li>
            </ul>
            <a href="/path/to/dpharm_syllabus.pdf" className="download-syllabus-button" download>Download D.Pharm Syllabus</a>
          </div>
        );
      default:
        return (
          <div className="course-details">
            <h3>Select a Course to View Details</h3>
            <p>Please click on one of the tabs above to learn more about our Bachelor, Master, or Diploma programs in Pharmacy.</p>
          </div>
        );
    }
  };

  return (
    <div className="courses-page page-content-container">
      <h2>Our Academic Programs</h2>
      
      <div className="sub-tab-navigation">
        <button
          className={`sub-tab-button ${activeTab === 'bpharm' ? 'active' : ''}`}
          onClick={() => setActiveTab('bpharm')}
        >
          B.Pharm
        </button>
        <button
          className={`sub-tab-button ${activeTab === 'mpharm' ? 'active' : ''}`}
          onClick={() => setActiveTab('mpharm')}
        >
          M.Pharm
        </button>
        <button
          className={`sub-tab-button ${activeTab === 'dpharm' ? 'active' : ''}`}
          onClick={() => setActiveTab('dpharm')}
        >
          D.Pharm
        </button>
      </div>
      
      <div className="sub-tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Courses;