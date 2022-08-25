import React from "react";
import { connect } from "react-redux";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import Caraousel from "../components/header/caraousel";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Caraousel />
      <Footer />
    </>
  );
};

export default connect(null, {})(Layout);
