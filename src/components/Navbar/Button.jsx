import React from 'react';
import styles from '../../style';

const Button = () => {
	return (
		<section className={`${styles.navbar} border-2 border-yellow bg-yellow py-2 px-4 rounded-[50px] hidden md:flex ml-6 hover:bg-white transition delay-100`}>
			<button className='ml-3'>Zaloguj</button>
			<button className='border-2 border-yellow bg-white rounded-[50px] py-2 px-4 ml-3 hover:bg-yellow transition delay-100'>Zarejestruj</button>
		</section>
	);
};

export default Button;
