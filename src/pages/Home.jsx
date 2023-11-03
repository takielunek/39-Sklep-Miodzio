import React from 'react';
import picture1 from '../assets/home/picture1.png';
import styles from '../style';
import Head from '../components/Home/Head';
import Recommended from '../components/Home/Recommended';
import Sale from '../components/Home/Sale';
import Info from '../components/Home/Info';
import ScrollButton from '../components/ScrollButton';

const Home = () => {
	return (
		<section className={`${styles.marginY}bg-white w-full`}>
			<Head />
			<Recommended />
			<Sale />
			<Info />
			<ScrollButton />
		</section>
	);
};

export default Home;
