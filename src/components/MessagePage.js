// // src/components/Message.js
// import React from 'react';

// const Message = () => {
//   return (
//     <div className="message-container">
//       <h2>Message from the Principal/Director</h2>
//       <p>
//         "It is with immense pleasure that I welcome you to Sumatidevi Tompe Institute of Pharmaceutical Science and Research. Our commitment is to provide an enriching academic experience that prepares students for the dynamic challenges of the pharmaceutical industry. We believe in nurturing critical thinking, fostering innovation, and promoting a strong sense of ethical responsibility. Join us on this exciting journey of learning and discovery."
//       </p>
//       <p><strong>[Principal/Director's Name]</strong></p>
//     </div>
//   );
// };

// export default Message;

import React from "react";
import "./MessagePage.css";

const MessagePage = () => {
  const messages = [
    {
      title: "Principal's Message",
      name: "Dr. ABC XYZ",
      role: "Principal",
      image: "/images/principal.jpg",
      message: `Our institute is committed to empowering students with knowledge, discipline, and integrity. 
      We strive to blend academic excellence with holistic development, equipping learners with the 
      capability to meet global challenges with confidence and competence.`,
    },
    {
      title: "Vice President's Message",
      name: "Mr. John Doe",
      role: "Vice President",
      image: "/images/vicepresident.jpg",
      message: `We believe education is the foundation of progress. Our institution focuses on creating 
      an environment where innovation, creativity, and ethics drive student success. Together, we create 
      learning that lasts a lifetime.`,
    },
    {
      title: "Chancellor's Message",
      name: "Hon. Dr. Jane Smith",
      role: "Chancellor",
      image: "/images/chancellor.jpg",
      message: `Our mission is to shape young minds into responsible and skilled professionals. 
      Through discipline, dedication, and continuous learning, we aim to contribute leaders who 
      make meaningful impact in society.`,
    },
  ];

  return (
    <div className="message-page">
      <h1 className="page-title">Messages</h1>

      <div className="message-grid">
        {messages.map((item, index) => (
          <div className="message-card" key={index}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.role} />
            </div>

            <h2 className="card-title">{item.title}</h2>
            <h3 className="card-name">{item.name}</h3>
            <p className="card-role">{item.role}</p>

            <p className="card-message">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
