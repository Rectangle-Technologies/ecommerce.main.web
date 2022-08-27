import { Navigate } from "react-router-dom";
import Layout from "./layout";
import AboutPage from "./pages/About";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";

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
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
