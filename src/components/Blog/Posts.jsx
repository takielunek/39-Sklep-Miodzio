import React from 'react';
import styles from '../../style';
import picture7 from '../../assets/home/picture7.jpg';
import picture10 from '../../assets/blog/picture10.jpg';
import picture11 from '../../assets/blog/picture11.jpg';
import picture12 from '../../assets/blog/picture12.jpg';
import { Link } from 'react-router-dom';

const Posts = () => {
	return (
		<section>
			<h1 className={`${styles.homeHeading} text-center`}>
				Pszczoły, miód i te sprawy...
			</h1>

			<div className={`${styles.marginY} ${styles.marginX}`}>
				<div
					className={`${styles.flexRowCol2} ${styles.marginY} border-4 border-yellow rounded-[50px] p-8`}>
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
								Czytaj dalej...
							</Link>
						</div>
					</div>
					<div>
						<img src={picture7} alt='Pasieka' className='rounded-[50px] ' />
					</div>
				</div>

				<div
					className={`${styles.flexRowCol} ${styles.marginY} border-4 border-yellow rounded-[50px] p-8`}>
					<div>
						<img src={picture11} alt='Miód' className='rounded-[50px] ' />
					</div>
					<div className={`${styles.marginX2} ${styles.marginY2}`}>
						<h3 className={`${styles.heading3}`}>
							Czy miód jest wegański? A może wegetariański?
						</h3>
						<h2 className={`${styles.heading2}`}>Jak powstaje miód?</h2>
						<p className={`${styles.paragraph}`}>
							Miód pszczeli powstaje z soku roślin. Sok ten przetwarzają
							pszczoły i magazynują w postaci miodu.
						</p>
						<hr className='border-yellow' />
						<p>
							Przy ustaleniu, czy miód jest wegański czy wegetariański, musimy
							wziąć pod uwagę warunki utrzymywania pasieki i sposobu opieki nad
							pszczołami.{' '}
						</p>
						<div className='flex justify-end'>
							<a
								href='#'
								className={`${styles.buttonStyle} mr-10  mt-10`}
								role='button'>
								Czytaj dalej...
							</a>
						</div>
					</div>
				</div>

				<div
					className={`${styles.flexRowCol2} ${styles.marginY} border-4 border-yellow rounded-[50px] p-8`}>
					<div className={`${styles.marginX2} ${styles.marginY2}`}>
						<h3 className={`${styles.heading3}`}>
							Dlaczego niektóre miody są twarde a inne miękkie?
						</h3>
						<h2 className={`${styles.heading2}`}>Konsystencja miodów</h2>
						<p className={`${styles.paragraph}`}>
							Miody mogą różnić się między sobą konsystencją. Jedne są twarde i
							zbite, inne zaś miękkie lub ciągnące.
						</p>
						<div className='flex justify-end'>
							<Link
								to={'/blog'}
								className={`${styles.buttonStyle} mr-10  mt-10`}>
								Czytaj dalej...
							</Link>
						</div>
					</div>
					<div>
						<img src={picture12} alt='Pasieka' className='rounded-[50px] ' />
					</div>
				</div>

				<div
					className={`${styles.flexRowCol} ${styles.marginY} border-4 border-yellow rounded-[50px] p-8`}>
					<div>
						<img src={picture10} alt='Miód' className='rounded-[50px] ' />
					</div>
					<div className={`${styles.marginX2} ${styles.marginY2}`}>
						<h3 className={`${styles.heading3}`}>
							Odkryj właściwości zdrowotne pyłku pszczelego!
						</h3>
						<h2 className={`${styles.heading2}`}>Czym jest pyłek pszczeli?</h2>
						<p className={`${styles.paragraph}`}>
							Pyłek pszczeli wytwarzany jest z pyłku kwiatowego roślin.
						</p>
						<hr className='border-yellow' />
						<p>
							Właściwości pyłku pszczelego od lat doceniane są przez medycynę
							naturalną. W ziarnach pyłku wykazano zawartość około 250
							substancji!{' '}
						</p>
						<div className='flex justify-end'>
							<a
								href='#'
								className={`${styles.buttonStyle} mr-10  mt-10`}
								role='button'>
								Czytaj dalej...
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Posts;
