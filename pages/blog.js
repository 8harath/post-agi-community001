import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    // Fetch blog posts from an API or database
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.posts}>
          {currentPosts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className={styles.readMore}>Read More</a>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? styles.active : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
