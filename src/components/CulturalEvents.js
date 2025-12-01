import React, { useState } from 'react';

const CulturalEvents = () => {
    const [selectedImages, setSelectedImages] = useState(null);

    const culturalEvents = [
        // 2024-2025 Academic Year (15 events)
        {
            id: 1,
            title: "Savitribai Phule Jayanti",
            date: "January 01, 2025",
            description: "An homage to Savitribai Phule, a trailblazing social reformer and poet who is widely regarded as India's first female teacher. This day celebrates her pioneering efforts in women's education and her fight against social discrimination.",
            time: "10:00 AM onwards",
            imageUrl: "../savitribai-phule-img.jpg",
            images: [
                "/Savitribai Phule Jayanti 02-01-25_page-0001.jpg",
                "/Savitribai Phule Jayanti 02-01-25_page-0002.jpg",
                "/Savitribai Phule Jayanti 02-01-25_page-0003.jpg"
            ]
        },
        {
            id: 2,
            title: "Swami Vivekanand & Mata Jijau Jayanti",
            date: "January 13, 2025",
            description: "A joint celebration honoring Swami Vivekananda, the spiritual leader known for his inspiring lectures on self-empowerment and nationalism, and Mata Jijabai, the mother of Chhatrapati Shivaji Maharaj, revered for her strength and guidance.",
            time: "11:00 AM onwards",
            imageUrl: "../swami-jijamata-image.jpg",
            images: [
                "/Swami Vivekanand & Mata Jijau jayanti 13-01-25_page-0001.jpg",
                "/Swami Vivekanand & Mata Jijau jayanti 13-01-25_page-0002.jpg",
                "/Swami Vivekanand & Mata Jijau jayanti 13-01-25_page-0003.jpg"
            ]
        },
        {
            id: 3,
            title: "Field visit: at PHC Chandur",
            date: "January 14, 2025",
            description: "An educational field visit for students to the Primary Health Centre (PHC) in Chandur to gain practical knowledge and direct exposure to community health services, public healthcare practices, and rural medical operations.",
            time: "5:00 PM onwards",
            imageUrl: "../visit-phc-img.jpg",
            images: [
                "/Field Visit at PHC Chandur 16-01-25_page-0001.jpg",
                "/Field Visit at PHC Chandur 16-01-25_page-0002.jpg",
                "/Field Visit at PHC Chandur 16-01-25_page-0003.jpg",
                "/Field Visit at PHC Chandur 16-01-25_page-0004.jpg"
            ]
        },
        {
            id: 4,
            title: "Field visit at Garbage Treatment",
            date: "January 14, 2025",
            description: "Students visit a local garbage treatment plant to learn about sustainable waste management, recycling processes, and the environmental impact of waste disposal. The visit aims to raise awareness about environmental science and social responsibility.",
            time: "All day",
            imageUrl: "../garbage-tretament-plant-img.jpg",
            images: [
                "/Field Visit at Garbage Treatment Plant 11-04-25_page-0001.jpg",
                "/Field Visit at Garbage Treatment Plant 11-04-25_page-0002.jpg",
                "/Field Visit at Garbage Treatment Plant 11-04-25_page-0003.jpg",
                "/Field Visit at Garbage Treatment Plant 11-04-25_page-0004.jpg"
            ]
        },
        {
            id: 5,
            title: "Republic Day",
            date: "January 15, 2025",
            description: "A patriotic celebration of India's Republic Day, commemorating the date the Constitution of India came into effect. The event includes a flag-hoisting ceremony, a parade by students, and cultural performances showcasing national pride.",
            time: "2:00 PM onwards",
            imageUrl: "../republic-day-img.jpg",
            images: [
                "/Republic Day 26-01-25_page-0001.jpg",
                "/Republic Day 26-01-25_page-0002.jpg",
                "/Republic Day 26-01-25_page-0003.jpg"
            ]
        },
        {
            id: 6,
            title: "Netaji Subhas Chandra Bose's Jayanti",
            date: "January 22, 2025",
            description: "A tribute to Netaji Subhas Chandra Bose, one of India's most prominent freedom fighters. The day, also known as 'Parakram Diwas' (Day of Valour), honors his immense contribution to the Indian independence movement and his unwavering patriotism.",
            time: "3:00 PM onwards",
            imageUrl: "../subhash-chandra-img.jpg",
            images: [
                "/Netaji Subhash Chandra Bose Jayanti 22-01-25_page-0001.jpg",
                "/Netaji Subhash Chandra Bose Jayanti 22-01-25_page-0002.jpg",
                "/Netaji Subhash Chandra Bose Jayanti 22-01-25_page-0003.jpg"
            ]
        },
        {
            id: 7,
            title: "Blood Donation Camp",
            date: "February 08, 2025",
            description: "A community-focused event where students and staff can voluntarily donate blood to help those in need. The camp is organized in collaboration with local health organizations to promote a spirit of service and social responsibility.",
            time: "7:00 PM onwards",
            imageUrl: "../blood-dono-img.jpg",
            images: [
                "/Blood Donation Camp 10-02-25_page-0001.jpg",
                "/Blood Donation Camp 10-02-25_page-0002.jpg",
                "/Blood Donation Camp 10-02-25_page-0003.jpg",
                "/Blood Donation Camp 10-02-25_page-0004.jpg",
            ]
        },
        {
            id: 8,
            title: "Chhatrapati Shivaji Maharaj Jayanti",
            date: "February 18, 2025",
            description: "Commemorating the birth of the founder of the Maratha Empire, Chhatrapati Shivaji Maharaj. The event celebrates his legacy as a courageous warrior, a strategic leader, and a just ruler who championed Swaraj (self-rule).",
            time: "10:00 AM onwards",
            imageUrl: "../shivaji-maharaj-img.jpg",
            images: [
                "/Chhatrapati Shivaji Maharaj Jayanti 19-02-25_page-0001.jpg",
                "/Chhatrapati Shivaji Maharaj Jayanti 19-02-25_page-0002.jpg",
                "/Chhatrapati Shivaji Maharaj Jayanti 19-02-25_page-0003.jpg"
            ]
        },
        {
            id: 9,
            title: "Sant Gadge Maharaj Jayanti",
            date: "February 24, 2025",
            description: "A celebration of the life and teachings of Sant Gadge Maharaj, a revered social reformer and saint. He is remembered for his work in sanitation, social awakening, and his simple, yet profound, messages delivered through 'kirtans' (spiritual discourses).",
            time: "11:00 AM onwards",
            imageUrl: "../sant-gadge-img.jpg",
            images: [
                "/Sant Gadge Maharaj Jayanti 24-02-25_page-0001.jpg",
                "/Sant Gadge Maharaj Jayanti 24-02-25_page-0002.jpg"
            ]
        },
        {
            id: 10,
            title: "Field visit at Genom Biotech PVT.LTD",
            date: "March 27, 2025",
            description: "A field visit to Genom Biotech to provide students with a real-world perspective on the biotechnology industry. Students will observe laboratory operations, learn about career paths, and understand the application of their academic knowledge.",
            time: "9:00 AM onwards",
            imageUrl: "https://placehold.co/400x250/006400/FFFFFF?text=Field+Visit",
            images: [
                "/Field Visit Genom Biotech Pvt Ltd. 27-03-25_page-0001.jpg",
                "/Field Visit Genom Biotech Pvt Ltd. 27-03-25_page-0002.jpg",
                "/Field Visit Genom Biotech Pvt Ltd. 27-03-25_page-0003.jpg",
                "/Field Visit Genom Biotech Pvt Ltd. 27-03-25_page-0004.jpg"
            ]
        },
        {
            id: 11,
            title: "Field visit at Residential School",
            date: "April 03, 2025",
            description: "Students visit a residential school to engage with the younger students, participate in joint activities, and gain insights into a different educational environment. This visit promotes community engagement and mentorship.",
            time: "10:30 AM onwards",
            imageUrl: "../visit-rresidetial-img.jpg",
            images: [
                "/Field Visit Residential School 04-04-25_page-0001.jpg",
                "/Field Visit Residential School 04-04-25_page-0002.jpg",
                "/Field Visit Residential School 04-04-25_page-0003.jpg",
                "/Field Visit Residential School 04-04-25_page-0004.jpg"
            ]
        },
        {
            id: 12,
            title: "Mahatma Jyotiba Phule Jayanti",
            date: "April 09, 2025",
            description: "Celebrating the birth anniversary of Mahatma Jyotiba Phule, a prominent social activist, thinker, and anti-caste social reformer. The day honors his relentless work for the upliftment of women and oppressed castes through education.",
            time: "12:00 PM onwards",
            imageUrl: "../jyotiba-phule-img.jpg",
            images: [
                "/Mahatma Jyotiba Phule Jayanti 09-04-25_page-0001.jpg",
                "/Mahatma Jyotiba Phule Jayanti 09-04-25_page-0002.jpg",
                "/Mahatma Jyotiba Phule Jayanti 09-04-25_page-0003.jpg"
            ]
        },
        {
            id: 13,
            title: "Guest lecture",
            date: "February 3, 2025",
            description: "We are privileged to host a guest lecture. The event offers a unique opportunity to gain insights from a leading professional and engage in a thought-provoking discussion",
            time: "2:00 PM onwards",
            imageUrl: "../guest-lec-img.jpg",
            images: [
                "/guest lecture-docu_page-0001.jpg",
                "/guest lecture-docu_page-0002.jpg",
                "/guest lecture-docu_page-0003.jpg",
                "/guest lecture-docu_page-0004.jpg",
                "/guest lecture-docu_page-0005.jpg",
                "/guest lecture-docu_page-0006.jpg"
            ]
        },
        {
            id: 22,
            title: "Yoga Day",
            date: "june 06, 2025",
            description: "A day to celebrate health and wellness through yoga, promoting a balanced mind and body",
            time: "9:00 AM - 5:00 PM",
            imageUrl: "../yoga-day-img.jpg",
            images: [
                "/yoga-doc_page-0001.jpg",
                "/yoga-doc_page-0002.jpg",
                "/Yoga Day - Copy.jpg",
            ]
        },
        {
            id: 23,
            title: "Herbal Garden Visit",
            date: "january 14, 2025",
            description: "An educational trip to a local herbal garden to learn about medicinal plants and biodiversity",
            time: "6:00 PM onwards",
            imageUrl: "../herbal-garden-visit-image.jpg",
            images: [
                "/herbal-garden-visit_page-0001.jpg",
                "/herbal-garden-visit_page-0002.jpg",
                "/herbal-garden-visit_page-0003.jpg",
                "/herbal-garden-visit_page-0004.jpg"
                
            ]
            
        },
        
        // 2025-2026 Academic Year (8 events)
        {
            id: 14,
            title: "Sant Namdev Maharaj punyatithi",
            date: "July 21, 2025",
            description: "A tribute to Sant Namdev Maharaj, a revered poet and saint from the Varkari tradition of Maharashtra. His teachings and devotional poetry (Abhangas) continue to inspire people with messages of love, equality, and devotion.",
            time: "All day",
            imageUrl: "../sant-namdev-img.jpg",
            images: [
                "/Sant Namdev Maharaj Punyatithi 22-07-25_page-0001.jpg",
                "/Sant Namdev Maharaj Punyatithi 22-07-25_page-0002.jpg",
                "/Sant Namdev Maharaj Punyatithi 22-07-25_page-0003.jpg"
            ]
        },
        {
            id: 15,
            title: "Lokmanya Tilak & Chandrashekhar Azad Jayanti",
            date: "July 22, 2025",
            description: "A day to honor two great freedom fighters: Lokmanya Tilak, a nationalist leader known for his slogan 'Swaraj is my birthright', and Chandrashekhar Azad, a revolutionary who fought bravely for India's independence.",
            time: "6:00 PM onwards",
            imageUrl: "https://placehold.co/400x250/FFA500/FFFFFF?text=Tilak+%26+Azad",
            images: [
                "/Lokmanya Tilak & Chandrashekhar Azad Jayanti 23-07-25_page-0001.jpg",
                "/Lokmanya Tilak & Chandrashekhar Azad Jayanti 23-07-25_page-0002.jpg"
            ]
        },
        {
            
         id: 16,
         title: "Teachers Day",
         date: "september 03, 2025",
         description: "A special ceremony dedicated to honoring the faculty for their dedication and profound impact on our students' academic and personal growth. Includes student performances and tributes.", // REVISED
         time: "4:00 PM onwards",
         imageUrl: "../teachres-day.jpg",
         images: [
        "/teachers day_page-0001.jpg",
        "/teachers day_page-0002.jpg",
        "/teachers day_page-0003.jpg"
    ]
},
{
    id: 17,
    title: "Pharmacist Day",
    date: "september 25, 2025",
    description: "An observance celebrating the vital role of pharmacists in healthcare. Includes expert lectures, career guidance sessions, and a pledge ceremony for future pharmacists.", // REVISED
    time: "12:00 PM onwards",
    imageUrl: "../pha-img.jpg",
    images: [
        "/Pharmacist Day 25-09-25_page-0001.jpg",
        "/Pharmacist Day 25-09-25_page-0002.jpg",
        "/Pharmacist Day 25-09-25_page-0003.jpg",
        "/Pharmacist Day 25-09-25_page-0004.jpg",
        "/Pharmacist Day 25-09-25_page-0005.jpg",
        "/Pharmacist Day 25-09-25_page-0006.jpg",
        "/Pharmacist Day 25-09-25_page-0007.jpg",
        "/Pharmacist Day 25-09-25_page-0008.jpg"
    ]
},
{
    id: 18,
    title: "Mahatma Gandhi Jayanti",
    date: "october 10, 2025",
    description: "A solemn commemoration of Mahatma Gandhi's birthday, featuring discussions on his principles of non-violence and social responsibility, followed by community service initiatives.", // REVISED
    time: "11:00 AM onwards",
    imageUrl: "../gandhi-img.jpg",
    images: [
        "/Mahatma Gandhi Jayanti 02-10-25_page-0001.jpg",
        "/Mahatma Gandhi Jayanti 02-10-25_page-0002.jpg",
        "/Mahatma Gandhi Jayanti 02-10-25_page-0003.jpg"
    ]
},
    
        {
            id: 19,
            title: "Film Festival: 'Cinephilia'",
            date: "April 18-20, 2026",
            description: "A showcase of student-made short films and documentaries. The festival concludes with an awards ceremony for the best films across different categories.",
            time: "All day",
            imageUrl: "https://placehold.co/400x250/FF4500/FFFFFF?text=Film+Fest",
            images: [
                "/Film Festival-1.jpg",
                "/Film Festival-2.jpg"
            ]
        },
        {
            id: 20,
            title: "Stand-Up Comedy Night",
            date: "February 28, 2026",
            description: "An evening of laughter featuring both student comedians and a professional stand-up artist. A perfect way to de-stress before the end of the semester.",
            time: "7:30 PM onwards",
            imageUrl: "https://placehold.co/400x250/4B0082/FFFFFF?text=Comedy+Night",
            images: [
                "/Stand-Up Comedy Night-1.jpg",
                "/Stand-Up Comedy Night-2.jpg"
            ]
        },
        {
            id: 21,
            title: "Art Exhibition: 'Canvas & Clay'",
            date: "March 20-22, 2026",
            description: "An exhibition showcasing a diverse range of artistic creations from our students, including paintings, sculptures, and digital art. All students are welcome to submit their work.",
            time: "10:00 AM - 5:00 PM",
            imageUrl: "https://placehold.co/400x250/CD7F32/FFFFFF?text=Art+Exhibition",
            images: [
                "/Art Exhibition-1.jpg",
                "/Art Exhibition-2.jpg"
            ]
        }
    ];

    const openImageViewer = (imageUrls) => {
        setSelectedImages(imageUrls);
    };

    const closeImageViewer = () => {
        setSelectedImages(null);
    };

    const events2024 = culturalEvents.filter(event => (
        (event.id >= 1 && event.id <= 13) || (event.id >= 22 && event.id <= 23)
    ));
    const events2025 = culturalEvents.filter(event => (
        event.id >= 14 && event.id <= 21
    ));

    return (
        <div className="container">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

                :root {
                    --primary-color: #343a40;
                    --secondary-color: #CD7F32;
                    --accent-color: #CD7F32;
                    --bg-color-light: #F8F9FA;
                    --text-color-dark: #212529;
                    --text-color-light: #6c757d;
                    --text-color-white: #ffffff;
                    --line-color: #a08c5c; /* Added consistent line color */
                    --link-hover-color: #a7692c;
                    --font-family-poppins: 'Poppins', sans-serif;
                    --font-family-sans: Arial, sans-serif;
                    --spacing-sm: 1rem;
                    --spacing-md: 2rem;
                    --spacing-lg: 3rem;
                    --container-max-width: 1200px;
                    --box-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
                    --box-shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);
                    --box-shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.2);
                    --border-radius: 12px;
                }

                body {
                    font-family: var(--font-family-poppins);
                    margin: 0;
                    padding: 0;
                    background-color: var(--bg-color-light);
                    color: var(--text-color-dark);
                }

                .container {
                    max-width: var(--container-max-width);
                    margin: var(--spacing-md) auto;
                    padding: var(--spacing-lg);
                    background-color: var(--text-color-white);
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-md);
                    line-height: 1.8;
                }

                .page-title {
                    color: #004d40;
                    font-size: clamp(2rem, 5vw, 2.5rem);
                    margin-bottom: 30px; /* Adjusted margin for the new line */
                    text-align: center;
                    position: relative;
                }

                .page-title::after {
                    content: '';
                    width: 100%;
                    height: 4px;
                    background-color: var(--line-color);
                    position: absolute;
                    bottom: -15px;
                    left: 0;
                    border-radius: 2px;
                }
                
                .academic-year-title {
                    font-size: 2rem;
                    color: #ba965a;
                    margin-top: 2rem;
                    margin-bottom: 30px; /* Adjusted margin for the new line */
                    position: relative;
                    border-bottom: none; /* Removed the old border */
                    padding-bottom: 0; /* Removed the old padding */
                }

                .academic-year-title::after {
                    content: '';
                    width: 100%;
                    height: 4px;
                    background-color: var(--line-color);
                    position: absolute;
                    bottom: -15px;
                    left: 0;
                    border-radius: 2px;
                }

                .events-grid {
                    display: grid;
                    gap: var(--spacing-md);
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                }

                .event-card {
                    background-color: var(--bg-color-light);
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-md);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .event-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .event-card-image img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    display: block;
                }

                .event-card-content {
                    padding: var(--spacing-sm);
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .event-card-title {
                    color: var(--primary-color);
                    font-size: 1.5rem;
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }

                .event-card-date-time {
                    color: var(--text-color-light);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                }
                
                .event-card-date-time i,
                .event-card-venue i {
                    margin-right: 5px;
                    color: var(--accent-color);
                }

                .event-card-description {
                    font-size: 1rem;
                    line-height: 1.5;
                    color: var(--text-color-dark);
                    flex-grow: 1;
                }

                .view-button {
                    background-color: var(--primary-color);
                    color: var(--text-color-white);
                    padding: 10px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 500;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    white-space: nowrap;
                    border: none;
                    cursor: pointer;
                    margin-top: 1rem;
                    width: 100%;
                    text-align: center;
                }

                .view-button:hover {
                    background-color: var(--secondary-color);
                    transform: translateY(-2px);
                }

                /* Modal and Image Gallery Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.85);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    backdrop-filter: blur(5px);
                    transition: opacity 0.3s ease-in-out;
                }
                
                .modal-content {
                    background-color: var(--text-color-dark);
                    padding: 1.5rem;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-lg);
                    width: 95vw;
                    max-width: 900px;
                    max-height: 95vh;
                    overflow-y: auto;
                    position: relative;
                    text-align: center;
                    animation: fadeIn 0.3s ease-in-out;
                }
                
                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 2.5rem;
                    cursor: pointer;
                    color: var(--text-color-white);
                    transition: color 0.2s ease;
                    z-index: 1001;
                }

                .close-button:hover {
                    color: var(--secondary-color);
                }

                .image-gallery {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .gallery-image {
                    width: 100%;
                    height: auto;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow-md);
                    transition: transform 0.3s ease;
                }

                .gallery-image:hover {
                    transform: scale(1.02);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }

                @media (max-width: 992px) {
                    .main-nav ul {
                        flex-direction: column;
                        align-items: center;
                        border-radius: 0;
                    }
                    .main-nav li a {
                        width: 100%;
                        text-align: center;
                        border-bottom: 1px solid var(--link-hover-color);
                    }
                    .main-nav li:last-child a {
                        border-bottom: none;
                    }

                    .main-content-grid {
                        flex-direction: column;
                        padding: 0 1.5rem;
                    }
                }
                `}
            </style>

            <h1 className="page-title">Cultural Events</h1>

            <h2 className="academic-year-title">2025-2026 Academic Year</h2>
            <div className="events-grid">
                {events2025.map(event => (
                    <div key={event.id} className="event-card">
                        <div className="event-card-image">
                            <img src={event.imageUrl} alt={event.title} />
                        </div>
                        <div className="event-card-content">
                            <h3 className="event-card-title">{event.title}</h3>
                            <p className="event-card-date-time">
                                <i className="far fa-calendar-alt"></i> {event.date}
                                <i className="far fa-clock" style={{ marginLeft: '10px' }}></i> {event.time}
                            </p>
                            <p className="event-card-description">{event.description}</p>
                            <button onClick={() => openImageViewer(event.images)} className="view-button">
                                View Details (Images)
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="academic-year-title">2024-2025 Academic Year</h2>
            <div className="events-grid">
                {events2024.map(event => (
                    <div key={event.id} className="event-card">
                        <div className="event-card-image">
                            <img src={event.imageUrl} alt={event.title} />
                        </div>
                        <div className="event-card-content">
                            <h3 className="event-card-title">{event.title}</h3>
                            <p className="event-card-date-time">
                                <i className="far fa-calendar-alt"></i> {event.date}
                                <i className="far fa-clock" style={{ marginLeft: '10px' }}></i> {event.time}
                            </p>
                            <p className="event-card-description">{event.description}</p>
                            <button onClick={() => openImageViewer(event.images)} className="view-button">
                                View Details (Images)
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImages && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeImageViewer}>&times;</button>
                        <div className="image-gallery">
                            {selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    className="gallery-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CulturalEvents;