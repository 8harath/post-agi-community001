import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Events.module.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from an API or database
    const fetchEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Upcoming Events</h1>
        <div className={styles.calendar}>
          {events.map((event) => (
            <div key={event.id} className={styles.event}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDate}>{new Date(event.date).toLocaleDateString()}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
