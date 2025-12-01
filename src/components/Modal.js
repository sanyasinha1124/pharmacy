import React from 'react';
import './FacultyAuth.css'; // The modal styles are defined in this file

const Modal = ({ message, onClose, isError }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <p className={`modal-message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Modal;
