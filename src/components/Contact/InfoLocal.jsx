import React, { useState } from 'react';
import styles from '../../style';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import picture13 from '../../assets/contact/picture13.jpg';

const InfoLocal = () => {
	return (
		<section>
			<h1 className={`${styles.homeHeading} text-center`}>
				Skontaktuj się z nami
			</h1>

			<div
				className={`${styles.flexRowCol} ${styles.marginY} mx-10 xs:mx-0 justify-center`}>
				<div className={`${styles.marginX} ${styles.marginY2}`}>
					<div className='flex flex-row sm:flex-col md:flex-row'>
						<p className={`${styles.paragraph}`}>Sklep internetowy:</p>
						<Link
							to={'/shop'}
							className={`${styles.paragraph} text-yellow font-bold ml-1`}>
							Przejdź do sklepu
						</Link>
					</div>

					<div className={`${styles.paragraph} mt-5`}>
						<div className='flex flex-row sm:flex-col md:flex-row'>
							<p>Sklep stacjonarny: </p>
							<p className='ml-1'>Akacjowa 9, Radom</p>
						</div>
						<p className='mt-2'>
							Otwarty od poniedziałku do piątku 8 - 16 <br /> W soboty 9 - 13
						</p>
					</div>

					<div className={`${styles.paragraph} flex flex-row my-5`}>
						<AiOutlinePhone className='Phone' />
						<p>tel. 123-123-123</p>
					</div>

					<div className={`${styles.paragraph} flex flex-row`}>
						<HiOutlineMail className='Mail' />
						<a href='mailto:miodzio@miodzio.pl' className={`${styles.hover}`}>
							miodzio@miodzio.pl
						</a>
					</div>
				</div>
				<div className='flex justify-around'>
					<img
						src={picture13}
						alt='Pszczoły'
						className='rounded-[50px] h-[180px] xs:h-[250px] ss:h-[300px] mt-5 sm:mt-0'
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoLocal;
