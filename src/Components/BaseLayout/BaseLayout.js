import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function BaseLayout({ itemsCount }) {
  return (
    <div>
      <Header itemsCount={itemsCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default BaseLayout;
