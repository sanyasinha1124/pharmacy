// // src/components/DPharm.js
// import React from 'react';
// import './DPharm.css'; // Import the CSS file for styling

// const DPharm = () => {
//   return (
//     <div className="dpharm-page-container">
//       <div className="dpharm-header-banner">
//         <h2>D.Pharm - Diploma in Pharmacy</h2>
//         <p>Our program is approved by PCI, Government of Maharashtra and MSBTE.</p>
//       </div>

//       <div className="dpharm-content-grid">
//         <div className="dpharm-main-content">
//           <section className="program-overview-section">
//             <h3>Program Overview</h3>
//             <p>
//               The Diploma in Pharmacy (D.Pharm) is a 2-year academic program that prepares students for entry-level positions in the pharmacy sector. It focuses on foundational knowledge of pharmaceutical sciences, patient care, and industry regulations.
//             </p>
//             <div className="approval-highlight">
//               <p>
//                 Our program is approved by the Pharmacy Council of India (PCI) and prepares graduates for diverse career paths in the pharmaceutical industry, hospitals, research, and regulatory affairs.
//               </p>
//             </div>
//           </section>

//           <section className="program-highlights-section">
//             <h3>Program Highlights</h3>
//             <ul>
//               <li>Duration: 2 Years (Annual/Semester Pattern)</li>
//               <li>Eligibility: 10+2 with Physics, Chemistry, and Biology/Mathematics</li>
//               <li>Industry-oriented curriculum with hands-on training</li>
//               <li>Modern laboratories and research facilities</li>
//               <li>Mandatory internship program</li>
//               <li>Placement assistance with top pharmaceutical companies</li>
//             </ul>
//           </section>

//           <section className="curriculum-structure-section">
//             <h3>Curriculum Structure</h3>
//             <p>The D.Pharm curriculum covers both core and elective subjects across pharmaceutical sciences:</p>
//             <h4>First Year</h4>
//             <ul>
//               <li>Pharmaceutics – I</li>
//               <li>Pharmaceutical Chemistry – I</li>
//               <li>Pharmacognosy</li>
//               <li>Biochemistry & Clinical Pathology</li>
//               <li>Human Anatomy & Physiology (HAP)</li>
//               <li>Health Education & Community Pharmacy</li>
//             </ul>
//             <h4>Second Year</h4>
//             <ul>
//               <li>Pharmaceutics – II</li>
//               <li>Pharmaceutical Chemistry – II</li>
//               <li>Pharmacology & Toxicology</li>
//               <li>Pharmaceutical Jurisprudence</li>
//               <li>Drug Store and Business Management</li>
//               <li>Hospital & Clinical Pharmacy</li>
//             </ul>
//           </section>

//           <section className="career-opportunities-section">
//             <h3>Career Opportunities</h3>
//             <ul>
//               <li>Community Pharmacist</li>
//               <li>Hospital Pharmacist</li>
//               <li>Pharmaceutical Researcher</li>
//               <li>Drug Inspector</li>
//               <li>Medical Representative</li>
//               <li>Quality Control/Assurance Manager</li>
//               <li>Regulatory Affairs Officer</li> {/* Added this point */}
//             </ul>
//           </section>
//         </div>

//         <aside className="dpharm-sidebar">
//           <div className="quick-facts-card">
//             <h3>Quick Facts</h3>
//             <ul>
//               <li><strong>Degree:</strong> Diploma of Pharmacy (D.Pharm)</li>
//               <li><strong>Duration:</strong> 2 years</li>
//               <li><strong>Intake:</strong> 60 students</li>
//               <li><strong>Eligibility:</strong> 10+2 with 50% in PCB/PCM</li>
//               <li><strong>Entrance Exam:</strong> N/A</li>
//               <li><strong>Approval:</strong> PCI & AICTE Approved</li>
//             </ul>
//           </div>

//           <div className="contact-admissions-card">
//             <h3>Contact Admissions</h3>
//             <p><strong>Email:</strong> admissions@pharmacycollege.edu</p>
//             <p><strong>Phone:</strong> +91 9876543210</p>
//             <p><strong>Office Hours:</strong> Mon-Fri, 9AM-5PM</p>
//           </div>

