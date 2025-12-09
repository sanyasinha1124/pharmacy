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
      message: `Modern medications provide significant efficency in promoting healing and enhancing the quality of life for millions of individuals. The pharmacist plays a crucial role in assisting individuals in optimizing the effectiveness of their drugs. Pharmacists make up the third biggest group of healthcare workers globally, and the pharmacy profession in India has been consistently developing over the past decade. 
      In recent times, pharmacists have broadened their responsibilities beyond simply distributing prescriptions, and now focus on providing comprehensive pharmaceutical care to optimize the advantages of various drugs. I am proud and delighted to serve as the Principal of Sumatidevi Institute of Pharmaceutical Science and Research, located in Chandur Bazar, Amravati. Our goal is to generate highly skilled pharmacy professionals by effectively utilizing our infrastructure, experience, and managerial support. Our objective is to produce skilled professionals who can successfully provide pharmaceutical care to the community by employing new methods.In light of the very competitive global landscape, we make every conceivable endeavor to assure the comprehensive growth and advancement of our students. Among these efforts, our top objective is to achieve academic excellence.
      `,
    },
    {
      title: " President's Message",
      name: "Mr. John Doe",
      role: " President",
      image: "/images/president.jpg",
      message: `It is with great pleasure and a sense of profound purpose that I address you as the President of Sumatidevi Tompe Institute of Pharmaceutical Science and Research. Our institution stands as a beacon of academic excellence and professional innovation, dedicated to shaping the future leaders of the pharmaceutical industry. We are committed to fostering an environment where curiosity is celebrated, and groundbreaking research is not just encouraged, but an integral part of our educational philosophy. Our vision extends beyond the confines of our campus. We aim to make a tangible impact on community health by producing ethically grounded and technically proficient pharmacy professionals. We believe that a strong foundation in both scientific principles and compassionate patient care is essential. To achieve this, our curriculum is continuously updated to reflect the latest advancements in pharmacology, and our state-of-the-art facilities provide students with the practical experience they need to excel.`,
    },
    {
      title: "Secretary's Message",
      name: "Hon. Dr. Jane Smith",
      role: "Secretary",
      image: "/images/passport_photo.jpg",
      message: `Dear Students and Faculty I am delighted and excited to welcome all of you as the Secretary of Sumatidevi Institute of Pharmaceutical Science and Research. I am thrilled to have the chance to collaborate with all of you, committed individuals who make up the lively community of our institution. Our institute has always been renowned for its dedication to providing top-notch pharmaceutical education and conducting cutting-edge research. We are extremely proud of our efforts to support and develop the most talented individuals, who will become the future leaders in the field of pharmacy. Our facilities are top-notch, our faculty members are highly experienced, and our curriculum is comprehensive. We aim to create an environment that promotes intellectual growth and personal development. To our new students, I offer a warm welcome. You have made an excellent decision in choosing our pharmacy institute as the ideal place to pursue your dreams and aspirations. I urge you to fully embrace this thrilling adventure with an open mindset and a strong desire for knowledge. We have a wide range of resources and opportunities available to enhance your learning experience. Our team is dedicated to providing support and guidance throughout your journey.`,
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
