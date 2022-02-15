import React from 'react';
import './Card.css';

function Card({ cardProps, checkSameItems, setModalActive, setModalContent }) {
	const card = cardProps;

	return (
		<div
			onClick={() => {
				setModalActive(true);
				setModalContent(card);
			}}
			className='Card'
		>
			<div className='Card-title'>
				<h6>{card.title}</h6>
			</div>
			<div className='Card-img'>
				<img src={card.image} alt={card.title} />
			</div>
			<div className='Card-price'>
				price: <strong>{card.price} </strong> $
			</div>
			<div className='Card-btn'>
				<button
					onClick={(e) => {
						checkSameItems(card);
						e.stopPropagation();
					}}
					className='Card-btn-buy'
				>
					Buy
				</button>
			</div>
		</div>
	);
}
export default Card;
