import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
function BaseLayout({ itemsCount, burgerStateToggle, burgerNavState }) {
  return (
    <>
      <Header
        burgerNavState={burgerNavState}
        burgerStateToggle={burgerStateToggle}
        itemsCount={itemsCount}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
