import styles from '../../style';
import { honey } from '../../const';
import ShopButton from './ShopButton';
import CartContext from '../Order/cart-context';
import { useContext } from 'react';
import { useRef, useState } from 'react';
import Input from './Input'

const Products = (props) => {
	const cartCtx = useContext(CartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};


	onst [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	

	const submitHandler = (event) => {
		event.preventDefault();
	
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
	
		if (
		  enteredAmount.trim().length === 0 ||
		  enteredAmountNumber < 1 ||
		  enteredAmountNumber > 100
		) {
		  setAmountIsValid(false);
		  return;
		}
	
		props.onAddToCart(enteredAmountNumber);
	  };





	return (
		<section className={`${styles.marginY} ${styles.marginX}`}>
			<div className={`${styles.flexRowCol1} gap-8 `}>
				{honey.map((hon) => (
					<div className={`${styles.productsBorder} overflow-hidden`}>
						<img
							src={hon.image}
							alt='Miód'
							className={`${styles.productsImg}`}
						/>

						<div className='my-6 mx-10'>
							<h3 className={`${styles.heading3}`}>{hon.name}</h3>
							<h2 className={`${styles.heading2} text-end`}>{hon.price} zł</h2>
						</div>

						<div onSubmit={submitHandler}>
							<Input
							ref={amountInputRef}
								label='Ilość'
								input={{
									
									id: 'amount_' ,
									type: 'number',
									min: '1',
									max: '5',
									step: '1',
									defaultValue: '1',
								}}
							/>

							<div className='text-center mb-8'>
								<ShopButton onAddToCart={addToCartHandler} />{' '}
								{!amountIsValid && <p>Please enter a valid amount (1-100).</p>}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
