import { createPortal } from 'react-dom';


const Backdrop = (props) => {
	return <div className='fixed top-0 left-0 w-full h-screen z-20 backdrop' onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
	return (
		<div className=' fixed top-72 left-10 py-10 px-20 bg-white border-4 border-yellow rounded-[50px] z-30 modal'>
			<div>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays'); 

const OrderBasket = (props) => {
	return (
		<>
			{createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default OrderBasket;
