import React from 'react';
import styles from '../../style';
import { Link } from 'react-router-dom';

const Sale = () => {
	return (
		<section className={` ${styles.marginX} flex justify-center`}>
			<div className={`${styles.flexRowCol} border-4 border-yellow rounded-[50px]`}>
			<div className=' mt-8 sm:mt-10 my-0 sm:my-10 md:my-12 mx-6 ss:mx-12'>
				<h2 className={`${styles.heading2}`}>Darmowa dostawa od 199 zł !</h2>
				<p className={`${styles.paragraph1}`}>
					*dotyczy zamówień na terenie Polski oraz formy płatności przedpłaty
				</p>
			</div>
			<div className=' my-8 ss:my-10 sm:my-16 md:my-20 lg:my-16 mx-6 ss:mx-10 text-center'>
				<Link
					to={'/shop'}
					className={`${styles.buttonStyle}`}>
					Sklep
				</Link>
			</div>
		</div>
		</section>
	);
};

export default Sale;
