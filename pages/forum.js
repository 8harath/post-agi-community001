import React from 'react';
import ForumSidebar from '../components/ForumSidebar';
import styles from '../styles/Forum.module.css';

const Forum = () => {
  return (
    <div className={styles.container}>
      <ForumSidebar />
      <div className={styles.content}>
        <h1>Discussion Forum</h1>
        <div className={styles.subcategories}>
          <div className={styles.subcategory}>
            <h2>Ethical Frameworks</h2>
            <p>Discuss the ethical implications and frameworks for AGI.</p>
          </div>
          <div className={styles.subcategory}>
            <h2>AGI Governance</h2>
            <p>Explore governance models and policies for AGI.</p>
          </div>
          <div className={styles.subcategory}>
            <h2>Post-Scarcity Economics</h2>
            <p>Debate economic models in a post-scarcity world.</p>
          </div>
        </div>
        <div className={styles.threads}>
          <div className={styles.thread}>
            <h3>Thread Title 1</h3>
            <p>Thread preview text...</p>
            <div className={styles.threadInfo}>
              <span>Replies: 10</span>
              <span>Upvotes: 5</span>
            </div>
          </div>
          <div className={styles.thread}>
            <h3>Thread Title 2</h3>
            <p>Thread preview text...</p>
            <div className={styles.threadInfo}>
              <span>Replies: 8</span>
              <span>Upvotes: 3</span>
            </div>
          </div>
          <div className={styles.thread}>
            <h3>Thread Title 3</h3>
            <p>Thread preview text...</p>
            <div className={styles.threadInfo}>
              <span>Replies: 15</span>
              <span>Upvotes: 7</span>
            </div>
          </div>
        </div>
        <button className={styles.newThreadButton}>New Thread</button>
      </div>
    </div>
  );
};

export default Forum;
