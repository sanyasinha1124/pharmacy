// src/components/Feedback.js
import React from 'react';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <p>
        Your feedback is valuable to us. It helps us to continuously improve our services and educational quality. Please use the form below or contact us directly to share your thoughts.
      </p>
      <form className="feedback-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" name="feedback" rows="6" required></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;