import React from 'react';
import '../App.css';

const SportsEvents = () => {
  // Sample data for sports events
  const sportsEvents = [
    {
      id: 1,
      title: "Annual Sports Meet: 'Josh'",
      date: "December 5-7, 2025",
      description: "A three-day sports extravaganza with competitions in cricket, football, volleyball, badminton, and various track and field events.",
      venue: "College Grounds",
      time: "All day"
    },
    {
      id: 2,
      title: "Inter-college Cricket Tournament",
      date: "November 12-14, 2025",
      description: "Our institute hosts a cricket tournament with teams from other colleges in the region. Come and cheer for our team!",
      venue: "College Grounds",
      time: "9:00 AM onwards"
    },
    {
      id: 3,
      title: "Table Tennis & Chess Championship",
      date: "October 18, 2025",
      description: "A day of indoor games for students. The event includes knockout rounds for table tennis and a chess championship.",
      venue: "Sports Complex",
      time: "10:00 AM onwards"
    }
  ];

  return (
    <div className="container">
      <h2 className="page-title">Sports Events</h2>
      {sportsEvents.length > 0 ? (
        <div className="events-list">
          {sportsEvents.map(event => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No sports events are scheduled at this time.</p>
      )}
    </div>
  );
};

export default SportsEvents;
