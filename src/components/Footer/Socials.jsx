import React, { useState } from 'react';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import styles from '../../style';

const Socials = () => {
	return (
		<div className='hidden md:flex'>
			<ul className='flex gap-x-2'>
				<li>
					<a href='http://www.facebook.com' target='_blank' className={`${styles.hover}`}>
						<ImFacebook />
					</a>
				</li>
				<li>
					<a href='http://www.instagram.com' target='_blank' className={`${styles.hover}`}>
						<BsInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
