import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from '../../style';
import MobileNav from './MobileNav';
import Button from './Button';


const Header = () => {

	

	return (
		<>
			<header className='flex flex-row px-6 xs:px-10 ss:px-20 py-4 w-full'>
				<div className='flex flex-row w-full justify-between items-center'>
					<Link to={'/'} className='flex flex-row'>
						<h1 className={`${styles.logo}`}>Miodzio</h1>
						<img
							src={logo}
							alt='logo'
							className='h-[30px] xs:h-[40px] ss:h-[50px]'
						/>
					</Link>
					<nav className={`${styles.navbar} hidden sm:flex gap-x-6`}>
						<Link to={'/'} className={`${styles.hover}`}>
							Strona główna
						</Link>
						<Link to={'/shop'} className={`${styles.hover}`}>
							Sklep
						</Link>
						<Link to={'/blog'} className={`${styles.hover}`}>
							Blog
						</Link>
						<Link to={'/contact'} className={`${styles.hover}`}>
							Kontakt
						</Link>
					</nav>
				</div>
				<Button />
				<MobileNav />
			</header>
		</>
	);
};

export default Header;
