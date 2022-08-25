import { Navigate } from "react-router-dom";
import Layout from "./layout";
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
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
