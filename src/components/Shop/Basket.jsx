import styles from '../../style';
import BasketButton from './BasketButton';

const Basket = (props) => {
	return (
		<section>
			<div className={`${styles.marginY} ${styles.marginX}`}>
				<div className='flex justify-around'>
					<BasketButton onClick={props.onShowCart} />
				</div>
			</div>
		</section>
	);
};

export default Basket;
