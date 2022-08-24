import { Navigate } from "react-router-dom";
import Layout from "./layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
