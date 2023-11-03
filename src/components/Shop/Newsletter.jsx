import React from 'react';
import styles from '../../style';

const Newsletter = () => {
	return (
		<section
			className={`${styles.marginY} ${styles.marginX} flex justify-around`}>
			<div className={`${styles.productsBorder}`}>
				<div className='mx-10 my-8'>
					<h2 className={`${styles.heading2}`}>Dołącz do newslettera</h2>
					<h3 className={`${styles.heading3}`}>
						Tutaj pojawiają się informacje o nowych zbiorach miodu. Zapisz się i
						bądź na bieżąco!
					</h3>
					<div className={`${styles.flexRowCol} my-8`}>
						<div className='flex flex-col'>
							<label htmlFor='Imię' className={`${styles.heading4} ml-4`}>
								Imię
							</label>
							<input
								type='text'
								id='Imię'
								className={`${styles.inputStyle} mr-0 sm:mr-10 pl-4 outline-none`}
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='Email' className={`${styles.heading4} ml-4`}>
								Email
							</label>
							<input
								type='text'
								id='Email'
								className={`${styles.inputStyle} mr-0 sm:mr-10 pl-4 outline-none`}
							/>
						</div>

						<a href='#' className={`${styles.buttonStyle} mt-7 text-center`} role='button'>
							Zapisz się
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
