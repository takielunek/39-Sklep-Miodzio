import { useState } from 'react';
import styles from '../style';
import Basket from '../components/Shop/Basket';
import Products from '../components/Shop/Products';
import Newsletter from '../components/Shop/Newsletter';
import ScrollButton from '../components/ScrollButton';
import OrderCart from '../components/Order/OrderCart';
import CartProvider from '../components/Order/CartProvider'

const Shop = () => {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			<section className={`${styles.marginY}bg-white w-full`}>
				{cartIsShown && <OrderCart onClose={hideCartHandler} />}
				<Basket onShowCart={showCartHandler} />
				{[...Array(8)].map((id) => (
					<Products key={id} />
				))}
				<Newsletter />
				<ScrollButton />
			</section>
		</CartProvider>
	);
};

export default Shop;
