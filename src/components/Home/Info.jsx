import React from 'react';
import styles from '../../style';
import picture6 from '../../assets/home/picture6.jpg';
import picture7 from '../../assets/home/picture7.jpg';
import { Link } from 'react-router-dom';

const Info = () => {
	return (
		<section className={`${styles.marginY} ${styles.marginX}`}>
			<div className={`${styles.flexRowCol} ${styles.marginY}`}>
				<div>
					<img src={picture6} alt='Miód' className='rounded-[50px] ' />
				</div>
				<div className={`${styles.marginX2} ${styles.marginY2}`}>
					<h3 className={`${styles.heading3}`}>Dołącz do newslettera</h3>
					<h2 className={`${styles.heading2}`}>Miodzio</h2>
					<p className={`${styles.paragraph}`}>
						Tutaj pojawiają się informacje o nowych zbiorach miodu. Zapisz się i
						bądź na bieżąco!
					</p>
					<div className='flex justify-end'>
						<a
							href='#'
							className={`${styles.buttonStyle} mr-10  mt-10`}
							role='button'>
							Zapisz się
						</a>
					</div>{' '}
				</div>
			</div>
			<div className={`${styles.flexRowCol2} ${styles.marginY}`}>
				<div className={`${styles.marginX2} ${styles.marginY2}`}>
					<h3 className={`${styles.heading3}`}>Przeczytaj naszą historię</h3>
					<h2 className={`${styles.heading2}`}>Miód od pokoleń</h2>
					<p className={`${styles.paragraph}`}>
						Nasza pasieka przekazywana jest z pokolenia na pokolenie, a
						receptura pozostaje niezmienna od lat !
					</p>
					<div className='flex justify-end'>
						<Link
							to={'/blog'}
							className={`${styles.buttonStyle} mr-10  mt-10`}>
							Blog
						</Link>
					</div>
				</div>
				<div>
					<img src={picture7} alt='Pasieka' className='rounded-[50px] ' />
				</div>
			</div>
		</section>
	);
};

export default Info;
