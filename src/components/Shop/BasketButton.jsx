import styles from '../../style';
import { SlBasket } from 'react-icons/sl';
import {useContext} from 'react';
import CartContext from '../Order/cart-context';



const BasketButton = (props) => {

const cartCtx = useContext(CartContext)

const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {return curNumber + item.amount}, 0);

	return (
		<button
			onClick={props.onClick}
			className={`${styles.productsBorder} flex flex-row py-3 px-8 xs:px-12 cursor-pointer bump`}>
			<h2 className={`${styles.heading2}`}>Koszyk</h2>
			<SlBasket className='Basket' />
			<h3 className='font-nerko text-[18px] ss:text-[21px] sm:text-[25px] text-center bg-yellow rounded-full h-7 ss:h-8 sm:h-9 w-7 ss:w-8 sm:w-9'>
				{numberOfCartItems}
			</h3>
		</button>
	);
};

export default BasketButton;
