// // src/components/AboutInstitute.js
// import React from 'react';
// import './AboutInstitute.css'; // Optional: Create a CSS file for this page's specific styling

// const AboutInstitute = () => {
//   return (
//     <div className="about-institute-container"> {/* Original container class */}

//       <section className="about-our-college">
//         <h2>About Our Institute</h2>
//         {/* ADDED THIS LINE: One full-width horizontal line */}
//         <hr className="heading-separator-line" /> 
        
//         {/* All your original paragraph content follows */}
//         <p>
//             Sumatidevi Tompe Institute of Pharmaceutical Science and Research is a prestigious educational institution situated in Chandur Bazar, Amravati. Our mission is to provide high-quality pharmacy education in rural areas. The institute aims to connect urban and rural areas by offering high-quality pharmacy education. Sumatidevi Tompe Institute of Pharmaceutical Science and Research prides itself on its modern infrastructure, creating an optimal learning environment for students. The institute's campus is equipped with state-of-the-art facilities, such as modern classrooms, advanced laboratories, and a comprehensive library. The faculty members are extremely knowledgeable and skilled in their respective areas of expertise. They are committed to delivering top-notch education to students and are always ready to go above and beyond to ensure students receive the highest quality education.
//         </p>
//         <p>
//           The institute's management is dedicated to fostering an environment that nurtures the growth and development of students, both academically and professionally. We strive to create an environment that appeals to students and supports their aspirations. The institute's laboratory is equipped with state-of-the-art instruments and equipment, offering students practical training in different areas of pharmacy. The laboratory is equipped with state-of-the-art instruments that allow students to conduct experiments. The institute's library boasts an extensive collection of books, journals, and online resources. Our institution provides students with a diverse array of resources, such as e-books, online journals, and digital databases.</p>
//         <p>
//           The institute also offers a strong Wi-Fi network that allows students to easily connect to the internet from any location on campus. Our institute's auditorium is designed to impress and engage students. With its impressive 10,000 sq ft space, it is equipped with top-of-the-line audio-visual equipment, projection systems, and comfortable seating arrangements. 
//         </p>
//       </section>
//     </div>
//   );
// };
// src/components/AboutInstitute.js

// src/components/AboutInstitute.js
import React from "react";
import "./AboutInstitute.css";

const AboutInstitute = () => {
  return (
    <div className="about-institute-container fade-in">

      {/* HERO HEADING SECTION */}
      <section className="about-hero-section slide-up">
        <h2>About Our Institute</h2>
        <hr className="heading-separator-line" />
        <p className="hero-subtitle">
          Empowering rural students with world-class pharmaceutical education.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content">

        {/* LEFT COLUMN */}
        <div className="about-left slide-left">
          <p>
            Sumatidevi Tompe Institute of Pharmaceutical Science and Research is a prestigious educational institution located in Chandur Bazar, Amravati. Our mission is to deliver exceptional pharmacy education to rural regions and create pathways that connect rural learning with urban standards.
          </p>

          <p>
            Our modern campus features advanced laboratories, smart classrooms, and a rich library with books, journals, e-resources, and databases essential for pharmaceutical studies. Highly qualified faculty members lead with experience, dedication, and a passion for student development.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right slide-right">
          <p>
            The institute also provides digital learning support, including a high-speed Wi-Fi campus enabling uninterrupted academic research. Practical learning is enhanced through our state-of-the-art laboratory setup equipped with modern instruments for hands-on training.
          </p>

          <p>
            Our 10,000 sq ft auditorium is an architectural highlight — equipped with premium audio-visual systems and designed for seminars, presentations, ceremonies, and cultural events.
          </p>
        </div>
      </section>

      {/* HIGHLIGHT BLOCK */}
      <section className="highlight-block zoom-in">
        <p>
          “At STIPSR, we believe education should be accessible, inclusive, and transformative. Our goal is to shape future pharmacy professionals who will impact global healthcare.”
        </p>
      </section>
    </div>
  );
};

export default AboutInstitute;
