import React, { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ onClose, title, children }) => {
  // Close lightbox on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Prevent clicks inside the modal content from closing the modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={handleContentClick}>
        <button className="lightbox-close-button" onClick={onClose}>
          &times; {/* HTML entity for a multiplication sign (looks like an 'x') */}
        </button>
        {title && <h2 className="lightbox-title">{title}</h2>}
        <div className="lightbox-body">
          {children} {/* Renders content passed as children prop */}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;