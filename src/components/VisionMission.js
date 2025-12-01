// import React from 'react';
// import './VisionMission.css'; // Import the stylesheet for responsive styling

// const VisionMission = () => {
//   return (
//     <div className="vision-mission-container">
//       <h2>Our Vision, Mission, Values, Motto & Tagline</h2>

//       <section className="vision-section">
//         <h3>Vision</h3>
//         <p>
//           We aim to be an educational institution that nurtures cognitive and motor skills in our students,
//           enabling them to meet the needs of the pharmaceutical industry and make a positive impact on
//           the global healthcare system.
//         </p>
//       </section>

//       <section className="mission-section">
//         <h3>Mission</h3>
//         <ul>
//           <li>
//             <strong>To create a cutting-edge infrastructure</strong> that promotes the growth of cognitive and motor skills
//             for the purpose of meeting professional obligations and challenges in the students.
//           </li>
//           <li>
//             <strong>To deliver pharmacy education</strong> that prioritizes the needs of our students and maintains a
//             standard of excellence over time. This can assist in the development of leaders and
//             entrepreneurs.
//           </li>
//           <li>
//             <strong>To inculcate a sense of social responsibility</strong> and professional ethics in students.
//           </li>
//           <li>
//             <strong>To promote lifelong learning</strong> by enhancing the relationship between industry and academia,
//             allowing for a greater understanding of the current industrial landscape.
//           </li>
//         </ul>
//       </section>

//       <section className="values-section">
//         <h3>Values</h3>
//         <ul>
//           <li>A commitment to excellence in teaching, research, and practice.</li>
//           <li>Engaging students as crucial participants.</li>
//           <li>Building a strong partnership with the industry to advance the pharmaceutical field.</li>
//           <li>Embrace an interdisciplinary approach to enhance patient care and contribute to the healthcare system.</li>
//           <li>Direction and teamwork in everything that we do.</li>
//           <li>Reliability of the operating system and the surrounding work environment.</li>
//           <li>Treating each person with dignity.</li>
//         </ul>
//       </section>

//       <section className="motto-tagline-section">
//         <h3>Motto</h3>
//         <p className="motto-text">
//           हस्ते विभ्रद्रेषजा
//           <br />
//           (Pharmacist is the personnel who possess the miraculous ability in their hand to create magical medicines)
//         </p>

//         <h3>Tag-line</h3>
//         <p className="tagline-text">"developing good minds"</p>
//       </section>
//     </div>
//   );
// };

// export default VisionMission;

import React, { useEffect } from 'react';
import './VisionMission.css';

const VisionMission = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.vm-card');

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="vm-container">
      <h2 className="vm-title">Our Vision and Mission</h2>
      <p className="vm-subtitle">Building a healthier tomorrow through quality pharmacy education</p>

      {/* Vision */}
      <div className="vm-card">
        <h3><i className="fa-solid fa-eye"></i> Vision</h3>
        <p>
          To develop globally competent pharmacists equipped with cognitive, technical, and ethical skills,
          ready to advance the healthcare and pharmaceutical industries.
        </p>
      </div>

      {/* Mission */}
      <div className="vm-card">
        <h3><i className="fa-solid fa-bullseye"></i> Mission</h3>
        <ul>
          <li>To establish a world-class learning environment with modern infrastructure.</li>
          <li>To deliver student-centric education promoting innovation & entrepreneurship.</li>
          <li>To strengthen the industry–academia relationship for skill development.</li>
          <li>To instill social responsibility, compassion & lifelong learning.</li>
        </ul>
      </div>

      {/* Values */}
      <div className="vm-card">
        <h3><i className="fa-solid fa-hand-holding-heart"></i> Values</h3>
        <ul>
          <li>Commitment to excellence in education & research.</li>
          <li>Integrity, ethics & professionalism.</li>
          <li>Teamwork, respect & inclusiveness.</li>
          <li>Reliable, disciplined & compassionate service mindset.</li>
        </ul>
      </div>

      {/* Motto & Tagline */}
      <div className="vm-card">
        <h3><i className="fa-solid fa-quote-left"></i> Motto</h3>
        <p className="motto">
          हस्ते विभ्रद्रेषजा  
          <br />
          “A pharmacist has the divine ability to create life-healing medicines.”
        </p>

        <h3><i className="fa-solid fa-lightbulb"></i> Tagline</h3>
        <p className="tagline">"Developing Good Minds"</p>
      </div>
    </div>
  );
};

export default VisionMission;
