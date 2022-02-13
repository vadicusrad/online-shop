import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function BaseLayout({ itemsCount, burgerStateToggle }) {
	return (
		<div>
			<Header
				burgerStateToggle={burgerStateToggle}
				itemsCount={itemsCount}
			/>
			<Outlet />
			<Footer />
		</div>
	);
}

export default BaseLayout;
