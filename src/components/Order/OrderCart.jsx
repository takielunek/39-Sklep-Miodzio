import styles from '../../style';
import OrderBasket from './OrderBasket'

const OrderCart = (props) => {
	// const cartItems = (
	// 	<ul>
	// 		{[{ id }].map((item) => (
	// 			<li>{item.name}</li>
	// 		))}
	// 	</ul>
	// );

	return (
		<OrderBasket onClose={props.onClose}>
			{/* {cartItems} */}
			<div className='flex flex-row justify-between'>
				<h3 className={`${styles.heading3}`}>Do zapłaty:</h3>
				<h3 className={`${styles.heading3}`}>32 zł</h3>
			</div>
			<div
				className={`${styles.flexRowCol} justify-around mt-10`}>
				<button className={`${styles.buttonStyle}`} onClick={props.onClose}>Zamknij</button>
				<button className={`${styles.buttonStyle}`}>Zamów</button>
			</div>
		</OrderBasket>
	);
};

export default OrderCart;
