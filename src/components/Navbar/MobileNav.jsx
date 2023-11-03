import React, { useState } from 'react';
import styles from '../../style';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const menuVariants = {
	hidden: {
		x: '100%',
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav className='sm:hidden'>
			<div
				onClick={() => setOpenMenu(true)}
				className='text-2xl xs:text-3xl ss:text-4xl py-3 cursor-pointer'>
				<RiMenu5Fill />
			</div>
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={openMenu ? 'show' : ''}
				className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 '>
				<div
					onClick={() => setOpenMenu(false)}
					className='text-2xl xs:text-3xl ss:text-4xl absolute z-30 left-6 top-14 text-primary cursor-pointer'>
					<AiFillCloseCircle />
				</div>
				<ul className='h-full flex flex-col justify-center gap-y-4 text-primary font-bold text-center'>
					<li>
						<Link to='/' className={`${styles.mobile}`}>
							Strona główna
						</Link>
					</li>
					<li>
						<Link to='/shop' className={`${styles.mobile}`}>
							Sklep
						</Link>
					</li>
					<li>
						<Link to='/blog' className={`${styles.mobile}`}>
							Blog
						</Link>
					</li>
					<li>
						<Link to='/contact' className={`${styles.mobile}`}>
							Kontakt
						</Link>
					</li>
					
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
