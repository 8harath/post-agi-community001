import React from 'react';
import Link from 'next/link';
import styles from '../styles/ForumSidebar.module.css';

const ForumSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Quick Links</h2>
      <ul>
        <li>
          <Link href="/library">
            <a className={styles.link}>Polymath Library</a>
          </Link>
        </li>
        <li>
          <Link href="/timeline">
            <a className={styles.link}>AGI Timeline</a>
          </Link>
        </li>
        <li>
          <Link href="/chat">
            <a className={styles.link}>Live Chat</a>
          </Link>
        </li>
      </ul>
      <button className={styles.newThreadButton}>New Thread</button>
    </div>
  );
};

export default ForumSidebar;
