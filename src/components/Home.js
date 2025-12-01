import React, { useState } from 'react';
// import { getFunctions, httpsCallable } from 'firebase/functions';
//import { app } from '../firebaseConfig';
import { Book, Calendar, FlaskConical, Headset} from 'lucide-react';

import './Home.css';

// Using a placeholder image since local paths (like "/herosectipuson-image-2.jpg") do not work in this environment.
const heroImage = "/herosection-image-2.jpg";

// Data for notifications and quick links
const notificationsData = [
  { id: 1, text: "Admissions 2025-26 are now open. Submit your enquiry today!" },
  { id: 2, text: "Orientation Program for new students starts on 10th August." },
  { id: 3, text: "Internal Exams for Semester III and V begin from 15th September." },
  { id: 4, text: "Anti-Ragging Week awareness campaign scheduled for 1st to 7th August." },
  { id: 5, text: "Research Seminar on \"Innovations in Pharma\" on 22nd July at 11:00 AM." },
];

const quickLinksData = [
  { id: 1, title: "Programs", description: "Explore our undergraduate and graduate programs", url: "#", icon: Book },
  { id: 2, title: "Academic Calendar", description: "Important dates and events for current students", url: "#", icon: Calendar },
  { id: 3, title: "Research", description: "Discover our innovative research projects", url: "#", icon: FlaskConical },
  { id: 4, title: "Anti-Ragging Helpline", description: "Call us for support and safety", url: "#", icon: Headset },
];

// Main Home component
const Home = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    fullName: '',
    hscPercentage: '',
    email: '', // Add email field for OTP
    contactNumber: ''
  });

  const [otp, setOtp] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //const functions = getFunctions(app);

  // Handle changes to the form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission and send OTP
  const handleSendAdmissionOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      //const sendAdmissionOtpFunction = httpsCallable(functions, 'sendAdmissionOtp');
     // await sendAdmissionOtpFunction({ formData });
      setMessage('OTP sent to your email. Please check your inbox.');
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Error sending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP verification and final data storage
  const handleVerifyAdmissionOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      //const verifyAdmissionOtpFunction = httpsCallable(functions, 'verifyAdmissionOtp');
      //await verifyAdmissionOtpFunction({ email: formData.email, otp });
      setMessage('Enquiry submitted successfully! We will contact you shortly.');
      // Clear form and close modal on success
      setFormData({ fullName: '', hscPercentage: '', email: '', contactNumber: '' });
      setOtp('');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Invalid or expired OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-text">
          <h2>
            Welcome To Sumatidevi Tompe <br /> Institute of Pharmaceutical Science and Research
          </h2>
          <p>
            Your journey towards a bright future in pharmaceutical science begins here.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-content-grid">
        {/* Left Column */}
        <div className="left-column">
          {/* Notifications Section */}
          <div className="notifications-section">
            <h3>Latest Notifications</h3>
            <ul>
              {notificationsData.map(notification => (
                <li key={notification.id}>{notification.text}</li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div className="quick-links-section">
            <h3>Quick Links</h3>
            <div className="quick-links-grid">
              {quickLinksData.map(link => (
                <a href={link.url} className="quick-link-box" key={link.id}>
                  <link.icon className="quick-link-icon" />
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Admission Enquiry Form */}
          <div className="admission-enquiry-form">
            <h2>Admission Enquiry Form</h2>
            <form onSubmit={handleSendAdmissionOtp}>
              <div className="form-group">
                <label htmlFor="full-name" className="visually-hidden">Full Name</label>
                <input type="text" id="full-name" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="hsc-percentage" className="visually-hidden">HSC Percentage</label>
                <input type="text" id="hsc-percentage" name="hscPercentage" value={formData.hscPercentage} onChange={handleInputChange} placeholder="e.g., 85.50%" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-number" className="visually-hidden">Contact Number</label>
                <input type="tel" id="contact-number" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="10-digit mobile number" required />
              </div>
              <div className="button-group">
                <button type="submit" className="submit-enquiry-btn" disabled={isLoading}>
                  {isLoading ? 'Sending OTP...' : 'Submit Enquiry'}
                </button>
                <a href="https://chat.whatsapp.com/KZkdOH1gmt85ekIh0pe6AJ?mode=ac_t" className="join-whatsapp-btn" target="_blank" rel="noopener noreferrer">Join WhatsApp Group</a>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <p>Name: Sangam Nimkar</p>
            <p>Email: stipsr.admission@gmail.com</p>
            <p>Phone: 8551954921</p>
            <p>Address: G.S.Tompe Educational Campus, Nanori Road, Chandur Bazar, Amravati 444704</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="otp-modal-overlay">
          <div className="otp-modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close-btn">&times;</button>
            <h3>Verify Your Email</h3>
            <p>An OTP has been sent to **{formData.email}**</p>
            {message && <p className="status-message">{message}</p>}
            <form onSubmit={handleVerifyAdmissionOtp}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                required
              />
              <button type="submit" className="verify-otp-btn" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

