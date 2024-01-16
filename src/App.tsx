import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopItem from "./components/ShopProduct/ShopItem";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/Home";
import JewelleryProduct from "./components/Jewellery/JewelleryProduct";
import ContactUs from "./components/ContactUs/ContactUs";
import WhyUs from "./components/WhyUs/WhyUs";
import DiamondsShapes from "./components/DiamondsShapes/DiamondsShapes";
import DiamondPrice from "./components/DiamondPrice/DiamondPrice";
import CsDiamond from "./components/CsDiamond/CsDiamond";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";
import RoundShape from "./components/diamondshape/RoundShape";
import PrincessShape from "./components/diamondshape/PrincessShape";
import CushionShape from "./components/diamondshape/CushionShape";
import OvalShape from "./components/common/Diamonds";
import EmeraldShape from "./components/diamondshape/EmeraldShape";
import HeartShape from "./components/diamondshape/HeartShape";
import RadiantShape from "./components/diamondshape/RadiantShape";
import PearShape from "./components/diamondshape/PearShape";
import MarquiseShape from "./components/diamondshape/MarquiseShape";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import Diamonds from "./components/common/Diamonds";
import Login from "./pages/auth/login";
import WishList from "./pages/wishlist";
import SignUp from "./pages/auth/sign-up";
import Forgotpassword from "./pages/auth/forgot-password";
import ProductDetails from "./pages/Product/ProductDetails";
import Checkout from "./pages/checkout";
import Blogs from "./pages/Blog";
import Faqs from "./pages/Faq";
import Account from "./pages/account";
import BlogDetails from "./pages/Blog/blogDetails";
import TermsCondition from "./pages/terms-conditions";






const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <Forgotpassword />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "shop",
        element: <ShopItem />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
   
      {
        path: "faq",
        element: <Faqs />,
      },
      {
        path: "terms-condition",
        element: <TermsCondition />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },

      {
        path: "product-category",
        element: <Diamonds />,
      },
      {
        path: "jewellery",
        element: <JewelleryProduct />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "why-us",
        element: <WhyUs />,
      },
      {
        path: "diamonds-shapes",
        element: <DiamondsShapes />,
      },
      {
        path: "diamond-price",
        element: <DiamondPrice />,
      },
      {
        path: "cs-diamond",
        element: <CsDiamond />,
      },
      {
        path: "round-shape",
        element: <RoundShape />,
      },
      {
        path: "princess-shape",
        element: <PrincessShape />,
      },
      {
        path: "cushion-shape",
        element: <CushionShape />,
      },
      {
        path: "oval-shape",
        element: <OvalShape />,
      },
      {
        path: "emerald-shape",
        element: <EmeraldShape />,
      },
      {
        path: "heart-shape",
        element: <HeartShape />,
      },
      {
        path: "radiant-shape",
        element: <RadiantShape />,
      },
      {
        path: "pear-shape",
        element: <PearShape />,
      },
      {
        path: "marquise-shape",
        element: <MarquiseShape />,
      },
    ],
  },
]);

const App = () => {


  return (
    <>
      <ToastContainer />
      <div className="absolute h-screen  w-full flex justify-center loader hidden">
        <div className="animate-spin absolute top-1/2 left-1/2 inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>

      </div>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <ScrollToTopButton />
        </PersistGate>
      </Provider>

    </>
  );
};

export default App;
