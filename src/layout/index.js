import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default connect(null, {})(Layout);
