import { Navigate } from "react-router-dom";
import Layout from "./layout";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Collab from "./pages/Collab";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Cart from './pages/Cart'
import ClientDiariesComponent from "./components/ClientDiaries";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import EditDetails from "./pages/EditDetails";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Exchange from "./pages/Exchange";
import ReturnPolicy from "./pages/ReturnPolicy";

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
        path: "/collab",
        element: <Collab />,
      },
      {
        path: "/exchange",
        element: <Exchange />,
      },
      {
        path: '/orderstatus/:status',
        element: <OrderStatus />
      },
      {
        path: '/category/:id',
        element: <Category />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: '/editdetails',
        element: <EditDetails />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/order/:id',
        element: <OrderDetails />
      },
      {
        path: 'return',
        element: <ReturnPolicy />
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