//           <div className="application-form-card">
//             <h3>Application Form</h3>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input type="email" id="email" name="email" placeholder="Your Email Address" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
//               </div>
//               <button type="submit" className="submit-application-button">Submit Application</button>
//             </form>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default DPharm;

import React from "react";
import "./DPharm.css";

const DPharm = () => {
  return (
    <div className="dpharm-page-container">

      {/* Header Banner */}
      <div className="dpharm-header-banner fade-in">
        <h2>D.Pharm – Diploma in Pharmacy</h2>
        <p>Approved by PCI • Government of Maharashtra • MSBTE</p>
      </div>

      {/* Main Body Grid */}
      <div className="dpharm-content-grid">

        {/* Left Content */}
        <div className="dpharm-main-content slide-up">

          <section className="content-card">
            <h3>Program Overview</h3>
            <p>
              The Diploma in Pharmacy (D.Pharm) is a 2-year program designed
              to build foundational knowledge in pharmaceutical sciences,
              patient care, and healthcare regulations.
            </p>

            <div className="approval-highlight glow-card">
              <p>
                This program is recognized by the Pharmacy Council of India (PCI) 
                and prepares students for multiple career paths in industry, hospitals, 
                regulatory bodies, and research organizations.
              </p>
            </div>
          </section>

          <section className="content-card">
            <h3>Program Highlights</h3>
            <ul className="styled-list">
              <li>2 Years (Annual/Semester Pattern)</li>
              <li>Eligibility: 10+2 Science (PCB/PCM)</li>
              <li>Industry-driven curriculum</li>
              <li>Advanced labs & research facilities</li>
              <li>Mandatory internship</li>
              <li>Placement support with top pharma companies</li>
            </ul>
          </section>

          <section className="content-card">
            <h3>Curriculum Structure</h3>
            <p>The curriculum consists of core subjects designed to enhance pharmaceutical competencies:</p>

            <h4>First Year</h4>
            <ul className="styled-list">
              <li>Pharmaceutics – I</li>
              <li>Pharmaceutical Chemistry – I</li>
              <li>Pharmacognosy</li>
              <li>Biochemistry & Clinical Pathology</li>
              <li>Human Anatomy & Physiology</li>
              <li>Health Education & Community Pharmacy</li>
            </ul>

            <h4>Second Year</h4>
            <ul className="styled-list">
              <li>Pharmaceutics – II</li>
              <li>Pharmaceutical Chemistry – II</li>
              <li>Pharmacology & Toxicology</li>
              <li>Pharmaceutical Jurisprudence</li>
              <li>Drug Store & Business Management</li>
              <li>Hospital & Clinical Pharmacy</li>
            </ul>
          </section>

          <section className="content-card">
            <h3>Career Opportunities</h3>
            <ul className="styled-list">
              <li>Community Pharmacist</li>
              <li>Hospital Pharmacist</li>
              <li>Drug Inspector</li>
              <li>Medical Representative</li>
              <li>Research Assistant</li>
              <li>Quality Control / Quality Assurance</li>
              <li>Regulatory Affairs Officer</li>
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="dpharm-sidebar slide-left">

          <div className="sidebar-card glow-card">
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>Degree:</strong> D.Pharm</li>
              <li><strong>Duration:</strong> 2 Years</li>
              <li><strong>Intake:</strong> 60 Students</li>
              <li><strong>Eligibility:</strong> 10+2 Science</li>
              <li><strong>Entrance:</strong> Not Required</li>
              <li><strong>Approval:</strong> PCI + AICTE</li>
            </ul>
          </div>

          <div className="sidebar-card glass-card">
            <h3>Contact Admissions</h3>
            <p><strong>Email:</strong> admissions@pharmacycollege.edu</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Office Hours:</strong> Mon–Fri (9 AM – 5 PM)</p>
          </div>

          <div className="sidebar-card glass-card">
            <h3>Application Form</h3>

            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your Full Name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>

              <button className="submit-application-button">Submit Application</button>
            </form>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default DPharm;
