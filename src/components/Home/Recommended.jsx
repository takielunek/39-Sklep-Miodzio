import React from 'react';
import picture3 from '../../assets/home/picture3.jpg';
import picture4 from '../../assets/home/picture4.jpg';
import picture5 from '../../assets/home/picture5.jpg';
import styles from '../../style';

const Recommended = () => {
	return (
		<section className={`${styles.marginY}`}>
			<h2 className={`${styles.heading2} text-center text-black mb-10`}>
				Sprawdź co polecają inni:
			</h2>
			<div className={` ${styles.marginX} ${styles.flexRowCol} gap-x-5`}>
				<div className='mb-10 xs:mb-20 sm:mb-0'>
					<img src={picture3} alt='Miód gryczany' className='rounded-[50px]' />
					<h3 className={`${styles.heading3} text-center py-4`}>
						Miód gryczany
					</h3>
					<ul className={`${styles.ulText}`}>
						<li>Zapach: korzenny</li>
						<li>Smak: korzenny</li>
					</ul>
					<div className='flex justify-end'>
						<a
							href='#'
							className={`${styles.buttonStyle} mr-10  mt-10`}
							role='button'>
							Czytaj więcej
						</a>
					</div>
				</div>
				<div className='mb-10 xs:mb-20 sm:mb-0'>
					<img src={picture4} alt='Miód lipowy' className='rounded-[50px]' />
					<h3 className={`${styles.heading3} text-center py-4`}>Miód lipowy</h3>
					<ul className={`${styles.ulText}`}>
						<li>Zapach: lipowy</li>
						<li>Smak: ziołowy</li>
					</ul>
					<div className='flex justify-end'>
						<a
							href='#'
							className={`${styles.buttonStyle} mr-10  mt-10`}
							role='button'>
							Czytaj więcej
						</a>
					</div>
				</div>
				<div>
					<img
						src={picture5}
						alt='Miód bławatkowy'
						className='rounded-[50px]'
					/>
					<h3 className={`${styles.heading3} text-center py-4`}>
						Miód bławatkowy
					</h3>
					<ul className={`${styles.ulText}`}>
						<li>Zapach: kwiatowy</li>
						<li>Smak: kwaskowaty</li>
					</ul>
					<div className='flex justify-end'>
						<a
							href='#'
							className={`${styles.buttonStyle} mr-10  mt-10`}
							role='button'>
							Czytaj więcej
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recommended;
