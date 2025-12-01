import React from 'react';
import './AboutUs.css'; // Assuming you'll style this page

const AboutUs = () => {
  return (
    <div className="about-us-page page-content-container">
      <h2>About Our College</h2>
      <p>Sumatidevi Tompe Institute of Pharmaceutical Science and Research is dedicated to fostering excellence in pharmaceutical education and research. Established with a vision to create skilled professionals and innovators, we provide a holistic learning environment that combines rigorous academic training with practical exposure.</p>
      <p>Our commitment extends beyond academics to encompass the overall development of our students, preparing them not just for successful careers but also for responsible citizenship.</p>

      <section>
        <h3>Our Vision</h3>
        <p>To be a leading center for pharmaceutical education, recognized for its quality of teaching, research, and significant contribution to public health and healthcare innovation.</p>
      </section>

      <section>
        <h3>Our Mission</h3>
        <ul>
          <li>To impart comprehensive theoretical knowledge and practical skills necessary for a successful career in pharmacy.</li>
          <li>To promote cutting-edge research and innovation in various fields of pharmaceutical sciences.</li>
          <li>To inculcate strong ethical values, professionalism, and social responsibility among our students.</li>
          <li>To establish robust collaborations with pharmaceutical industries, healthcare sectors, and research organizations for mutual growth and enhanced learning opportunities.</li>
          <li>To continually update our curriculum and infrastructure to meet global standards and industry demands.</li>
        </ul>
      </section>

      <section>
        <h3>Our History</h3>
        <p>Founded in [Year of Establishment], Sumatidevi Tompe Institute has grown steadily, adapting to the dynamic needs of the pharmaceutical sector. We have continually invested in modern facilities and attracted top-tier faculty, building a legacy of academic excellence and student success.</p>
      </section>
    </div>
  );
};

export default AboutUs;