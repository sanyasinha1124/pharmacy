import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/gallery/campus1.jpg', alt: 'Campus View 1', category: 'campus' },
    { id: 2, src: '/images/gallery/lab1.jpg', alt: 'Chemistry Lab', category: 'labs' },
    { id: 3, src: '/images/gallery/event1.jpg', alt: 'Annual Fest', category: 'events' },
    { id: 4, src: '/images/gallery/library1.jpg', alt: 'Central Library', category: 'campus' },
    { id: 5, src: '/images/gallery/lab2.jpg', alt: 'Pharmacology Lab', category: 'labs' },
    { id: 6, src: '/images/gallery/sports1.jpg', alt: 'Sports Day', category: 'events' },
    { id: 7, src: '/images/gallery/classroom1.jpg', alt: 'Modern Classroom', category: 'campus' },
    { id: 8, src: '/images/gallery/auditorium1.jpg', alt: 'Auditorium', category: 'campus' },
  ];

  const [filter, setFilter] = useState('all'); // State for image filter

  const filteredImages = images.filter(image => 
    filter === 'all' ? true : image.category === filter
  );

  return (
    <div className="gallery-page page-content-container">
      <h2>Our Photo Gallery</h2>
      <p>Explore our campus life, state-of-the-art facilities, and vibrant events through our photo gallery. Witness the infrastructure and atmosphere that make our institute a unique place for learning and growth.</p>

      <div className="gallery-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'campus' ? 'active' : ''} 
          onClick={() => setFilter('campus')}
        >
          Campus
        </button>
        <button 
          className={filter === 'labs' ? 'active' : ''} 
          onClick={() => setFilter('labs')}
        >
          Labs
        </button>
        <button 
          className={filter === 'events' ? 'active' : ''} 
          onClick={() => setFilter('events')}
        >
          Events
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="image-caption">{image.alt}</div>
            </div>
          ))
        ) : (
          <p className="no-images">No images found for this category.</p>
        )}
      </div>

      <section className="gallery-note">
        <h3>A Glimpse Into Our World</h3>
        <p>Our gallery showcases the dynamic environment and rich experiences at Sumatidevi Tompe Institute. We encourage you to visit our campus for a firsthand look!</p>
      </section>
    </div>
  );
};

export default Gallery;