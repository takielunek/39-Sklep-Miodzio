import React from 'react';
import styles from '../../style';
import picture1 from '../../assets/home/picture1.png';

const Head = () => {
	return (
		<section>
			<div className={` ${styles.marginX} ${styles.flexRowCol}`}>
				<h1
					className={`${styles.homeHeading} mt-0 ss:mt-10 md:mt-20 mb-5 sm:mb-0`}>
					Miód powstaje we współpracy pszczół i ludzi...
				</h1>
				<img
					src={picture1}
					alt='Pszczoły'
					className='sm:h-[350px] md:h-[500px] z-1'
				/>
			</div>{' '}
			<div className='border-y-4 border-yellow'>
				<h4 className={`${styles.heading4} text-center text-black py-3`}>
					...pszczoły go tworzą, a my go polecamy !
				</h4>
			</div>
		</section>
	);
};

export default Head;
