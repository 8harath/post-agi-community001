import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={styles.navLink}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/forum">
            <a className={styles.navLink}>Forum</a>
          </Link>
        </li>
        <li>
          <Link href="/library">
            <a className={styles.navLink}>Polymath Library</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a className={styles.navLink}>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
