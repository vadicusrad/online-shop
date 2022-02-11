import React, { useState, useEffect } from "react";
import "./Aside.css";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

function Aside({ setCurrentCategory }) {
	const CATEGORIES = "https://fakestoreapi.com/products/categories";

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let cleanUpFunc = false;
		fetch(CATEGORIES)
			.then((res) => res.json())
			.then((response) => {
				if (!cleanUpFunc) {
					setCategories(response);
				}
			})
			.catch((error) => console.error("oooops!", error.message));

		return () => (cleanUpFunc = true);
	}, []);

	return (
		<aside className="Content-filters">
			<div className="Content-filters-categories">
				<h3>Categories</h3>
				<ul id="Categories-list">
					<li
						onClick={() => setCurrentCategory("")}
						className="Category-list-item"
					>
						all
					</li>

					{categories.map((item, id) => {
						return (
							<CategoriesItem
								setCurrentCategory={setCurrentCategory}
								categoryName={item}
								key={id}
							/>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}

export default Aside;
