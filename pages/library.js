import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Library.module.css';

const Library = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch library resources from an API or database
    const fetchResources = async () => {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data);
    };

    fetchResources();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Polymath Library</h1>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <div className={styles.resources}>
          {filteredResources.map((resource) => (
            <div key={resource.id} className={styles.resource}>
              <h2 className={styles.resourceTitle}>{resource.title}</h2>
              <p className={styles.resourceDescription}>{resource.description}</p>
              <a href={resource.link} className={styles.resourceLink}>Learn More</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Library;
