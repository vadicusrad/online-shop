import React from 'react';
import './Header.css';
import CartLogo from '../../static/CartLogo';
import { Link, NavLink } from 'react-router-dom';

function Header({ itemsCount, burgerStateToggle, burgerNavState }) {
  return (
    <header className='header'>
      <Link className='header-brand' to='/'>
        <h1>My Store</h1>
      </Link>
      <div className='header-wrapper'>
        <div className='header-nav'>
          <NavLink className='header-nav-link' to={'/'}>
            Main page
          </NavLink>
          <NavLink className='header-nav-link' to={'/about'}>
            About
          </NavLink>{' '}
          |
        </div>

        <div className='header-cartIcon'>
          <NavLink className='header-nav-link' to={'/cart'}>
            <CartLogo />
          </NavLink>

          <span id='itemLengthInCart'>{itemsCount}</span>
        </div>
        <div
          onClick={() => {
            burgerStateToggle();
          }}
          className={
            burgerNavState ? 'header-burger closedBurgerIcon' : 'header-burger'
          }
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
