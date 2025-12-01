import React, { useState } from 'react';
import './Infrastructure.css';

// IMPORTANT: Replace the 'src' values with paths to your actual images
// Make sure your images are in the public/images/infrastructure/ directory
// For example: public/images/infrastructure/lab1.jpg
const infrastructureImages = [
  // Using placeholder images for demonstration
  { id: 1, src: '/machine-room.png', alt: 'Machine Room' },
  { id: 2, src: '/Pharmaceutics-Lab.png', alt: 'Pharmaceutics Lab' },
  { id: 3, src: '/Pharmaceutical-Chemistry-Lab.png', alt: 'Pharmaceutical Chemistry Lab' },
  { id: 4, src: '/Pharmacology-Lab.png', alt: 'Pharmacology Lab' },
  { id: 5, src: '/Pharmacognosy-Lab.png', alt: 'Pharmacognosy Lab' },
  { id: 6, src: '/Pharmacy-Practice-Lab.png', alt: 'Pharmacy Practice Lab' },
  { id: 7, src: '/Girls’-common-room.png', alt: 'Girls common room' },
  { id: 8, src: '/Boys’-common-room.png', alt: 'Boys common room' },
  { id: 9, src: '/seminar-hall.png', alt: 'Seminar Hall' },
  { id: 10, src: '/class-rooms.png', alt: 'Class rooms' },
  { id: 11, src: '/library-infra.png', alt: 'Library ' },
  { id: 12, src: '/computer-lab.png', alt: 'Computer lab' },
  { id: 13, src: '/modern-pharmacy.png', alt: 'Modern Pharmacy' },
  { id: 14, src: '/medicinal-garder.png', alt: 'Medicinal Garden ' },
  { id: 15, src: '/seminar-hall.png', alt: 'Seminar Hall' },
];

const Infrastructure = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Opens the lightbox with the selected image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Closes the lightbox and restores scrolling
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Displays the next image in the lightbox
  const showNextImage = (e) => {
    e.stopPropagation(); // Prevents the lightbox from closing when clicking the button
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % infrastructureImages.length
    );
  };

  // Displays the previous image in the lightbox
  const showPrevImage = (e) => {
    e.stopPropagation(); // Prevents the lightbox from closing when clicking the button
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + infrastructureImages.length) % infrastructureImages.length
    );
  };

  return (
    <div className="infrastructure-container">
      <h2>Infrastructure</h2>
      <p>
        Our institute boasts state-of-the-art infrastructure designed to provide a conducive environment
        for learning, research, and overall development. From modern laboratories to a well-equipped library,
        we ensure that students have access to all necessary resources.
      </p>

      <section className="image-gallery">
        <h3>Our Facilities in Pictures</h3>
        <div className="gallery-grid">
          {infrastructureImages.map((image, index) => (
            // The onClick handler is now on the image container itself.
            // There is no longer a separate overlay with a "View" button.
            <div key={image.id} className="gallery-item" onClick={() => openLightbox(index)}>
              <img src={image.src} alt={image.alt} />
              {/* Display the image title below the thumbnail */}
              <div className="image-title">{image.alt}</div>
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
            <button className="prev-btn" onClick={showPrevImage}>&#10094;</button>
            <img
              src={infrastructureImages[currentImageIndex].src}
              alt={infrastructureImages[currentImageIndex].alt}
              className="lightbox-image"
            />
            <button className="next-btn" onClick={showNextImage}>&#10095;</button>
            <div className="image-caption">
              {infrastructureImages[currentImageIndex].alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infrastructure;
