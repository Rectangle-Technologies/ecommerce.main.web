import { Navigate } from "react-router-dom";
import Layout from "./layout";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: '/orderstatus/:status',
        element: <OrderStatus />
      }
    ],
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
