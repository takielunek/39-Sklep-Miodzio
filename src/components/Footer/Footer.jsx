import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from '../../style';
import Socials from './Socials';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<section className='border-t-4 border-yellow'>
			<div className={`flex flex-col ss:flex-row ${styles.marginX} my-10 `}>
				<div className='flex flex-col mr-10 md:mr-40'>
					<Link to={'/'} className='flex flex-row'>
						<h1 className={`${styles.logo}`}>Miodzio</h1>
						<img
							src={logo}
							alt='logo'
							className='h-[30px] xs:h-[40px] ss:h-[50px]'
						/>
					</Link>
					<p className={`${styles.paragraph}`}>
						Miód powstaje we współpracy pszczół i ludzi...
					</p>
				</div>

				<div className={`${styles.flexRowCol1} justify-between w-full`}>
					<div className='mx-4 mt-5 md:mt-0'>
						<h3 className={`${styles.heading3}`}>Firma</h3>
						<div className={`${styles.paragraph} flex flex-col`}>
							<Link to={'/blog'} className={`${styles.hover}`}>
								Blog
							</Link>
							<Link to={'/contact'} className={`${styles.hover}`}>
								Kontakt
							</Link>
						</div>
					</div>
					<div className='mx-4 mt-5 md:mt-0'>
						<h3 className={`${styles.heading3}`}>Produkty</h3>
						<div className={`${styles.paragraph}`}>
							<Link to={'/shop'} className={`${styles.hover}`}>
								Lista produktów
							</Link>
						</div>
					</div>
					<div className='mx-4 mt-5 md:mt-0'>
						<h3 className={`${styles.heading3}`}>Sklep</h3>
						<div className={`${styles.paragraph} cursor-pointer`}>
							<p className={`${styles.hover}`}>Regulamin</p>
							<p className={`${styles.hover}`}>Dostawa i płatności</p>
							<p className={`${styles.hover}`}>FAQ</p>
						</div>
					</div>
					<div className='mx-4 mt-5 md:mt-0'>
						<h3 className={`${styles.heading3}`}>Kontakt</h3>
						<div className={`${styles.paragraph}`}>
							<p>Karolina Jesionek</p>
							<p>Akacjowa 9, Radom</p>
							<p className='mt-4'>tel. 123-123-123</p>
							<a href='mailto:miodzio@miodzio.pl' className={`${styles.hover}`}>
								miodzio@miodzio.pl
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='border-t-2 border-yellow'>
				<div
					className={`${styles.flexRowCol} ${styles.marginX} justify-between my-3`}>
					<p className={`${styles.paragraph}`}>
						Copyright &copy; {currentYear} Miodzio. Created by Karolina Jesionek
					</p>
					<p>
						<Socials />
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
