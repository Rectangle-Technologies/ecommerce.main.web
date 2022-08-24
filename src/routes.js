import { Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";

const routes = [
  {
    path: "/",
    element: <Footer />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default routes;
