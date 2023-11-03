import React from 'react';
import styles from '../style';
import InfoLocal from '../components/Contact/InfoLocal';
import ScrollButton from '../components/ScrollButton';

const Contact = () => {
  return <section className={`${styles.marginY}bg-white w-full`}>
    <InfoLocal />
    <ScrollButton />
  </section>;
};

export default Contact;
