import { Navigate } from "react-router-dom";
import Layout from "./layout";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Cart from './pages/Cart'
import ClientDiariesComponent from "./components/ClientDiaries";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import Login from "./pages/Login";
import Category from "./pages/Category";

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
        path: '/diaries',
        element: <ClientDiariesComponent />
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: '/orderstatus/:status',
        element: <OrderStatus />
      },
      {
        path: '/category/:id',
        element: <Category />
      }
    ],
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
