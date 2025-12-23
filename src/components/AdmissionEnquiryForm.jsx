// import { useState } from "react";

// const AdmissionEnquiryForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     hscPercentage: "",
//     email: "",
//     contactNumber: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/admission-enquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Enquiry submitted successfully!");
//         setFormData({
//           fullName: "",
//           hscPercentage: "",
//           email: "",
//           contactNumber: "",
//         });
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       alert("Server error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="right-column">
//       <div className="admission-enquiry-form">
//         <h2>Admission Enquiry Form</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             placeholder="Full Name"
//             required
//           />
//           <input
//             name="hscPercentage"
//             value={formData.hscPercentage}
//             onChange={handleInputChange}
//             placeholder="HSC %"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             required
//           />
//           <input
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleInputChange}
//             placeholder="Mobile Number"
//             required
//           />

//           <button disabled={isLoading}>
//             {isLoading ? "Sending..." : "Submit Enquiry"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdmissionEnquiryForm;

import React, { useState } from "react";

const AdmissionEnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    hscPercentage: "",
    email: "",
    contactNumber: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendAdmissionOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry submitted successfully");
        setFormData({
          fullName: "",
          hscPercentage: "",
          email: "",
          contactNumber: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="right-column">
      <div className="admission-enquiry-form">
        <h2>Admission Enquiry Form</h2>

        <form onSubmit={handleSendAdmissionOtp}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="hscPercentage"
              value={formData.hscPercentage}
              onChange={handleInputChange}
              placeholder="e.g., 85.50%"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="10-digit mobile number"
              required
            />
          </div>

          <div className="button-group">
            <button
              type="submit"
              className="submit-enquiry-btn"
              disabled={isLoading}
            >
              {isLoading ? "Sending OTP..." : "Submit Enquiry"}
            </button>

            <a
              href="https://chat.whatsapp.com/KZkdOH1gmt85ekIh0pe6AJ?mode=ac_t"
              className="join-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join WhatsApp Group
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionEnquiryForm;
