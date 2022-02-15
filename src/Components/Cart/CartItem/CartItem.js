import React from 'react';
import './CartItem.css';

function CartItem({ item, index, cartItems, setCartItems }) {
	let cartItemColorClasses = 'Cart-item';

	function incrItemCount(item) {
		let newArr = [...cartItems];
		newArr.forEach((arrItem) => {
			if (arrItem === item) {
				arrItem.count++;
			}
			setCartItems(newArr);
		});
	}

	function decrItemCount(item) {
		let newArr = [...cartItems];

		newArr.forEach((arrItem, i) => {
			if (arrItem === item) {
				if (arrItem.count === 1) {
					newArr.splice(i, 1);
				} else {
					arrItem.count--;
				}
			}
			setCartItems(newArr);
		});
	}

	if (index % 2) {
		cartItemColorClasses = `${cartItemColorClasses} grey`;
	}
	return (
		<div className={cartItemColorClasses}>
			{/* <div className="Cart-index">{index}</div> */}
			<div className='Cart-item_title'>
				<h6>{item.title}</h6>
			</div>
			<div className='Cart-item-wrapper'>
				<div className='Cart-item_img'>
					<img src={item.image} alt={item.title} />
				</div>
				<div className='Cart-item_price'>
					price: <strong>{item.price} </strong> $
				</div>
				<div className='Cart-item_btn'>
					<button onClick={() => incrItemCount(item)}>+</button>
					<div className='Cart-item_count'>
						<p>{item.count}</p>
					</div>
					<button onClick={() => decrItemCount(item)}>-</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
