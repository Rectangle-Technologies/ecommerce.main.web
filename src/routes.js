import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <>HOME PAGE</>,
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;