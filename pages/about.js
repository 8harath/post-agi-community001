import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.missionStatement}>
        <h1>Our Mission</h1>
        <p>
          We are a community of post-AGI enthusiasts, researchers, and polymaths dedicated to exploring the future of artificial general intelligence and its impact on society. Our mission is to foster intellectual stimulation, inclusivity, and futurism while ensuring accessibility and responsiveness.
        </p>
      </section>
      <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/team/member1.jpg" alt="Team Member 1" />
            <h3>Team Member 1</h3>
            <p>Role and brief bio of team member 1.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/team/member2.jpg" alt="Team Member 2" />
            <h3>Team Member 2</h3>
            <p>Role and brief bio of team member 2.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/team/member3.jpg" alt="Team Member 3" />
            <h3>Team Member 3</h3>
            <p>Role and brief bio of team member 3.</p>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: contact@postagi.com</p>
        <p>Follow us on social media:</p>
        <div className={styles.socialMediaLinks}>
          <a href="https://twitter.com/postagi" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/postagi" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/company/postagi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default About;
