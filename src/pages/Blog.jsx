import React from 'react';
import styles from '../style';
import Posts from '../components/Blog/Posts';
import ScrollButton from '../components/ScrollButton';

const Blog = () => {
  return <section className={`${styles.marginY}bg-white w-full`}>
    <Posts />
    <Posts />
    <Posts />
    <ScrollButton />
  </section>;
};

export default Blog;
