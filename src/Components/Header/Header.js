import React from 'react';
import './Header.css';
import HeaderItem from './HeaderItem/HeaderItem/HeaderItem';
import Cart from '../Cart/Cart';
import CartLogo from '../../static/CartLogo';
import { Link } from 'react-router-dom';

function Header({ itemsCount, burgerStateToggle, burgerNavState }) {
	return (
		<header className='header'>
			<Link className='header-brand' to='/'>
				<h1>My Store</h1>
			</Link>
			<div className='header-wrapper'>
				<div className='header-nav'>
					<HeaderItem headerItemName={'Main page'} to={'/'} />
					<HeaderItem headerItemName={'About'} to={'/about'} />|
				</div>

				<div className='header-cartIcon'>
					<HeaderItem
						headerItemName={<CartLogo />}
						modalContent={Cart}
						to={'/cart'}
					/>
					<span id='itemLengthInCart'>{itemsCount}</span>
				</div>
				<div
					onClick={() => {
						burgerStateToggle();
					}}
					className={
						burgerNavState
							? 'header-burger closedBurgerIcon'
							: 'header-burger'
					}
				>
					<span></span>
				</div>
			</div>
		</header>
	);
}

export default Header;
