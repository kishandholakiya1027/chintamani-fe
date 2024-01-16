import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Cart from "../cart/Cart";
const RootLayout = () => {
  // const [openCart, setOpenCart] = useState(false)
  return (
    <>
      <Header  />
      <Cart  />
      <main>
        <Outlet   />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
