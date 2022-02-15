import React from 'react';
import './HeaderItem.css';
import { NavLink } from 'react-router-dom';

function HeaderItem({
	// setModalActive,
	headerItemName,
	// setModalContent,
	// modalContent,
	to,
}) {
	// function changeModalContent() {
	//   setModalContent(modalContent);
	//   setModalActive(true);
	// }

	return (
		<NavLink className='header-nav-link' to={to}>
			{headerItemName}
		</NavLink>
	);
}

export default HeaderItem;
