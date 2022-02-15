import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
function BaseLayout({ itemsCount, burgerStateToggle, burgerNavState }) {
	return (
		<div>
			<Header
				burgerNavState={burgerNavState}
				burgerStateToggle={burgerStateToggle}
				itemsCount={itemsCount}
			/>
			<Outlet />
			<Footer />
		</div>
	);
}

export default BaseLayout;
