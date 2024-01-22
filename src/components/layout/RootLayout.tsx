import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Cart from "../cart/Cart";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  // const [openCart, setOpenCart] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Cart />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
