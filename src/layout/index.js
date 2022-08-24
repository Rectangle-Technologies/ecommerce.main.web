import React from "react";
import { connect } from "react-redux";
import Footer from "../components/footer/Footer";
import Header from "../components/header";

const Layout = (props) => {
    return (
        <>
            <Header />
            {/* <Footer /> */}
        </>
    )
}

export default connect(null, {})(Layout);