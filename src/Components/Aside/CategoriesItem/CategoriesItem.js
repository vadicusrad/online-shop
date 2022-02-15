import React from 'react';
import './CategoriesItem.css';

function CategoriesItem({
	categoryName,
	setCurrentCategory,
	burgerStateToggle,
}) {
	return (
		<li
			onClick={() => {
				setCurrentCategory(categoryName);
				burgerStateToggle();
			}}
			className='Category-list-item'
		>
			{categoryName}
		</li>
	);
}

export default CategoriesItem;
