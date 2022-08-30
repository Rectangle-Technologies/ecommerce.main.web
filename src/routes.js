import { Navigate } from "react-router-dom";
import Layout from "./layout";
import AboutPage from "./pages/About";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Cart from './pages/Cart'

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
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
