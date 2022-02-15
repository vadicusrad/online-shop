import React from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, setCartItems }) {
	const navigate = useNavigate();
	if (cartItems.length) {
		return (
			<div className='Cart'>
				<h2 className='Cart-title'>Shopping cart</h2>

				<div className='Cart-message'>Great choise!</div>
				<div className='Cart-docket'>
					{cartItems.map((item, index) => {
						return (
							<CartItem
								setCartItems={setCartItems}
								cartItems={cartItems}
								key={index}
								index={index + 1}
								item={item}
							/>
						);
					})}
					<div className='Cart-sum'>
						<div className='Cart-sum_price'>
							<strong>Total:</strong> {getSum(cartItems)}
						</div>
						<div className='Cart-sum_btn'>
							<button>Payment</button>
						</div>
					</div>
				</div>
				<button
					className='Cart-backButton'
					onClick={() => navigate(-1)}
				>
					Back
				</button>
			</div>
		);
	}

	function getSum(cartItems) {
		let sum = 0;
		cartItems.forEach((item) => {
			sum = sum + item.price * item.count;
		});

		return sum.toFixed(2);
	}

	return (
		<div className='Cart'>
			<h2 className='Cart-title'>Shopping cart</h2>
			<div className='Cart-content'>
				<h3 className='Cart-message'>Your basket is empty</h3>
			</div>
			<button className='Cart-backButton' onClick={() => navigate(-1)}>
				Back
			</button>
		</div>
	);
}

export default Cart;
